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
import {
  CheckIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from '@heroicons/react/20/solid'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '@material-tailwind/react'
import { Carousel, Typography, Button } from '@material-tailwind/react'
import { motion } from 'framer-motion'

const IOF = [
  'Expansion (การแจกจ่าย)',
  'Retracement (การย่อตัว)',
  'Reversal (การกลับตัว)',
  'Consolidation (การสะสมราคา)'
]

const zillzone = [
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
    icon: TbRosetteNumber5
  },
  {
    name: 'CBDR',
    time: '14:00 - 20:00',
    icon: TbRosetteNumber6
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

const pricedelivery = [
  {
    id: 1,
    title: 'Expansion คืออะไร?',
    meaning1:
      'Expansion คือ เมื่อราคาเคลื่อนตัวอย่างรวดเร็วออกจากระดับ ของจุดสมดุล (Equilibrium)',
    importance: 'ความสําคัญคืออะไร?',
    meaning2:
      'เมื่อราคาเคลื่อนตัวออกจากระดับนั้นอย่างรวดเร็ว นี่แสดงให้เห็น ถึงความเต็มใจของผู้ดูแลสภาพคล่อง (Market Maker) ในการ เปิดเผย Repricing model หรือ รูปแบบกําหนดราคาซ้ําที่ตั้งใจ เอาไว้ของพวกเขา',
    focuspoint: 'สิ่งที่เรามองหาในราคาคืออะไร?',
    meaning3:
      'Orderblocks หรือ บล็อกคําสั่ง ที่ Market Maker เคลื่อนที่ออก จากจุดสมดุล หรือ ใกล้เคียงจุดสมดุล',
    img: 'src/assets/ICT/Expansion.png',
    icon: CloudArrowUpIcon
  },
  {
    id: 2,
    title: 'Retracement คืออะไร?',
    meaning1:
      'Retracement คือ เมื่อราคาเคลื่อนตัวกลับไปภายในช่วงราคา (Price range) ที่เพิ่งสร้างขึ้น',
    importance: 'ความสําคัญคืออะไร?',
    meaning2:
      'เมื่อราคากลับมาภายในช่วงราคาล่าสุด นี่แสดงให้เห็นถึงความ เต็มใจของผู้ดูแลสภาพคล่อง (Market Maker) ในการปรับราคาใหม่ (Rebalance) ในระดับที่ไม่ได้ซื้อขายกัน อย่างมีประสิทธิภาพ สําหรับมูลค่าที่ยุติธรรม (Fair Value)',
    focuspoint: 'สิ่งที่เรามองหาในราคาคืออะไร?',
    meaning3: 'Fair Value Gaps (FVG) และ Liquidity Voids (LV)',
    img: 'src/assets/ICT/Retracement.png',
    icon: LockClosedIcon
  },
  {
    id: 3,
    title: 'Reversal คืออะไร?',
    meaning1:
      'Reversal คือ เมื่อราคาเคลื่อนตัวไปในทิศทางตรงกันข้ามกับ ทิศทางปัจจุบัน',
    importance: 'ความสําคัญคืออะไร?',
    meaning2:
      'เมื่อราคาพลิกกลับทิศทาง นี่แสดงให้เห็นว่าผู้ดูแลสภาพคล่อง (Market Maker) ได้วิ่งผ่านระดับของการหยุด (Stops) และการ เคลื่อนไหวที่สําคัญควรจะค่อยๆเปลี่ยนไปในทิศทางใหม่',
    focuspoint: 'สิ่งที่เรามองหาในราคาคืออะไร?',
    meaning3:
      'Liquidity Pools หรือ กลุ่มของสภาพคล่องที่อยู่เหนือ Old High Price (ราคาสูงสุดเก่า) และ ต่ํากว่า Old Low Price (ราคาต่ําสุด เก่า)',
    img: 'src/assets/ICT/Reversal.png',
    icon: ServerIcon
  },
  {
    id: 4,
    title: 'Consolidation คืออะไร?',
    meaning1:
      'Consolidation คือ เมื่อราคาเคลื่อนไหวภายในช่วงการซื้อขายที่ชัดเจนและไม่เต็มใจที่จะขยับขึ้นหรือลงอย่างมีนัยสําคัญ',
    importance: 'ความสําคัญคืออะไร?',
    meaning2:
      'เมื่อราคา Consolidation นี่แสดงให้เห็นว่าผู้ดูแลสภาพคล่อง (Market Maker) กําลังอนุญาตให้สร้างคําสั่งซื้อได้ทั้งสองด้าน ของตลาด (ขึ้นและลง) คาดว่าจะมีการ Expansion ในระยะเวลา อันใกล้นี้',
    focuspoint: 'สิ่งที่เรามองหาในราคาคืออะไร?',
    meaning3:
      'Impulse Price Swing ของราคาออกจากระดับราคาสมดุล ซึ่ง พบได้ในช่วงกึ่งกลางของการเกิด Consolidation',
    img: 'src/assets/ICT/Consolidation.png',
    icon: ServerIcon
  }
]
const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: '-1deg' }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-3xl p-1 bg-neutral-900/90 ring-1 ring-white/10 hover:ring-white/40 hover:shadow-xl hover:shadow-orange-950 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const CardTitle = ({ children }) => {
  return (
    <h3 className='mx-auto mt-4 text-center  sm:text-md text-3xl font-semibold'>
      {children}
    </h3>
  )
}

const liquidity = [
  {
    id: 1,
    img: 'src/assets/ICT/OldLow_OldHigh.png'
  },
  {
    id: 2,
    img: 'src/assets/ICT/RelativeEqualLows:High.png'
  },
  {
    id: 3,
    img: 'src/assets/ICT/Demand:Suppy.png'
  },
  {
    id: 4,
    img: 'src/assets/ICT/Trendline Liquidity.png'
  },
  {
    id: 5,
    img: 'src/assets/ICT/Session High:Low.png'
  },
  {
    id: 6,
    img: 'src/assets/ICT/Swing Structure .png'
  }
]

function ICT () {
  return (
    <div className='bg-black'>
      <section className='header'>
        <h1 className='text-center pt-7 text-9xl font-bold tracking-tight'>
          <LinearGradient gradient={['to left', '#deb8f5 ,#5b6cf9']}>
            ICT
          </LinearGradient>
        </h1>
        <p className='sm:mx-12 text-center pt-6 text-4xl leading-8 font-bold  '>
          <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
            Inner Circle Trader
          </LinearGradient>
        </p>
        <p className='mx-12 text-center py-2 text-2xl leading-8 font-bold '>
          <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
            Michael J. Huddleston
          </LinearGradient>
        </p>
        <p className='px-10  text-center text-md pt-4'>
          <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
            เทรดเดอร์ชาวอะเมริกัน ซึ่งมีประสบการณ์ในตลาดมากกว่า 30 ปี
          </LinearGradient>
        </p>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 text-center'>
          <div className='mx-auto mt-16 max-w-2xl rounded-3xl bg-zinc-950/40 ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl hover:shadow-zinc-950 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 grid justify-items-center'>
              <img
                className='rounded-md w-full h-72 object-cover '
                src='src/assets/ICT/ICT.jpeg'
              />
            </div>
            <div className='p-8 sm:p-10 lg:flex-auto '>
              <h3 className='text-2xl sm:text-3xl font-bold tracking-tight'>
                <LinearGradient gradient={['to left', '#8399a2 ,#eef2f3']}>
                  ICT Concept คืออะไร ?
                </LinearGradient>
              </h3>
              <p className='mt-6 text-left indent-8 text-base leading-7 text-zinc-400'>
                เป็นการศึกษาเกี่ยวกับ Price action หรือ
                พฤติกรรมราคาที่เกิดจากการแลกเปลี่ยนสภาพคล่องของ "Interbank Price
                Delivery Algorithm (IPDA)" หรือ
                อัลกอริธึมที่ส่งมอบราคาระหว่างธนาคาร
              </p>
              <p className='mt-6 text-left indent-8 text-base leading-7 text-zinc-400'>
                IPDA โดยพื้นฐานจริงๆแล้วเป็นปัญญาประดิษฐ์
                มันเป็นกลไกกำหนดราคาเมื่อเราทำการแลกเปลี่ยนสกุลเงินต่างๆซึ่ง 90%
                ดำเนินการโดย Electronic Algorithm
                ดังนั้นจึงต้องทำงานโดยใช้คอมพิวเตอร์ทั้งหมดที่ได้รับการตั้งโปรแกรมโดยมนุษณ์อย่างชัดเจน
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='Killzone'>
        <div className='mx-auto max-w-7xl bg-black mt-20'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-center text-6xl font-extrabold leading-7'>
              <LinearGradient gradient={['to left', '#6fe3e1 ,#5b6cf9']}>
                Kill Zone
              </LinearGradient>
            </h2>
          </div>
          <div className='mx-12 max-w-9xl py-20 '>
            <dl className='grid max-w-7xl grid-cols-2 gap-y-10 gap-x-1 mx-3 sm:mx-20 md:grid-cols-3 lg:max-w-none lg:grid-cols-4 lg:gap-y-10 '>
              {zillzone.map(feature => (
                <div
                  key={feature.name}
                  className='relative grid sm:justify-items-center'
                >
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='sm:absolute sm:left-0 sm:top-0 h-10 w-10  '>
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
              <h2 className='text-4xl sm:text-7xl pt-5 font-extrabold tracking-tight text-gray-900'>
                <LinearGradient gradient={['to left', '#45cde9 ,#7277f1']}>
                  คือสิ่งที่ อัลกอริธึมทํา
                </LinearGradient>
              </h2>
              <p className='mt-6 mx-6 text-3sm leading-8 text-left indent-8 text-zinc-400 lg:mx-auto'>
                มันจะแสวงหาโซน Discount และเคลื่อนที่จากโซน Discount เข้าไปหาโซน
                Premium, แล้วเคลื่อนที่จากโซน Premium ไปหาโซน Discount
                และภายในตรรกะนี้นั้น ตลาดเคลื่อนที่เข้าหา Liquidity ในรูปแบบของ
                Buy Stops และ Sell Stops หรือ Imbalance, Fair Value Gap หรือ
                Returning Back to a Fair Value Gap นั่นคือสิ่งที่อัลกอริธึมทํา
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
                  src='src/assets/ICT/Interblank.avif'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='price_delivery'>
        <div className='mx-auto max-w-7xl px-4 py-12 text-slate-800 '>
          <div className='mb-14 flex flex-col  items-center justify-center gap-4 md:flex-row md:items-center md:px-8'>
            <h2 className='text-5xl font-extrabold tracking-tight sm:text-7xl'>
              <LinearGradient gradient={['to left', '#45cde9 ,#7277f1']}>
                PRICE DELIVERY
              </LinearGradient>
            </h2>
          </div>
          {pricedelivery.map(post =>
            post.id % 2 === 0 ? (
              <div key={post} className='mb-4 grid grid-cols-12 gap-4'>
                <BounceCard className='col-span-12 md:col-span-4'>
                  <CardTitle>
                    <LinearGradient gradient={['to left', '#f28367 ,#ff5282']}>
                      {post.title}
                    </LinearGradient>
                  </CardTitle>
                  <div className='p-6 sm:p-4 pt-2 text-left text-sm sm:text-md  indent-8 text-md leading-7 text-zinc-400'>
                    {post.meaning1}
                  </div>
                  <div className='text-bold font-bold indent-8 text-sm sm:text-md leading-7 text-zinc-100'>
                    {post.importance}
                  </div>
                  <div className='p-6 sm:p-4 pt-2 text-left text-sm sm:text-md  indent-8 text-md leading-7 text-zinc-400'>
                    {post.meaning2}
                  </div>
                  <div className='text-bold font-bold indent-8 text-sm sm:text-md leading-7 text-zinc-100'>
                    {post.focuspoint}
                  </div>
                  <div className='p-6 sm:p-4 pt-2 text-left text-sm sm:text-md  indent-8 text-md leading-7 text-zinc-400'>
                    {post.meaning3}
                  </div>
                </BounceCard>
                <BounceCard className='col-span-12 md:col-span-8 '>
                  <img
                    className=' rounded-3xl h-full w-full object-cover item-center'
                    src={post.img}
                  />
                </BounceCard>
              </div>
            ) : (
              <div className='mb-4 grid grid-cols-12 gap-4'>
                <div className='col-span-12 md:col-span-8'>
                  <img
                    className='rounded-3xl p-1 bg-neutral-950/90 ring-1 ring-white/10 hover:ring-white/20 hover:shadow-3xl hover:shadow-zinc-900 h-full w-full object-cover item-center'
                    src={post.img}
                  />
                </div>

                <BounceCard className='col-span-12 md:col-span-4'>
                  <CardTitle>
                    <LinearGradient gradient={['to left', '#f28367 ,#ff5282']}>
                      {post.title}
                    </LinearGradient>
                  </CardTitle>
                  <div className='p-6 sm:p-4 pt-2 text-left text-sm sm:text-md  indent-8 text-md leading-7 text-zinc-400'>
                    {post.meaning1}
                  </div>
                  <div className='text-bold font-bold indent-8 text-sm sm:text-md leading-7 text-zinc-100'>
                    {post.importance}
                  </div>
                  <div className='p-6 sm:p-4 pt-2 text-left text-sm sm:text-md  indent-8 text-md leading-7 text-zinc-400'>
                    {post.meaning2}
                  </div>
                  <div className='text-bold font-bold indent-8 text-sm sm:text-md leading-7 text-zinc-100'>
                    {post.focuspoint}
                  </div>
                  <div className='p-6 sm:p-4 pt-2 text-left text-sm sm:text-md  indent-8 text-md leading-7 text-zinc-400'>
                    {post.meaning3}
                  </div>
                </BounceCard>
              </div>
            )
          )}
        </div>
      </section>

      <section className='liquidity '>
        <div className='mx-auto max-w-7xl px-4 py-12'>
          <div className='mx-auto max-w-3xl text-center mb-12'>
            <h2 className='text-4xl font-extrabold tracking-tight sm:text-6xl'>
              <LinearGradient gradient={['to left', '#45cde9 ,#7277f1']}>
                TYPES OF LIQUIDITY
              </LinearGradient>
            </h2>
            <p className='mt-6 mx-6 text-md font-bold text-center leading-8 indent-8 text-zinc-400 lg:mx-auto'>
              Liquidity คือ Pattern ต่างๆที่รายใหญ่จงใจจะทำการทำราคาให้ไปกิน SL
              เราจะเรียกจุดนั้นว่า Stop hunt
              แล้วราคาจึงค่อยไปต่อเพราะรายใหญ่เก็บของครบแล้ว
            </p>
          </div>

          <Carousel transition={{ duration: 2 }} className='rounded-3xl'>
            {liquidity.map(lq => (
              <img
                key={lq}
                className='h-full w-full object-cover'
                src={lq.img}
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}
export default ICT
