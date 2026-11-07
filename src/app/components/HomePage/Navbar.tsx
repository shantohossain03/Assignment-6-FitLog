"use client";

import Image from 'next/image';
import React, { useContext } from 'react'
import Logo from '@/app/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExerciseContext, useExerciseContext } from '@/app/context/ExerContext';

function Navbar() {
    const pathname = usePathname();
    const { addTodays, saved } = useExerciseContext();
    return (
        <div className="navbar flex-nowrap bg-base-100 shadow-sm container mx-auto px-1.5 sm:px-4 py-1.5 sm:py-4">
            <div className="navbar-start min-w-0 flex-1">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="/" className={`w-25 flex justify-center text-center ${pathname === "/" ? "font-bold text-[#bdff07] bg-[#a2ff002f]" : ""}`}>
                                Workouts
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-plan" className={`w-25 flex justify-center text-center ${pathname === "/my-plan" ? "font-bold text-[#bdff07] bg-[#a2ff002f]" : ""}`}>
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>
                <Image
                    src={Logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="h-7 w-7 sm:h-10 sm:w-10"
                />
                <a className="btn btn-ghost text-base sm:text-xl font-bold px-1">FITLOG</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-2">
                    <li>
                        <Link href="/" className={`w-25 flex justify-center text-center ${pathname === "/" ? "font-bold text-[#bdff07] bg-[#a2ff002f] rounded-2xl" : ""}`}>
                            Workouts
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-plan" className={`w-25 flex justify-center text-center ${pathname === "/my-plan" ? "font-bold text-[#bdff07] bg-[#a2ff002f] rounded-2xl" : ""}`}>
                            My Plan
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex-none gap-1.5 sm:gap-3 md:gap-10 text-[11px] sm:text-base">
                <h1>Plan <span className="rounded-full bg-[#c6ff00] text-black font-bold text-[10px] sm:text-xs px-1.5 sm:px-3 py-0.5 sm:py-1">
                    {addTodays.length}
                </span> </h1>
                <h1>Saved <span className="rounded-full bg-[#c6ff00] text-black font-bold text-[10px] sm:text-xs px-1.5 sm:px-3 py-0.5 sm:py-1">
                    {saved.length}
                </span> </h1>
            </div>
        </div>
    )
}

export default Navbar;