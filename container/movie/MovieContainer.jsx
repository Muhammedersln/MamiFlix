import React from 'react'
import FeaturedMovie from '@/components/featured-movie/FeaturedMovie'

const MovieContainer = ({movie}) => {
  return (
    <FeaturedMovie movie={movie} isCompact={false}></FeaturedMovie>
  )
}

export default MovieContainer