import { Button } from '@/components/ui/button';
import { Heart, PlayCircle } from 'lucide-react';
import React from 'react'

interface iAppProps {
  title: string;
  movieId: number;
  overview: string;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  age: number;
  time: number;
  year: number;
}

const MovieCard = ({title, movieId, overview, year, time, age, watchList, watchListId, youtubeUrl}:iAppProps) => {
  return (
    <>
    <Button className=''>
        <PlayCircle className=''/>
    </Button>
    <div className='right-5 top-5 absolute z-10'>
      {
        watchList ? <form>
          <Button variant='outline' size='icon'>
            <Heart className='h-4 w-4 text-red-700'/>
          </Button>
        </form>
        :
        <form>
        <Button variant='outline' size='icon'>
          <Heart className='h-4 w-4'/>
        </Button>
      </form>
      }
    </div>
    <div className='absolute bottom-0 p-5 left-0'>
      <h1 className='font-bold text-lg line-clamp-1'>{title}</h1>
      <div className='flex gap-x-3'>
        <p className='font-normal text-sm'>{year}</p>
        <p className='border-gray-400 font-normal rounded border py-0.5 px-1'>{age}+</p>
        <p className='font-normal text-sm'>{time}h</p>
      </div>
      <div className='line-clamp-1 text-sm text-gray-200'>{overview}</div>
    </div>
    </>
  )
}

export default MovieCard