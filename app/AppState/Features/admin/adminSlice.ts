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
  id: number;
  movie: string;
  image: string;
  attributionLink: string;
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

export interface Admin {
  dashboard: {
    isSidebarOpened: boolean;
  };
  puzzle: PuzzleInterface;
}

const initLabelsKeys = {
  label: "",
  image: "",
  attributionLink: "",
};

const initialState: Admin = {
  dashboard: {
    isSidebarOpened: false,
  },
  puzzle: {
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
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    toggleSidebar: (state: Admin, action) => ({
      ...state,
      dashboard: {
        isSidebarOpened: action.payload,
      },
    }),
    updateDate: (state: Admin, action) => ({
      ...state,
      puzzle: { ...state.puzzle, date: action.payload },
    }),
    updateLabel: (state: Admin, action) => {
      const { position, val } = action.payload;

      if (position === "x1") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x1: { ...state.puzzle.labels.x1, label: val },
            },
          },
        };
      } else if (position === "x2") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x2: { ...state.puzzle.labels.x2, label: val },
            },
          },
        };
      } else if (position === "x3") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x3: { ...state.puzzle.labels.x3, label: val },
            },
          },
        };
      } else if (position === "y1") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y1: { ...state.puzzle.labels.y1, label: val },
            },
          },
        };
      } else if (position === "y2") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y2: { ...state.puzzle.labels.y2, label: val },
            },
          },
        };
      } else {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y3: { ...state.puzzle.labels.y3, label: val },
            },
          },
        };
      }
    },
    updateImgUrl: (state: Admin, action) => {
      const { position, val } = action.payload;

      if (position === "x1") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x1: { ...state.puzzle.labels.x1, image: val },
            },
          },
        };
      } else if (position === "x2") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x2: { ...state.puzzle.labels.x2, image: val },
            },
          },
        };
      } else if (position === "x3") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x3: { ...state.puzzle.labels.x3, image: val },
            },
          },
        };
      } else if (position === "y1") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y1: { ...state.puzzle.labels.y1, image: val },
            },
          },
        };
      } else if (position === "y2") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y2: { ...state.puzzle.labels.y2, image: val },
            },
          },
        };
      } else {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y3: { ...state.puzzle.labels.y3, image: val },
            },
          },
        };
      }
    },
    updateAttrLink: (state: Admin, action) => {
      const { position, val } = action.payload;

      if (position === "x1") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x1: { ...state.puzzle.labels.x1, attributionLink: val },
            },
          },
        };
      } else if (position === "x2") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x2: { ...state.puzzle.labels.x2, attributionLink: val },
            },
          },
        };
      } else if (position === "x3") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              x3: { ...state.puzzle.labels.x3, attributionLink: val },
            },
          },
        };
      } else if (position === "y1") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y1: { ...state.puzzle.labels.y1, attributionLink: val },
            },
          },
        };
      } else if (position === "y2") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y2: { ...state.puzzle.labels.y2, attributionLink: val },
            },
          },
        };
      } else {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            labels: {
              ...state.puzzle.labels,
              y3: { ...state.puzzle.labels.y3, attributionLink: val },
            },
          },
        };
      }
    },
    addAnswer: (state: Admin, action) => {
      const { cellLabel, tmdbId, selectedMovie, poster_path } = action.payload;

      if (cellLabel === "A") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              A: [
                ...state.puzzle.answers.A,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else if (cellLabel === "B") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              B: [
                ...state.puzzle.answers.B,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else if (cellLabel === "C") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              C: [
                ...state.puzzle.answers.C,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else if (cellLabel === "D") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              D: [
                ...state.puzzle.answers.D,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else if (cellLabel === "E") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              E: [
                ...state.puzzle.answers.E,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else if (cellLabel === "F") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              F: [
                ...state.puzzle.answers.F,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else if (cellLabel === "G") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              G: [
                ...state.puzzle.answers.G,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else if (cellLabel === "H") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              H: [
                ...state.puzzle.answers.H,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      } else {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              I: [
                ...state.puzzle.answers.I,
                {
                  id: tmdbId,
                  movie: selectedMovie,
                  image: poster_path,
                  attributionLink: "",
                },
              ],
            },
          },
        };
      }
    },
    addAnswerMovieAttrLink: (state: Admin, action) => {
      const { cellLabel, movie, link } = action.payload;

      if (cellLabel === "A") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              A: state.puzzle.answers.A.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else if (cellLabel === "B") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              B: state.puzzle.answers.B.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else if (cellLabel === "C") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              C: state.puzzle.answers.C.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else if (cellLabel === "D") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              D: state.puzzle.answers.D.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else if (cellLabel === "E") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              E: state.puzzle.answers.E.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else if (cellLabel === "F") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              F: state.puzzle.answers.F.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else if (cellLabel === "G") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              G: state.puzzle.answers.G.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else if (cellLabel === "H") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              H: state.puzzle.answers.H.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      } else {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              I: state.puzzle.answers.I.map((answer) => ({
                ...answer,
                attributionLink:
                  answer.movie === movie ? link : answer.attributionLink,
              })),
            },
          },
        };
      }
    },
    deleteAnswers: (state: Admin, action) => {
      const { cellLabel, movieToDelete } = action.payload;

      if (cellLabel === "A") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              A: state.puzzle.answers.A.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else if (cellLabel === "B") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              B: state.puzzle.answers.B.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else if (cellLabel === "C") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              C: state.puzzle.answers.C.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else if (cellLabel === "D") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              D: state.puzzle.answers.D.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else if (cellLabel === "E") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              E: state.puzzle.answers.E.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else if (cellLabel === "F") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              F: state.puzzle.answers.F.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else if (cellLabel === "G") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              G: state.puzzle.answers.G.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else if (cellLabel === "H") {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              H: state.puzzle.answers.H.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      } else {
        return {
          ...state,
          puzzle: {
            ...state.puzzle,
            answers: {
              ...state.puzzle.answers,
              I: state.puzzle.answers.I.filter(
                (movie) => movie.movie !== movieToDelete
              ),
            },
          },
        };
      }
    },
    resetPuzzle: (state: Admin) => ({
      ...state,
      puzzle: initialState.puzzle,
    }),
  },
});

export const {
  toggleSidebar,
  updateDate,
  updateLabel,
  updateImgUrl,
  updateAttrLink,
  addAnswer,
  addAnswerMovieAttrLink,
  deleteAnswers,
  resetPuzzle,
} = adminSlice.actions;

export default adminSlice.reducer;
