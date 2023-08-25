"use client";

import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

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

interface PuzzleInterface {
  date: string;
  labels: LabelInterface;
  answers: AnswersInterface;
  cellsImages: CellImagesInterface;
  guesses: number;
  puzzleFinished: boolean;
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
      image: "",
      attributionLink: "",
    },
    B: {
      image: "",
      attributionLink: "",
    },
    C: {
      image: "",
      attributionLink: "",
    },
    D: {
      image: "",
      attributionLink: "",
    },
    E: {
      image: "",
      attributionLink: "",
    },
    F: {
      image: "",
      attributionLink: "",
    },
    G: {
      image: "",
      attributionLink: "",
    },
    H: {
      image: "",
      attributionLink: "",
    },
    I: {
      image: "",
      attributionLink: "",
    },
  },
  guesses: 0,
  puzzleFinished: false,
};

export const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    newPuzzle: (state, action) => ({
      ...action.payload,
      cellsImages: initialState.cellsImages,
      guesses: 9,
      puzzleFinished: false,
    }),
    answerGuessed: (state, action) => {
      const { label, id, poster_path } = action.payload;

      const answers: any = state.answers;

      const foundMovie = _.find(answers[label], { id });

      if (foundMovie) {
        return {
          ...state,
          cellsImages: {
            ...state.cellsImages,
            [label]: {
              image: poster_path,
              attributionLink: foundMovie.attributionLink,
            },
          },
          guesses: state.guesses - 1,
          puzzleFinished: state.guesses - 1 === 0 ? true : false,
        };
      } else {
        return {
          ...state,
          guesses: state.guesses - 1,
          puzzleFinished: state.guesses - 1 === 0 ? true : false,
        };
      }
    },
  },
});

export const { newPuzzle, answerGuessed } = puzzleSlice.actions;

export default puzzleSlice.reducer;
