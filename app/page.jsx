"use client";

import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  newPuzzle,
  updatePuzzleFromCookie,
} from "./AppState/Features/puzzle/puzzleSlice";
import AppLayout from "@/components/AppLayout";
import Grid from "@/components/Grid";

function Home() {
  const { label, image } = useSelector((state) => state.puzzle.labels.x1);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fill-m-next-ts-app.vercel.app/api/puzzles")
      // .get("http://localhost:3000/api/puzzles")
      .then((response) => {
        delete response.data.createdAt;
        delete response.data.updatedAt;
        delete response.data.date;
        delete response.data.__v;

        dispatch(newPuzzle(response.data));
      });
  }, []);

  useEffect(() => {
    if (label || image) {
      if (Cookies.get("game-state")) {
        const gameState = JSON.parse(Cookies.get("game-state"));

        console.log("Game state: ", gameState);
        if (gameState) {
          console.log("uo");
          dispatch(updatePuzzleFromCookie(gameState));
        }
      }
    }
  }, [label, image]);

  return (
    <AppLayout>
      <Grid />
    </AppLayout>
  );
}

export default Home;
