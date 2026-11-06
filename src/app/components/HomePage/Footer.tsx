import Image from 'next/image';
import React from 'react'
import FooterLogo from '@/app/assets/logo.png'

function Footer() {
    return (
        <div className='container mx-auto bg-base-100 shadow-sm mt-10 flex justify-between my-auto'>
            <div>
                <Image
                    src={FooterLogo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                />
            </div>
            <div>
                <p className='text-gray-500'>@2026 FitLog - Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    )
}

export default Footer;