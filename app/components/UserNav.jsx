'use client';

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../components/ui/dropdown-menu'
import { Button } from '../../components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar'
import { signOut } from 'next-auth/react'

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-10 w-10'>
          <Avatar className='h-10 w-10 rounded-sm'>
            <AvatarImage src='https://mommrshylmooqjbnkypc.supabase.co/storage/v1/object/public/user%20image/avatar.png' />
            <AvatarFallback className='h-10 w-10 rounded-sm'>Anoj</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-56 focus:outline-none' align='end' forceMount>
        <DropdownMenuLabel >
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>Anoj</p>
            <p className='leading-none text-muted-foreground text-xs'>anojbudathoki17@gmail.com</p>
          </div>
        </DropdownMenuLabel>
        {/* make horizontal line to divide  */}
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer'
          onClick={() => signOut()}
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav