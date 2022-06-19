import Image from 'next/image'
import React from 'react'
import { Movie } from '../typing'
import { useState, useEffect } from 'react'
import { baseUrl } from '../constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [])

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 '>
      <div className='absolute top-0 -z-10 left-0 h-[95vh] w-screen'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h1 className='text-2xl text-shadow-lg font-bold md:text-3xl lg:text-4xl'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className='max-w-xs text-xs md:max-w-large md:text-lg lg:max-w-2xl lg:text-2xl'>
        {movie?.overview}
      </p>
      <div className='flex space-x-3'>
        <button className='bannerButton bg-white text-black'>
          <FaPlay className='h-3 w-3 md:h-5 md:w-5 text-black' /> Play
        </button>
        <button
          className='bannerButton bg-[gray]/70'
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          More info <InformationCircleIcon className='h-3 w-3 md:h-5 md:w-5' />
        </button>
      </div>
    </div>
  )
}

export default Banner
