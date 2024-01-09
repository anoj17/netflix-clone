import React from 'react'
import prisma from '../utils/db'
import { Button } from '@/components/ui/button'
import MovieButton from './MovieButton'
import { Youtube } from 'lucide-react'

async function getData() {
    const data = await prisma.movie.findFirst({
        select: {
            title: true,
            videoSource: true,
            imageString: true,
            youtubeString: true,
            duration: true,
            overview: true,
            id: true,
            release: true,
            age: true
        }
    })
    return data
}

const MovieVideo = async () => {
    const data = await getData()
    return <>
        <div className='h-[55vh] lg:h-[60vh] w-full flex justify-start items-center'>
            <video
                poster={data?.imageString}
                autoPlay
                muted
                loop
                src={data?.videoSource}
                className='object-cover absolute w-full top-0 left-0 h-[60vh] -z-10 brightness-[60%]'
            >
            </video>
            <div className=' lg:w-[40%] mx-auto'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>{data?.title}</h1>
                {/* line-clamp-3 => max 3 ota line banauxa paragraph ma */}
                <p className='text-md text-white line-clamp-3 mt-5'>{data?.overview}</p>
                <div className='mt-4 flex gap-x-4'>
                    <MovieButton
                        title={data?.title as string}
                        youtubeUrl={data?.youtubeString as string}
                        age={data?.age as number}
                        release={data?.release as number}
                        duration={data?.duration as number}
                        overview={data?.overview as string}
                        id={data?.id as number}
                        key={data?.id}
                    />
                </div>
            </div>
        </div>
    </>
}

export default MovieVideo