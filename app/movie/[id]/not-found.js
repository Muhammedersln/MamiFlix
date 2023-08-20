import React from 'react'
import Link from 'next/link'

const Movie404 = () => {
  return (
    <div className='h-[88vh] flex items-center justify-center flex-col'>
        <h1 className='text-3xl'>We couldn't find the movie you looking for!</h1>
        <Link href={"/"}
        className='underline text-xl mt-2'> Go Home</Link>

    </div>
  )
}

export default Movie404