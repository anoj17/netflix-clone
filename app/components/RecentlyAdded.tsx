import React from 'react'
import prisma from '../utils/db'
import Image from 'next/image';
import MovieCard from './MovieCard';

async function getData() {
    const data = await prisma.movie.findMany({
        select: {
            id: true,
            overview: true,
            title: true,
            WatchLists: true,
            imageString: true,
            youtubeString: true,
            release: true,
            duration: true,
            age: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 4,
    })
    return data;
}

const RecentlyAdded = async () => {
    const data = await getData()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {
                data.map((movie) => (
                    <div key={movie.id} className='relative h-48'>
                        <Image
                            width={500}
                            height={400}
                            src={movie?.imageString}
                            alt='image'
                            className='w-full absolute object-cover rounded-sm h-full'
                        />

                        <div className='relative h-60 w-full z-10 opacity-0 transform transition duration-500 scale-110 hover:opacity-100'>
                            <div className='bg-gradient-to-b from-transparent via-black/50 to-black 
                        z-10 w-full h-full flex justify-center items-center rounded-lg border
                        '>
                                <Image
                                    height={800}
                                    width={800}
                                    alt='img'
                                    src={movie.imageString}
                                    className='w-full h-full absolute -z-10 rounded-lg object-cover'
                                />
                                <MovieCard
                                    movieId={movie.id}
                                    title={movie.title}
                                    overview={movie.overview}
                                    watchListId={movie.WatchLists[0]?.id}
                                    youtubeUrl={movie.youtubeString}
                                    watchList={movie.WatchLists.length > 0 ? true : false}
                                    key={movie.id}
                                    age={movie.age}
                                    time={movie.duration}
                                    year={movie.release}
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RecentlyAdded