import { DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import React from 'react'

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    age: number;
    duration: number;
    release: number;
}

export const PlayVideoModel = ({ 
    title,
    age,
    duration,
    release,
    overview,
    youtubeUrl,
    state,
    changeState }: iAppProps) => {

    return <>
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription className='line-clamp-3'>
                        {overview}
                    </DialogDescription>
                    <div className='flex gap-x-3 items-center'>
                        <p>{release}</p>
                        <p className='border border-gray-200 py-0.5 px-1 rounded'>{age}+</p>
                        <p>{duration}</p>
                    </div>
                </DialogHeader>
                <iframe src={youtubeUrl} height={250} className='w-full'>
                </iframe>
            </DialogContent>
        </Dialog>
    </>
}
