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
  TbRosetteNumber8
} from 'react-icons/tb'
import { CheckIcon } from '@heroicons/react/20/solid'

const IOF = [
  'Expansion (การแจกจ่าย)',
  'Retracement (การย่อตัว)',
  'Reversal (การกลับตัว)',
  'Consolidation (การสะสมราคา)'
]

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
        <p className='text-center py-6 text-xl leading-8 font-bold  '>
          <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
            Inner Circle Trader Michael J. Huddleston
          </LinearGradient>
          
        </p>
      </section>

      <section className='Killzone bg-black mt-20'>
        <div className='mx-auto max-w-7xl '>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-center text-6xl font-extrabold leading-7'>
              <LinearGradient gradient={['to left', '#6fe3e1 ,#5b6cf9']}>
                Kill Zone
              </LinearGradient>
            </h2>
          </div>
          <div className='mx-auto max-w-7xl py-20 '>
            <dl className='grid max-w-7xl grid-cols-2 gap-x-3 gap-y-10 mx-20  md:max-w-7xl md:grid-cols-3 lg:max-w-none lg:grid-cols-4 lg:gap-y-10 '>
              {features.map(feature => (
                <div key={feature.name} className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-white/30'>
                      <feature.icon
                        className='h-6 w-6 text-indigo-500'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='text-white'>{feature.name}</div>
                  </dt>
                  <dd className='text-base leading-7 text-zinc-400'>
                    {feature.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className='Market Maker'>
        <div className='bg-black py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8 text-center'>
            <div className='mx-auto max-w-5xl text-center'>
              <h2 className='text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl'>
                <LinearGradient gradient={['to left', '#dd83ad ,#7a8fd3']}>
                  สิ่งที่ตลาดทํานั่น
                </LinearGradient>
              </h2>
              <h2 className='text-5xl pt-5 font-extrabold tracking-tight text-gray-900 sm:text-7xl'>
                <LinearGradient gradient={['to left', '#45cde9 ,#7277f1']}>
                  คือสิ่งที่ อัลกอริธึมทํา
                </LinearGradient>
              </h2>
              <p className='mt-6 mx-10 text-lg leading-8 text-left indent-8 text-zinc-400 lg:mx-auto'>
                มันจะแสวงหาโซน Discount และเคลื่อนที่จากโซน Discount เข้าไปหาโซน
                Premium, แล้วเคลื่อนที่จากโซน Premium ไปหาโซน Discount
                และภายในตรรกะนี้นั้น ตลาดเคลื่อนที่เข้าหา Liquidity ในรูปแบบของ
                Buy Stops และ Sell Stops หรือ Imbalance, Fair Value Gap หรือ
                Returning Back to a Fair Value Gap นั่นคือสิ่งที่อัลกอริธึมทํา{' '}
                และทํามันบนพื้นฐานของ เวลา แล้วตามด้วยราคา
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl rounded-3xl bg-zinc-950/40 ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl hover:shadow-zinc-950 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
              <div className='p-8 sm:p-10 lg:flex-auto'>
                <h3 className='text-3xl font-bold tracking-tight'>
                  <LinearGradient gradient={['to left', '#8399a2 ,#eef2f3']}>
                    Interbank Price Delivery Algorithm
                  </LinearGradient>
                </h3>
                <p className='mt-6 text-left indent-8 text-base leading-7 text-zinc-400'>
                  IPDA คือการทำงานของระบบ Real Time Gross Settlement (RTGS)
                  ซึ่งทำหน้าที่เป็น Payment Vs Payment Mechanism (PvP) หรือ
                  กลไกซึ่งเป็นตัวกลางในการส่งมอบหรือแลกเปลี่ยนสกุลเงินระหว่างธนาคาร
                </p>
                <p className='mt-6 text-left indent-8 text-base leading-7 text-zinc-400'>
                  พื้นฐานกระบวนการส่งมอบราคา
                  ซึ่งประกอบไปด้วยการทำงานร่วมกันของบริบทพฤติกรรมราคาทั้ง 4
                  รูปแบบ
                  และในแต่ละบริบทพฤติกรรมราคานั้นจะมีจุดเป็นตัวอ้างอิงในการหา
                  Key Price Level ของการแลกเปลี่ยนสภาพคล่อง (Liquidity)
                  ที่เกิดขึ้นในตลาด” ซึ่งเราจะเรียกว่า
                </p>
                <div className='mt-10 flex items-center gap-x-4'>
                  <h4 className='flex-none text-lg font-semibold leading-6'>
                    <LinearGradient gradient={['to left', '#8399a2 ,#eef2f3']}>
                      Instituitional Order Flow (IOF)
                    </LinearGradient>
                  </h4>
                  <div className='h-px flex-auto bg-gray-700' />
                </div>
                <ul
                  role='list'
                  className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-300 sm:grid-cols-2 sm:gap-6'
                >
                  {IOF.map(feature => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        className='h-6 w-5 flex-none text-indigo-500'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='-mt-2 p-2 lg:mt-0  lg:w-full lg:max-w-md lg:flex-shrink-0'>
                <img
                  className='rounded-2xl h-full w-full object-cover item-center'
                  src='src/assets/ICT/photo-1501167786227-4cba60f6d58f.avif'
                  alt=''
                />
              </div>
              {/* <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
                <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                  <div className='mx-auto max-w-xs px-8'>
                    <p className='text-base font-semibold text-gray-600'>
                      Pay once, own it forever
                    </p>
                    <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                      <span className='text-5xl font-bold tracking-tight text-gray-900'>
                        $349
                      </span>
                      <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                        USD
                      </span>
                    </p>
                    <a
                      href='#'
                      className='mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                      Get access
                    </a>
                    <p className='mt-6 text-xs leading-5 text-gray-600'>
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ICT
