import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar
} from '@material-tailwind/react'
import { LinearGradient } from 'react-text-gradients'
import Spline from '@splinetool/react-spline'

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
    <div className='bg-black'>
      <section className='header'>
        {/* <h1 className='text-center py-24 text-8xl sm:text-9xl tracking-tight'>
          <LinearGradient
            className='mx-6'
            gradient={['to left', '#deb8f5 ,#5b6cf9']}
          >
            Harmonic Pattern
          </LinearGradient>
        </h1> */}

        {/* <Spline scene='https://prod.spline.design/015EZetKlsrc4h-j/scene.splinecode' /> */}
      </section>
      <section className='Pattern'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h2 className='text-center pb-12 text-7xl text-zinc-700 '>
            <LinearGradient
              className='p-4'
              gradient={['to left', '#ff5858 ,#ffc8c8']}
            >
              Reversal
            </LinearGradient>
            Pattern
          </h2>

          <div className='grid grid-cols-1 gap-x-6 gap-y-10  lg:grid-cols-2 '>
            {Reversals.map(re => (
              <a key={re.id} className='group'>
                <div className='bg-zinc-800/40  rounded-3xl p-2'>
                 <img className="h-full w-full rounded-xl" controls autoPlay muted src={re.img} alt="" />
                  <h3 className='mt-4 text-md text-center text-gray-400'>
                    {re.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className='spline'></section>
    </div>
  )
}

export default PriceAction
