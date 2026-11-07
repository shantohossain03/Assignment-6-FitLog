
import Image from 'next/image';
import React from 'react';
import Banner from '@/app/assets/banner.png'

function Hero() {
  return (
    <div className="my-4 sm:my-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 bg-[#7676761a] min-h-[auto] md:min-h-[400px] rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-8">

      <div className='my-auto ml-0 md:ml-35 flex flex-col gap-2 sm:gap-4 w-full md:w-1/2'>

        <p className='font-bold text-[10px] sm:text-sm text-[#aaff2b]'>
          WORKSOUT LIBRABRY
        </p>

        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>
          TRAIN WITH INTENT. LOG <br /> EVERY SET.
        </h1>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>

        <button className="btn btn-sm sm:btn-md bg-[#aaff2b] text-black font-bold rounded-lg w-40 sm:w-50">
          BROWSE WORKSOUT
        </button>

      </div>

      <div className='my-auto mr-0 md:mr-35 flex justify-center w-full md:w-1/2'>

        <Image
          src={Banner}
          alt="Hero Image"
          width={280}
          height={280}
          className="w-full max-w-[180px] sm:max-w-[230px] md:max-w-[280px] h-auto"
        />

      </div>

    </div>
  )
}

export default Hero;
