"use client";

import { createSlice } from "@reduxjs/toolkit";

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

interface PuzzleInterface {
  date: string;
  labels: LabelInterface;
  answers: AnswersInterface;
  guesses: number;
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
  guesses: 0,
};

export const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    newPuzzle: (state, action) => ({ ...action.payload, guesses: 9 }),
    answerGuessed: (state) => ({
      ...state,
      guesses: state.guesses - 1,
    }),
  },
});

export const { newPuzzle, answerGuessed } = puzzleSlice.actions;

export default puzzleSlice.reducer;
