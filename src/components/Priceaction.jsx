import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar
} from '@material-tailwind/react'
import { LinearGradient } from 'react-text-gradients'

const Reversals = [
  {
    id: 1,
    name: 'Double Bottom',
    img: 'src/assets/PriceAction/Reversal/DoubleBottom.png'
  },
  {
    id: 2,
    name: 'Double Top',
    img: 'src/assets/PriceAction/Reversal/DoubleTop.png'
  },
  {
    id: 3,
    name: 'Inverted Head and Shoulder',
    img: 'src/assets/PriceAction/Reversal/InvertedHeadandShoulder.png'
  },
  {
    id: 4,
    name: 'Head and Shoulders',
    img: 'src/assets/PriceAction/Reversal/HeadandShoulders.png'
  },
  {
    id: 5,
    name: 'Bullish Cup & handle',
    img: 'src/assets/PriceAction/Reversal/BullishCup&handle.png'
  },
  {
    id: 6,
    name: 'Bearish Cup & Handle',
    img: 'src/assets/PriceAction/Reversal/BearishCup&Handle.png'
  },
  {
    id: 7,
    name: 'Bullish Daimond',
    img: 'src/assets/PriceAction/Reversal/BullishDaimond.png'
  },
  {
    id: 8,
    name: 'BearishDaimond',
    img: 'src/assets/PriceAction/Reversal/BearishDaimond.png'
  }
]

function PriceAction () {
  return (
    <div>
      <section className='header'>
        <h1 className='bg-black text-center py-24 text-8xl sm:text-9xl tracking-tight'>
          <LinearGradient
            className='mx-6'
            gradient={['to left', '#deb8f5 ,#5b6cf9']}
          >
            Harmonic Pattern
          </LinearGradient>
        </h1>
      </section>
      <section className='Pattern'>
        <div className='bg-black'>
          <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-center pb-12 text-7xl text-zinc-800 '>
              Reversal Pattern
            </h2>

            <div className='grid grid-cols-1 gap-x-6 gap-y-10  lg:grid-cols-2 '>
              {Reversals.map(re => (
                <a key={re.id} className='group'>
                  <img
                    src={re.img}
                    className=' object-cover object-center rounded-3xl  group-hover:opacity-75'
                  />

                  <h3 className='mt-4 text-sm text-gray-400'>{re.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PriceAction
