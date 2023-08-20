import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/featured-movie/FeaturedMovie";
import Categories from "@/components/categories/Categories";
import MovieSection from "@/components/movie-section/MovieSection";
const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}> </FeaturedMovie>
      <Categories categories={Genres.genres.slice(0, 5)}></Categories>
      <MovieSection
        title="Populer Films"
        movies={Movies.results.slice(0, 12)}
      ></MovieSection>
            <MovieSection
        title="Your Favorite"
        movies={Movies.results.slice(9, 27)}
      ></MovieSection>
    </div>
  );
};

export default HomeContainer;
