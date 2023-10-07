import React from 'react'
import { BiCandles } from 'react-icons/bi'
import { LinearGradient } from 'react-text-gradients'
import Spline from '@splinetool/react-spline'

function Homepage () {
  return (
    <div className='bg-black'>
      {/* Tag header */}
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-center p-6'
          aria-label='Global'
        >
          <div className='flex'>
            <BiCandles color='white' className='h-10 w-auto' />
          </div>
        </nav>
      </header>

      <div className='relative isolate px-2 pt-14 lg:px-8'>
        <div className='items-center justify-beetween grid gap-x-12 gap-y-12 sm:gap-y-16 sm:grid-cols-2 xl:py-20 md:py-20 sm:py-20 py-12'>
          {/* Text inspire  */}
          <div className='text-center'>
            <h1 className='mx-6 text-9xl font-bold tracking-tight'>
              <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                Trust in Bias
              </LinearGradient>
            </h1>
            <p className='mx-20 mt-6 text-lg leading-8 text-zinc-300'>
              Knowledge is worthless when you can't control your emotions but
              consciousness can be deadly when practiced well.
            </p>

            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-400 hover:ring-gray-900/20 font-semibold '
              >
                Learn more <span aria-hidden='true'>👇</span>
              </a>
            </div>
          </div>
          {/* Img headerBG  */}
          <div className='object-cover h-fit w-96 mt-10 grid mx-9 md:grid-cols-2 gap-x-80 '>
            <Spline scene='https://prod.spline.design/T9HhHQBe8U9akgZ2/scene.splinecode' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
