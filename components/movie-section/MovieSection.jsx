import React from "react";
import Link from "next/link";
import Image from "next/image";

const MovieSection = ({ title, movies }) => {
  
  return (
    <div className="mt-5 p-8 ">
      <h3 className="mb-4 uppercase leading-tight text-xl">{title}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-fr grid-rows-[320px] gap-6 h-[700px] ">
        {movies.map((movie) => (
          <div
            className="rounded-lg relative shadow-md transition-transform duration-300 ease-in hover:z-9 hover:scale-125"
            key={movie.id}
          >

            <Link href={`/movie/${movie.id}`}>
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
