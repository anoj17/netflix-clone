import React from 'react';
import prisma from '@/app/utils/db';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/utils/auth';
import Image from 'next/image';
import MovieCard from '@/app/components/MovieCard';

async function getData(category: string, userId: string) {
    switch (category) {
        case "show": {
            const data = await prisma.movie.findMany({
                where: {
                    category: "show",
                },
                select: {
                    title: true,
                    overview: true,
                    age: true,
                    youtubeString: true,
                    imageString: true,
                    release: true,
                    id: true,
                    duration: true,
                    WatchLists: {
                        where: {
                            userId: userId,
                        }
                    }
                }
            });
            return data;
        }
        case "movies": {
            const data = await prisma.movie.findMany({
                where: {
                    category: "movie",
                },
                select: {
                    title: true,
                    overview: true,
                    age: true,
                    youtubeString: true,
                    imageString: true,
                    release: true,
                    id: true,
                    duration: true,
                    WatchLists: {
                        where: {
                            userId: userId,
                        }
                    }
                }
            });
            return data;
        }
        case "recently": {
            const data = await prisma.movie.findMany({
                where: {
                    category: "recent",
                },
                select: {
                    title: true,
                    overview: true,
                    age: true,
                    youtubeString: true,
                    imageString: true,
                    release: true,
                    id: true,
                    duration: true,
                    WatchLists: {
                        where: {
                            userId: userId,
                        }
                    }
                }
            });
            return data;
        }
        default: {
            throw new Error("404 error")
        }
    }
}

const CategoryList = async ({ params }: { params: { genre: string } }) => {

    const session = await getServerSession(authOptions);
    const data = await getData(params.genre, 'abc');

    return (
        <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0
        mt-10 gap-5
        '>
            {data.map((movie) => (
                <div key={movie.id} className='relative h-60'>
                    <Image
                        src={movie?.imageString}
                        alt='movie'
                        height={400}
                        width={500}
                        className='object-cover rounded-sm absolute h-full w-full'
                    />
                    <div className='relative h-60 transform transition duration-200 hover:scale-110 opacity-0 hover:opacity-100'>
                        <div
                            className='bg-gradient-to-b from-transparent rounded-lg via-black/60 to-black z-10 w-full h-full border 
                    flex justify-center items-center
                    '>
                            <Image src={movie.imageString}
                                alt='image'
                                height={800}
                                width={800}
                                className='object-cover w-full h-full absolute -z-10 rounded-lg'
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
            ))}
        </div>
    );
};

export default CategoryList;
