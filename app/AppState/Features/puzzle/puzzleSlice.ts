"use client";

import { createSlice, current } from "@reduxjs/toolkit";
import _ from "lodash";
import Cookies from "js-cookie";
import moment from "moment";

interface LabelItemInterface {
  label: string;
  image: string;
  attributionLink: string;
}

interface LabelInterface {
  x1: LabelItemInterface;
  x2: LabelItemInterface;
  x3: LabelItemInterface;
  y1: LabelItemInterface;
  y2: LabelItemInterface;
  y3: LabelItemInterface;
}

interface AnswerInterface {
  movie: "";
  attributionLink: "";
}

interface AnswersInterface {
  A: AnswerInterface[];
  B: AnswerInterface[];
  C: AnswerInterface[];
  D: AnswerInterface[];
  E: AnswerInterface[];
  F: AnswerInterface[];
  G: AnswerInterface[];
  H: AnswerInterface[];
  I: AnswerInterface[];
}

interface CellImagesKeyInterface {
  id: number;
  image: string;
  attributionLink: string;
}

interface CellImagesInterface {
  A: CellImagesKeyInterface;
  B: CellImagesKeyInterface;
  C: CellImagesKeyInterface;
  D: CellImagesKeyInterface;
  E: CellImagesKeyInterface;
  F: CellImagesKeyInterface;
  G: CellImagesKeyInterface;
  H: CellImagesKeyInterface;
  I: CellImagesKeyInterface;
}

interface StatsInterface {
  score: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
  };
}

interface PuzzleInterface {
  date: string;
  labels: LabelInterface;
  answers: AnswersInterface;
  cellsImages: CellImagesInterface;
  moviesGuessed: number[];
  guesses: number;
  puzzleFinished: boolean;
  stats: StatsInterface;
}

const initLabelsKeys = {
  label: "",
  image: "",
  attributionLink: "",
};

const initialState: PuzzleInterface = {
  date: "",
  labels: {
    x1: {
      ...initLabelsKeys,
    },
    x2: {
      ...initLabelsKeys,
    },
    x3: {
      ...initLabelsKeys,
    },
    y1: {
      ...initLabelsKeys,
    },
    y2: {
      ...initLabelsKeys,
    },
    y3: {
      ...initLabelsKeys,
    },
  },
  answers: {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
  },
  cellsImages: {
    A: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    B: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    C: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    D: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    E: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    F: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    G: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    H: {
      id: 0,
      image: "",
      attributionLink: "",
    },
    I: {
      id: 0,
      image: "",
      attributionLink: "",
    },
  },
  moviesGuessed: [],
  guesses: 0,
  puzzleFinished: false,
  stats: {
    score: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    },
  },
};

export const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    newPuzzle: (state, action) => ({
      ...action.payload,
      cellsImages: initialState.cellsImages,
      moviesGuessed: [],
      guesses: 9,
      puzzleFinished: false,
    }),
    answerGuessed: (state, action) => {
      const { label, id, poster_path } = action.payload;

      const { answers, moviesGuessed }: any = current(state);
      const foundMovie = _.find(answers[label], { id });

      const foundMovieObj = {
        ...state,
        cellsImages: {
          ...state.cellsImages,
          [label]: {
            id,
            image: poster_path,
            attributionLink: foundMovie?.attributionLink,
          },
        },
        moviesGuessed: [...moviesGuessed, foundMovie?.id],
        guesses: state.guesses - 1,
        puzzleFinished: state.guesses - 1 === 0 ? true : false,
      };

      const notFoundMovieObj = {
        ...state,
        guesses: state.guesses - 1,
        puzzleFinished: state.guesses - 1 === 0 ? true : false,
      };

      const date = new Date();
      let month: any = date.getUTCMonth() + 1;
      if (month.toString().length === 1) {
        month = `0${month}`;
      }

      const localDate = moment
        .utc(`${date.getUTCFullYear()}-${month}-${date.getUTCDate()}T23:59:59`)
        .local()
        .toDate();

      if (foundMovie) {
        const filteredGameState = _.omit(foundMovieObj, [
          "labels",
          "answers",
          "stats",
        ]);

        Cookies.set("game-state", JSON.stringify(filteredGameState), {
          expires: localDate,
        });

        return foundMovieObj;
      } else {
        const filteredGameState = _.omit(notFoundMovieObj, [
          "labels",
          "answers",
          "stats",
        ]);

        Cookies.set("game-state", JSON.stringify(filteredGameState), {
          expires: localDate,
        });

        return notFoundMovieObj;
      }
    },
    updatePuzzleFromCookie: (state, action) => {
      const gameState = action.payload;
      return {
        ...state,
        ...gameState,
      };
    },
  },
});

export const { newPuzzle, answerGuessed, updatePuzzleFromCookie } =
  puzzleSlice.actions;

export default puzzleSlice.reducer;
