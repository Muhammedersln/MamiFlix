import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "@/container/movie/MovieContainer";
import Movies from "@/mocks/movies.json";

const MoviePage = ({ params, searchParamas }) => {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  console.log(params)

  if (!movieDetail) {
    notFound();
  }
  if (searchParamas?.error === "true") {
    throw new Error("Movie not found");
  }

  return <MovieContainer movie={movieDetail}></MovieContainer>;
};

export default MoviePage;
