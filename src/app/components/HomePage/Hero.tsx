import Image from 'next/image';
import React from 'react';
import Banner from '@/app/assets/banner.png'

function Hero() {
  return (
    <div className="my-10 container mx-auto flex flex-col-2 justify-between bg-[#7676761a] h-100 rounded-2xl p-4">
      <div className='my-auto ml-35 flex flex-col gap-4'>
        <p className='font-bold text-sm text-[#aaff2b]'>WORKSOUT LIBRABRY</p>
        <h1 className='font-bold text-4xl'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
        <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
        <button className="btn bg-[#aaff2b] text-black font-bold rounded-lg w-50" >BROWSE WORKSOUT</button>
      </div>
      <div className=' my-auto mr-35'>
        <Image
          src={Banner}
          alt="Hero Image"
          width={280}
          height={280}
        />
      </div>
    </div>
  )
}

export default Hero;