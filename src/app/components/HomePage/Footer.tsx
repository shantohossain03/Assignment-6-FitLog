import Image from 'next/image';
import React from 'react';
import FooterLogo from '@/app/assets/logo.png';

function Footer() {
    return (
        <div className="container mx-auto bg-base-100 shadow-sm mt-4 sm:mt-6 px-2 sm:px-3 py-2 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">

            <div className="shrink-0">
                <Image
                    src={FooterLogo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="h-7 w-7 sm:h-10 sm:w-10"
                />
            </div>

            <div className="text-center">
                <p className="text-gray-500 text-[10px] sm:text-sm">
                    @2026 FitLog - Workout Library. Train hard, log honest.
                </p>
            </div>

        </div>
    );
}

export default Footer;