import MovieCard from "@/app/components/MovieCard";
import authOptions from "@/app/utils/auth";
import prisma from "@/app/utils/db"
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(userId: string) {
    const data = await prisma.watchList.findMany({
        where: {
            userId: userId,
        },
        select: {
            Movie: {
                select: {
                    title: true,
                    overview: true,
                    age: true,
                    youtubeString: true,
                    imageString: true,
                    release: true,
                    id: true,
                    duration: true,
                    WatchLists: true
                }
            }
        }
    });
    return data;
}

export default async function WatchList() {
    const session = await getServerSession(authOptions)
    const data = await getData("abc")
    return <>
    <h1 className="text-4xl font-bold underline mt-10 px-5 sm:px-0">Your WatchList</h1>
        <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0
        mt-10 gap-5
        '>
            {data.map((movie) => (
                <div key={movie.Movie?.id} className='relative h-60'>
                    <Image
                        src={movie?.Movie?.imageString as string}
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
                            <Image src={movie.Movie?.imageString as string}
                                alt='image'
                                height={800}
                                width={800}
                                className='object-cover w-full h-full absolute -z-10 rounded-lg'
                            />

                            <MovieCard
                                movieId={movie?.Movie?.id as number}
                                title={movie?.Movie?.title as string}
                                overview={movie?.Movie?.overview as string}
                                watchListId={movie?.Movie?.WatchLists[0]?.id as string}
                                youtubeUrl={movie?.Movie?.youtubeString as string}
                                watchList={movie?.Movie?.WatchLists.length as number > 0 ? true : false}
                                key={movie?.Movie?.id}
                                age={movie?.Movie?.age as number}
                                time={movie?.Movie?.duration as number}
                                year={movie?.Movie?.release as number}
                            />

                        </div>

                    </div>
                </div>
            ))}
        </div>
    </>
}