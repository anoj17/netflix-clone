import React from 'react'
import prisma from '../utils/db'
import { Button } from '@/components/ui/button'

async function getData() {
    const data = await prisma.movie.findFirst({
        select: {
            title: true,
            videoSource: true,
            imageString: true,
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
            <div className='w-[90%] lg:w-[40%] mx-auto'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold'>{data?.title}</h1>
                {/* line-clamp-3 => max 3 ota line banauxa paragraph ma */}
                <p className='text-lg text-white line-clamp-3 mt-5'>{data?.overview}</p>
                <div className='mt-4 flex gap-x-4'>
                    <Button>See more</Button>
                    <Button>Learn more</Button>
                </div>
            </div>
        </div>
    </>
}

export default MovieVideo