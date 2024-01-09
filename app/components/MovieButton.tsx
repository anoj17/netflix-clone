'use client';

import { Button } from '@/components/ui/button';
import { InfoIcon, PlayCircle } from 'lucide-react';
import React, { useState } from 'react'
import { PlayVideoModel } from './PlayVideoModel';

interface iAppProps {
    title: string;
    overview: string;
    id: number;
    youtubeUrl: string;
    age: number;
    duration: number;
    release: number;
}

const MovieButton = ({ 
    title,
    age,
    duration,
    release,
    overview,
    youtubeUrl,
    id,
     }: iAppProps) => {

    const [open, setOpen] = useState(false)
  return (
    <>
        <Button onClick={()=>setOpen(true)} className='text-sm font-medium'>
            <PlayCircle className='mr-2 h-6 w-6'/> Play
        </Button>
        <Button onClick={()=>setOpen(true)} className='text-sm font-medium bg-white/40 hover:bg-white/30'>
            <InfoIcon className='mr-2 h-6 w-6'/> Learn More
        </Button>
        <PlayVideoModel 
        overview={overview}
        title={title}
        key={id}
        state={open}
        youtubeUrl={youtubeUrl}
        duration={duration}
        release={release}
        age={age}
        changeState={setOpen}/>

    </>
  )
}

export default MovieButton