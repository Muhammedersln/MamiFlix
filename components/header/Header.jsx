import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white bg-gradient-to-b to-transparent p-8 from-black" >
      <div className=" flex justify-between">
        <Link href="/" className="flex text-2xl gap-2 items-center">
          <FaPlayCircle></FaPlayCircle> MAMIFLIX
        </Link>

       <nav className="flex items-center gap-12   text-2xl">
        <Link className="hover:underline" href="/">Movies</Link>
        <Link className="hover:underline" href="/">Series</Link>
        <Link className="hover:underline" href="/">Kids</Link>
       </nav>
      </div>
    </header>
  );
};

export default Header;
