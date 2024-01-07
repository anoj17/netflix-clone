import Image from "next/image";
import { ReactNode } from "react";
import backgroundImg from '../../public/login_background.jpg'
import Logo from '../../public/netflix_logo.svg'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-black h-screen flex w-screen md:items-center md:justify-center
        md:bg-transparent flex-col
        ">
            <Image src={backgroundImg} alt="bgImg"
                className="hidden sm:flex sm:object-cover -z-10 brightness-50"
                priority
                fill
            />
            
            <Image src={Logo} alt="logo"
            width={120}
            height={120}
            priority
            className="absolute object-contain left-4 top-4 md:left-10 md:top-6"
            />
            {children}
        </div>
    )
}