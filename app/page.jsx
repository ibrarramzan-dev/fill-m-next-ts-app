"use client";

import { useSelector, useDispatch } from "react-redux";
import { feedMovies } from "./AppState/Features/movies/moviesSlice";
import AppLayout from "@/components/AppLayout";
import Grid from "@/components/Grid";
import { useEffect } from "react";

function Home() {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feedMovies(["movie 1", "movie 2"]));
  }, []);

  return (
    <AppLayout>
      <Grid />
    </AppLayout>
  );
}

export default Home;
