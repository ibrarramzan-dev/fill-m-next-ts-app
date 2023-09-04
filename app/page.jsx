"use client";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { newPuzzle } from "./AppState/Features/puzzle/puzzleSlice";
import AppLayout from "@/components/AppLayout";
import Grid from "@/components/Grid";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fill-m-next-ts-app.vercel.app/api/puzzles")
      // .get("http://localhost:3000/api/puzzles")
      .then(({ data }) => {
        delete data.createdAt;
        delete data.updatedAt;
        delete data.date;
        delete data.__v;

        dispatch(newPuzzle(data));
      });
  }, []);

  return (
    <AppLayout>
      <Grid />
    </AppLayout>
  );
}

export default Home;
