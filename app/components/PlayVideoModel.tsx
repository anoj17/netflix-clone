import { DialogHeader } from '@/components/ui/dialog';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import React from 'react'

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any
}

export const PlayVideoModel = ({ title,
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
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
}
