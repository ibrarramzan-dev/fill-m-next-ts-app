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
};

export const puzzleSlice = createSlice({
  name: "puzzle",
  initialState,
  reducers: {
    newPuzzle: (state, action) => action.payload,
  },
});

export const { newPuzzle } = puzzleSlice.actions;

export default puzzleSlice.reducer;
