'use client';
import React from 'react'

const Home = () => {
  return (
    <div className='' >
      <div className="fixed top-0 w-full h-28 border border-b-greenT bg-#0000009E flex items-center justify-between px-4 z-50">
        {/* 中间的 Logo */}
        <div className="flex-1 text-center ">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-36 mx-auto"
          />
        </div>

        {/* 右侧的图标 */}
        <div className="flex items-center gap-4">
          <button
            className="text-xl hover:text-yellow-400 transition"
            onClick={() => console.log("Search clicked")}
          >
            🔍
          </button>
          <button
            className="text-xl hover:text-yellow-400 transition"
            onClick={() => console.log("Language switch clicked")}
          >
            🌐
          </button>
        </div>
      </div>
      <div
        className="relative w-full aspect-[16/9] bg-cover bg-center"
        style={{ backgroundImage: `url('/banner.png')` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end ">
          <div className='font-light text-8xl w-11/12' >
            <div className='flex ' >
              <div className='text-#349228' >Goodluc</div>
              <div className='text-#FFD289 pl-2' >X613</div>
            </div>
            <div className='text-white' >High performance</div>
            <div className='text-white' >for free riding on all terrains</div>
            <div className='text-3xl border border-white rounded-2xl px-12 py-6 text-white inline-block mb-28' >
              Learn more
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center' >
        <div className='w-1/2 aspect-[16/9] bg-cover bg-center' style={{ backgroundImage: `url('/cool-motorcycle-studio.png')` }} ></div>
        <div className='w-1/2 aspect-[16/9] bg-cover bg-center -ml-1' style={{ backgroundImage: `url('/cool-motorcycle-studio (1).png')` }} ></div>

      </div>
      <div className='w-full flex justify-center items-center' >
        <div className='w-1/2 aspect-[16/9] bg-cover bg-center' style={{ backgroundImage: `url('/cool-motorcycle-studio (2).png')` }} ></div>
        <div className='w-1/2 aspect-[16/9] bg-cover bg-center -ml-1' style={{ backgroundImage: `url('/cool-motorcycle-studio (1) (1).png')` }} ></div>
      </div>
      <div className='w-full flex justify-center items-center' >
        <div className='w-1/2  aspect-[960/1080] bg-cover bg-center' style={{ backgroundImage: `url('/cool-motorcycle-studio (5) 1.png')` }} ></div>
        <div className='w-1/2 flex flex-col justify-center items-center' >
          <div className='w-full aspect-[16/9] bg-cover bg-center -ml-1' style={{ backgroundImage: `url('/image 1.png')` }} ></div>
          <div className='w-full aspect-[16/9] bg-cover bg-center -ml-1' style={{ backgroundImage: `url('/cool-motorcycle-studio (5) 2.png')` }} ></div>

        </div>
      </div>
    </div>
  )
}

export default Home
