import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Google from '../../../public/google.svg'
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import authOptions from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect("/home")
    }
    return (
        <div className="bg-black/80 mt-10 py-16 px-6 md:pt-8 md:max-w-sm rounded md:px-16">
            <form
                method="post"
                action='/api/auth/signin'>
                <h1 className="font-semibold text-3xl text-white text-center">Login</h1>
                <Input
                    type='email'
                    name="email"
                    placeholder="Email"
                    className="w-full my-2 mt-8 bg-[#333] placeholder:text-xs placeholder:text-gray-400 inline-block "
                />
                <Button
                    type="submit"
                    className="w-full bg-[#e50914] my-2"
                    variant='destructive'
                >Login
                </Button>
                <div className="flex justify-center text-gray-600 items-center text-sm">
                    New to Netflix?{''}
                    <Link className="text-white hover:underline" href='/sign-up'>Sign-up now!</Link>
                </div>

                <div className="flex justify-center items-center space-x-4 mt-7">
                    <Button variant='outline' size='icon'>
                        <GithubIcon className="w-4 h-4" />
                    </Button>

                    <Button variant='outline' size='icon'>
                        <Image src={Google} alt="google" className="w-4 h-4" />
                    </Button>
                </div>
            </form>
        </div>
    )
}