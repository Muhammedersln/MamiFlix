"use client";
import React from "react";
import Link from 'next/link'
const Error = () => {
  return (
    <div className="h-[88vh] flex items-center justify-center flex-col">
      <h1 className="text-3xl">An error has occurred. Sorry for that!</h1>
      <Link href={"/"} className="underline text-xl mt-2">
        {" "}
        Go Home
      </Link>
    </div>
  );
};

export default Error;
