"use client";

import { Button } from '@/components/ui/button';
import { Heart, PlayCircle } from 'lucide-react';
import React, { useState } from 'react'
import { PlayVideoModel } from './PlayVideoModel';
import addToWatchList, { deleteWatchList } from '../action';
import { usePathname } from 'next/navigation';

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

const MovieCard = ({ title,
  movieId,
  overview,
  year,
  time,
  age,
  watchList,
  watchListId,
  youtubeUrl }: iAppProps) => {

  const [open, setOpen] = useState(false)
  const pathName = usePathname()

  const changeState = (e: any) => {
    e.preventDefault()
    setOpen(true)
  }
  return (
    <>
      <Button
        onClick={changeState}
        className=''>
        <PlayCircle className='h-10 w-10' />
      </Button>
      <div className='right-5 top-5 absolute z-10'>
        {
          watchList ?
            <form action={deleteWatchList}>
              <Button variant='outline' size='icon'>
                <input type='hidden' value={watchListId} name='watchListId' />
                <input type='hidden' name='pathName' value={pathName} />
                <Heart className='h-4 w-4 text-red-700' />
              </Button>
            </form>
            :
            <form action={addToWatchList}>
              <input type='hidden' value={movieId} name='movieId' />
              <input type='hidden' name='pathName' value={pathName} />
              <Button variant='outline' size='icon'>
                <Heart className='h-4 w-4' />
              </Button>
            </form>
        }
      </div>
      <div className='absolute bottom-0 p-5 left-0'>
        <h1 className='font-bold text-lg line-clamp-1'>{title}</h1>
        <div className='flex gap-x-3 items-center'>
          <p className='font-normal text-sm'>{year}</p>
          <p className='border-gray-400 font-normal rounded border py-0.5 px-1'>{age}+</p>
          <p className='font-normal text-sm'>{time}h</p>
        </div>
        <p className='line-clamp-1 text-sm font-light text-gray-200'>{overview}</p>
      </div>

      <PlayVideoModel
        overview={overview}
        youtubeUrl={youtubeUrl}
        title={title}
        key={movieId}
        state={open}
        duration={time}
        release={year}
        age={age}
        changeState={setOpen}
      />
    </>
  )
}

export default MovieCard