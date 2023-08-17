"use client";

import { createSlice } from "@reduxjs/toolkit";
import moment, { Moment } from "moment";

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

interface AnswersInterface {
  x1y1: string[];
  x1y2: string[];
  x1y3: string[];
  x2y1: string[];
  x2y2: string[];
  x2y3: string[];
  x3y1: string[];
  x3y2: string[];
  x3y3: string[];
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
      x1y1: [],
      x1y2: [],
      x1y3: [],
      x2y1: [],
      x2y2: [],
      x2y3: [],
      x3y1: [],
      x3y2: [],
      x3y3: [],
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
  },
});

export const {
  toggleSidebar,
  updateDate,
  updateLabel,
  updateImgUrl,
  updateAttrLink,
} = adminSlice.actions;

export default adminSlice.reducer;
