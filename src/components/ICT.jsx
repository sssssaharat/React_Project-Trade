import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import {
 TbRosetteNumber1,
TbRosetteNumber2,
TbRosetteNumber3,
TbRosetteNumber4,
TbRosetteNumber5,
TbRosetteNumber6,
TbRosetteNumber7,
TbRosetteNumber8,


} from 'react-icons/tb'


const features = [
  {
    name: 'Midnight',
    time: '00:00',
    icon: TbRosetteNumber1
  },
  {
    name: 'London Open',
    time: '02:00 - 05:00',
    icon: TbRosetteNumber2
  },
  {
    name: 'London Lunch',
    time: '05:00 - 07:00',
    icon: TbRosetteNumber3
  },
  {
    name: 'New York Open',
    time: '07:00 - 10:00',
    icon: TbRosetteNumber4
  },
  {
    name: 'London Close',
    time: '10:00 - 12:00',
    icon: TbRosetteNumber4
  },
  {
    name: 'CBDR',
    time: '14:00 - 20:00',
    icon: TbRosetteNumber5
  },
  {
    name: 'Asian Range',
    time: '20:00 - 00:00',
    icon: TbRosetteNumber7
  },
  {
    name: 'CME Opening',
    time: '08:20',
    icon: TbRosetteNumber8
  }
]


function ICT () {
  return (
    <div className='bg-black'>
      <section className='header '>
        <h1 className='text-center pt-7 text-9xl font-bold tracking-tight'>
          <LinearGradient gradient={['to left', '#deb8f5 ,#5b6cf9']}>
            ICT
          </LinearGradient>
        </h1>
        <p className='text-center py-6 text-lg leading-8 text-zinc-400 font-bold  '>
          Inner Circle Trader Michael J. Huddleston...
        </p>
      </section>

      <section className='bg-black mt-20'>
        <div className='mx-auto max-w-7xl '>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-center text-5xl font-extrabold leading-7'>
              <LinearGradient gradient={['to left', '#6fe3e1 ,#5b6cf9']}>
                Kill Zone
              </LinearGradient>
            </h2>
          </div>
          <div className='mx-auto max-w-7xl py-20 '>
            <dl className='grid max-w-7xl grid-cols-2 gap-x-18 gap-y-10 mx-20 md:max-w-7xl md:grid-cols-3 lg:max-w-none lg:grid-cols-4 lg:gap-y-10 '>
              {features.map(feature => (
                <div key={feature.name} className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600'>
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='text-white'>{feature.name}</div>
                  </dt>
                  <dd className='text-base leading-7 text-gray-600'>
                    {feature.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

    </div>
  )
}
export default ICT
