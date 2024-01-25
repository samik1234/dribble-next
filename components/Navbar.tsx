import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";


const Navbar = () => {
    const session = {};

    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href='/'>
                    <Image
                        src='/logo.png'
                        width={116}
                        height={43}
                        alt='logo'
                    />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.text}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className='flexCenter gap-4'>
                {session ? (
                    <>
                        UserProfile
                        <Link href="/create-project">
                            share work
                        </Link>

                    </>
                ): (
                  <AuthProviders />
                )}


            </div>
        </nav>
    )
}

export default Navbar
