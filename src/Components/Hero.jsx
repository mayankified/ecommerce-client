import React from 'react'


import men from '../assets/mens.webp'
import watch from '../assets/watch.jpeg'
import shoes from '../assets/shoes.jpeg'
import elec from '../assets/elec.jpeg'
import women from '../assets/women.jpeg'
import model from '../assets/model.jpeg'

const Hero = () => {
  return (
    <div className='flex  lg:flex-row flex-col justify-between sm:px-20 px-6 items-center'>
      <div className="sm:max-w-lg w-full sm:pt-0 pt-[130px] flex flex-col items-center justify-end">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Summer styles are finally here
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-[500px]">
          This year, our new summer collection will shelter you from the harsh elements of a world that doesn't
          care if you live or die.
        </p>
        <a
          href="#"
          className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 my-6"
        >
          Shop Collection
        </a>
      </div>

      <div
        // aria-hidden="true"
        className="w-full lg:max-w-7xl z-0"
      >
        <div className="w-full">
          <div className="flex items-center justify-center   space-x-6 lg:space-x-8">
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44  rounded-lg  lg:opacity-100">
                <img
                  src={model}
                  alt=""
                  className="h-full  w-full object-cover object-center"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={watch}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                {/* <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          /> */}
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={men}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={shoes}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={elec}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={women}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero