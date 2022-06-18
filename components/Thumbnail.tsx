import Image from 'next/image'
import { Movie } from '../typing'
import { baseImageUrl } from '../constants/movie'

interface Props {
  // movie: Movie | DocumentData
  movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 eas-out md:h-36  md:hover:scale-105'>
      <Image
        src={`${baseImageUrl}${movie?.backdrop_path || movie?.poster_path}`}
        className='rounded-sm object-cover md:rounded'
        layout='fill'
      />
    </div>
  )
}

export default Thumbnail