'use client';
import React from 'react'
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation("common");
  const footerItems = [
    {
      title: 'IN FASHION FREEDOM',
      items: [
        { title: 'Online Service' },
        { title: '400-822-8550' },
        { title: 'Monday to Sunday 08:00-21:00' },
      ]
    },
    {
      title: 'Product',
      haveDot: true,
      items: [
        { title: 'E-Motor' },
        { title: 'E-Scooter' },
        { title: 'ETW-Micro vehicle' },
        { title: 'E-bike' }
      ]
    },
    {
      title: 'Technology',
      haveDot: true,
      items: [
        { title: 'Engine' },
        { title: 'Golden labeled battery' },
        { title: 'GOODLUK Azure controller' },
        { title: 'Energy saying technology' },
        { title: 'Intelligent ecology' }

      ]
    },
    {
      title: 'Lifestyle',
      haveDot: true,
      items: [
        { title: 'Wonderful moments' }

      ]
    },
    {
      title: 'About GOODLUK',
      haveDot: true,
      items: [
        { title: 'Introduction' },
        { title: 'Honer' },
        { title: 'Public welfare' },
        { title: 'Contract us' }
      ]
    }
  ]
  return (
    <div className='bg-#1B1B2C' >
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
        <div className="flex items-center gap-8">
          <button
            className="text-2xl hover:text-#FFD289 transition icon iconfont icon-search text-white"
            onClick={() => console.log("Search clicked")}
          >

          </button>
          <button
            className="text-3xl hover:text-#FFD289 transition icon iconfont icon-language text-white"
            onClick={() => console.log("Language switch clicked")}
          >

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
              <div className='text-#349228' >Goodluk</div>
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
        {/* <div className='w-1/2 aspect-[16/9] bg-cover bg-center' style={{ backgroundImage: `url('/cool-motorcycle-studio.png')` }} ></div>
        <div className='w-1/2 aspect-[16/9] bg-cover bg-center -ml-1' style={{ backgroundImage: `url('/cool-motorcycle-studio (1).png')` }} ></div> */}
        <div
          className="w-1/2 aspect-[16/9] bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url('/cool-motorcycle-studio.png')` }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url('/image.png')`)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url('/cool-motorcycle-studio.png')`)}
        ></div>
        <div
          className="w-1/2 aspect-[16/9] bg-cover bg-center -ml-1 transition-all duration-500 ease-in-out"
          style={{ backgroundImage: `url('/cool-motorcycle-studio (1).png')` }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url('/image (1).png')`)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url('/cool-motorcycle-studio (1).png')`)}
        ></div>

      </div>
      <div className='w-full flex justify-center items-center' >
        <div className='w-1/2 aspect-[16/9] bg-cover bg-center transition-all duration-500 ease-in-out'
          style={{ backgroundImage: `url('/cool-motorcycle-studio (2).png')` }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url('image (2).png')`)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url('/cool-motorcycle-studio (2).png')`)}
        ></div>
        <div className='w-1/2 aspect-[16/9] bg-cover bg-center -ml-1 transition-all duration-500 ease-in-out' style={{ backgroundImage: `url('/cool-motorcycle-studio (1) (1).png')` }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url('image (3).png')`)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url('cool-motorcycle-studio (1) (1).png')`)}
        ></div>
      </div>
      <div className='w-full flex justify-center items-center' >
        <div className='w-1/2  aspect-[960/1080] bg-cover bg-center' style={{ backgroundImage: `url('/cool-motorcycle-studio (5) 1.png')` }} >
          <div className='w-full h-full flex justify-end items-center font-light text-8xl text-#FFD289 pr-24' >ABOUT US</div>
        </div>
        <div className='w-1/2 flex flex-col justify-center items-center' >
          <div className='w-full aspect-[16/9] bg-cover bg-center -ml-1 relative' style={{ backgroundImage: `url('/image 1.png')` }} >
            <div className='w-full flex  justify-center items-center text-5xl text-white absolute bottom-11' >Riding guide</div>
          </div>
          <div className='w-full aspect-[16/9] bg-cover bg-center -ml-1' style={{ backgroundImage: `url('/cool-motorcycle-studio (5) 2.png')` }} >
            <div className='w-full flex h-full  justify-center items-center text-7xl text-white ' >Wonderful moments</div>
          </div>

        </div>
      </div>
      <div className='w-full flex justify-center items-center pt-16 pb-32' >
        <div className='w-11/12 bg-#1B1B2C flex justify-between items-stretch' >
          {footerItems.map((item, index) => {
            return <div key={index} className='flex-1 flex flex-col justify-start items-start text-white  text-2xl' >
              <div className='font-bold mb-4' > {item.title} </div>
              {item.items.map((_item, _index) => {
                return <div className={`text font-light mb-2 flex justify-start items-center`} key={_index}>
                  {item.haveDot ? <div className='w-1 h-1 rounded-full bg-white mx-4'></div> : ''} {_item.title}
                </div>
              })}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
