import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
const FeaturedMovie = ({ movie, isCompact = true }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className="flex h-full flex-col gap-6 mt-14 mb-14 p-8">
      <h1 className=" max-w-[30ch] uppercase text-[50px] tracking[-1] font-bold leading-[55px]">
        {title}
      </h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-white text-gray-800 w-72 rounded-full text-lg font-semibold border-2"
          href={`/movie${movie.id}`}
        >
          Play
        </Link>
        <div></div>
        <div className="flex items-center justify-center border-2 rounded-full  w-16 h-16 ">
          <button>
            <FaPlus></FaPlus>
          </button>
        </div>
      </div>
      <div>
        <div className={styles.moviePoster}>
          <div className={styles.moviePosterOverlay}></div>
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
