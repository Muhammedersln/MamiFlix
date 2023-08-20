import Link from 'next/link'
import React from 'react'

const Categories = ({categories }) => {
  return (
    <div className='p-8 flex gap-6 justify-between '>
       {categories.map((category) => (
        <Link
        className='flex items-center justify-center bg-black bg-opacity-75  border border-[#333] px-12 py-2 h-full rounded-s-md font-bold '
          key={category.id}
          href={`/${category.id}`}
        >
          <div>{category.name}</div>
        </Link>
       ))}
    </div>
  )
}

export default Categories