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
import { Carousel } from '@material-tailwind/react'
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
      'Liquidity Pools หรือ กลุ่มของสภาพคล่องที่อยู่เหนือ Old High Price (ราคาสูงสุดเก่า) และ ต่ำกว่า Old Low Price (ราคาต่ำสุด เก่า)',
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
const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.7 }
      }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-3xl p-1 bg-zinc-700/25 hover:ring-1 hover:ring-zinc-800 hover:shadow-xl hover:shadow-gray-950 ${className}`}
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

const TerminologyAbbreviations = [
  {
    id: 1,
    name: 'BSL',
    fullname: 'buyside liquidity'
  },
  {
    id: 2,
    name: 'SSL',
    fullname: 'sellside liquidity'
  },
  {
    id: 3,
    name: 'EQH',
    fullname: 'equal highs'
  },
  {
    id: 4,
    name: 'EQL',
    fullname: 'equal lows'
  },
  {
    id: 5,
    name: 'PDH',
    fullname: 'previous day high'
  },
  {
    id: 6,
    name: 'PDL',
    fullname: 'previous day low'
  },
  {
    id: 7,
    name: 'HTF',
    fullname: 'high timeframe'
  },
  {
    id: 8,
    name: 'LTF',
    fullname: 'low timeframe'
  },
  {
    id: 9,
    name: 'MSB',
    fullname: 'market structure break'
  },
  {
    id: 10,
    name: 'STH',
    fullname: 'short term high'
  },
  {
    id: 11,
    name: 'STL',
    fullname: 'short term low'
  },
  {
    id: 12,
    name: 'ITH',
    fullname: 'intermediate term high'
  },
  {
    id: 13,
    name: 'ITL',
    fullname: 'intermediate term low'
  },
  {
    id: 14,
    name: 'LTH',
    fullname: 'long term high'
  },
  {
    id: 15,
    name: 'LTL',
    fullname: 'long term low'
  },
  {
    id: 16,
    name: 'IDM',
    fullname: 'inducement'
  },
  {
    id: 17,
    name: 'FVG',
    fullname: 'fair value gap'
  },
  {
    id: 18,
    name: 'OB',
    fullname: 'order block'
  },
  {
    id: 19,
    name: 'BB',
    fullname: 'breaker block'
  },
  {
    id: 20,
    name: 'SMT',
    fullname: 'smart money technique'
  },
  {
    id: 21,
    name: 'OTE',
    fullname: 'optimal trade entry'
  },
  {
    id: 22,
    name: 'PD',
    fullname: 'premium discount'
  },
  {
    id: 23,
    name: 'BISI',
    fullname: 'buyside imbalance sellside inefficiency'
  },
  {
    id: 24,
    name: 'SIBI',
    fullname: 'sellside imbalance buyside inefficiency'
  },
  {
    id: 25,
    name: 'MMBM',
    fullname: 'market maker buy model'
  },
  {
    id: 26,
    name: 'MMSM',
    fullname: 'market maker sell model'
  },
  {
    id: 27,
    name: 'IOF',
    fullname: 'institutional order flow'
  },
  {
    id: 28,
    name: 'DOL',
    fullname: 'draw on liquidity'
  },
  {
    id: 29,
    name: 'POI',
    fullname: 'point of interest'
  },
  {
    id: 30,
    name: 'CE',
    fullname: 'consequent encroachment'
  },
  {
    id: 31,
    name: 'PO3',
    fullname: 'power of three'
  },
  {
    id: 32,
    name: 'KZ',
    fullname: 'killzone'
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
              <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
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
               
              <h2 className='text-5xl font-extrabold text-white sm:text-7xl'>
                <LinearGradient gradient={['to left',  '#727a9a ,#d8dbe9']}>
                 สิ่งที่ตลาดทํานั้น
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
            <h2 className='text-7xl font-medium tracking-wide  text-center'>
              <div className='text-sm py-2 text-gray-400 tracking-tight leading-8 '>
                กระบวนการส่งมอบราคา
              </div>
              <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
                Price Delivery
              </LinearGradient>
            </h2>
          </div>
          {pricedelivery.map(post =>
            post.id % 2 === 0 ? (
              <div key={post} className='mb-24 grid grid-cols-12 gap-8'>
                <BounceCard className='col-span-12 md:col-span-4'>
                  <CardTitle>
                    <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
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
                <div className='col-span-12 md:col-span-8 '>
                  <img
                    className=' rounded-3xl h-full w-full object-cover item-center'
                    src={post.img}
                  />
                </div>
              </div>
            ) : (
              <div className='mb-24 grid grid-cols-12 gap-8'>
                <div className='col-span-12 md:col-span-8'>
                  <img
                    className='rounded-3xl p-1 h-full w-full object-cover item-center'
                    src={post.img}
                  />
                </div>

                <BounceCard className='col-span-12 md:col-span-4'>
                  <CardTitle>
                    <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
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
            <h2 className='text-7xl font-medium tracking-wide  text-center sm:text-6xl'>
              <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
                Type of Liquidity
              </LinearGradient>
            </h2>
            <p className='mt-6 mx-6 text-md text-center leading-8 indent-8 text-zinc-400 lg:mx-auto'>
              Liquidity คือ Pattern ต่างๆที่รายใหญ่จงใจจะทำการทำราคาให้ไปกิน SL
              เราจะเรียกจุดนั้นว่า Stop hunt
              แล้วราคาจึงค่อยไปต่อเพราะรายใหญ่เก็บของครบแล้ว
            </p>
          </div>

          <Carousel
            transition={{ duration: 2 }}
            className='rounded-3xl ring-1 ring-gray-600 border-b-4 border-gray-500 '
          >
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
      <section className='orderblock'>
        <div className='mx-auto max-w-7xl  py-12'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8 divide-x-2 divide-slate-400/25 '>
            <div class='col-span-2 text-white mx-6 pl-8'>
              <div className='text-xs leading-5 text-zinc-400'>
                ICT Orderblock
              </div>
              <div className='text-5xl my-6 font-extrabold tracking-wide'>
                <LinearGradient gradient={['to left', '#ffcaa6 ,#f86594']}>
                  ไม่ใช่ Supply & Demand
                </LinearGradient>
              </div>

              <div className=' grid grid-cols-1 lg:grid-cols-2  '>
                <div className='text-5xl font-extrabold'>
                  ไม่ใช่แค่แท่งเทียน
                </div>

                <div className='text-sm text-zinc-400 sm:md:lg:ml-12 mt-6 sm:md:lg:mt-0 grid content-center '>
                  Bullish หรือ Bearishสุดท้ายก่อน The Market Structure
                  Shift(หรือที่ SMC เรียกว่า Change of Character ChoCh)...
                </div>
              </div>
            </div>
            <div className='text-white mx-12 p-12 py-2'>
              <div className='text-3xl  tracking-wide '>
                <LinearGradient gradient={['to right', '#ffcaa6 ,#f86594']}>
                  OrderBlock sell before buy
                </LinearGradient>
              </div>
              <div className='text-3xl tracking-wide'>หรือ buy before sell</div>
              <div className='mt-3 text-sm  leading-5 text-zinc-400 whitespace-pre-line '>
                แท่ง Bearish แท่งสุดท้ายก่อนการ Break structure ขาขึ้น หรือแท่ง
                Bullish แท่งสุดท้ายก่อนการ Break structure ขาลง
              </div>
            </div>
          </div>
          <div className='divide-x-2 divide-slate-400/25 grid grid-cols-1 mx-6 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8 py-24 '>
            <div className='text-white py-2 text-center'>
              <div className='text-xs leading-5 text-zinc-400 my-4'>
                จะต้องมี 2 สิ่งนี้ประกอบด้วยเสมอ
              </div>
              <div className='text-3xl mb-3'>
                <LinearGradient gradient={['to left', '#f9f5e0 ,#f5895c']}>
                  ถ้าขาดอย่างใด
                </LinearGradient>
              </div>
              <div className='text-3xl mb-3'>
                <LinearGradient gradient={['to left', '#fdf1cb ,#ee609a']}>
                  อย่างหนึ่งก็ไม่มี
                </LinearGradient>
              </div>
              <div className='leading-5 whitespace-pre-line'>Orderblock !</div>
            </div>
            <div class='col-span-2 text-white mx-8 p-12 py-2 '>
              <div className='text-3xl my-3 font-extrabold tracking-wide '>
                <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
                  1. จะต้องมี Liquidity Grab
                </LinearGradient>
              </div>
              <div className='text-sm ml-8 leading-5 text-zinc-400 whitespace-pre-line '>
                ที่ Swing High, Swing Low, Old High, Old Low, High of Day, Low
                of Day, PDH, PDL, Clean Highs (EQH), Clean Lows (EQL) ซึ่งก็คือ
                ต้องเกิด Stop Raid (Fake Breakout, Stop Hunt, Stop Run)
              </div>
              <div className='text-3xl  my-3 font-extrabold tracking-wide'>
                <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
                  2. จะต้องสร้าง FVG (Fair Value Gap)
                </LinearGradient>
              </div>
              <div className='text-sm  ml-8 leading-5 text-zinc-400 whitespace-pre-line'>
                หลังจากเบรค Short term swing low ทำให้เกิด Market structure
                shift แปลว่ามันจะต้องมี แท่ง Imbalance ถ้าไม่มี Displacement,
                Imbalance และ Fair Value Gap ก็ไม่มี Orderblock!
              </div>
            </div>
          </div>
          <div>
            <img src='src/assets/ICT/New Project.png' />
          </div>
        </div>
      </section>
      <section className='FVG'>
        <div className='mx-auto max-w-7xl px-4 py-12 text-center font-sans'>
          <div className='text-5xl my-3 font-medium tracking-wide  text-center sm:text-7xl'>
            <LinearGradient gradient={['to left', '#727a9a ,#d8dbe9']}>
              Imbalance และ FVG
            </LinearGradient>
          </div>
          <div className='mx-12 grid grid-cols-1 lg:grid-cols-3  gap-4 py-12 text-left items-center'>
            <div className='text-md leading-5 text-zinc-400 whitespace-pre-line '>
              <div>
                Imbalance State แปลว่า มีผู้ซื้อ มากกว่า ผู้ขาย หรือ มีผู้ขาย
                มากกว่าผู้ซื้อ
              </div>
              <div className='my-4'>
                ยกตัวอย่าง เช่น มีผู้ซื้อ มากกว่า ผู้ขาย เนื่องจากอาจจะมี
                คำสั่งซื้อเป็น Position size ขนาดใหญ่มากของ Market Makers
                จึงได้เกิดแท่ง Bullish Imbalance ขึ้น
              </div>
              <div>
                แต่เนื่องจากมันมีคำสั่งซื้อที่ใหญ่มาก มันจึงเกิด Unfilled orders
                เกิดขึ้น หมายความว่า มันยังมี buy orders
                ที่ยังไม่ได้จับคู่กันหลงเหลืออยู่
              </div>
            </div>
            <div className='grid grid-rows-3 text-2xl text-center text-zinc-200 items-center '>
              <div>เพราะฉะนั้นเวลาเกิด</div>
              <div>Imbalance ก็จะต้องมีการกลับมา</div>
              <div>Rebalance</div>
            </div>
            <div className='text-md leading-5 text-zinc-400 whitespace-pre-line'>
              <div>
                ดังนั้น เวลาที่ราคาเทรดกลับมาที่ FVG, Supply zone and Demand
                zone หนือ Order Block ราคาจึงมีการกลับตัวและวิ่งออกจาก โซนต่างๆ
                นี้
              </div>

              <div className='my-4'>
                แล้วก็จะกลับมาที่โซนนี้อีก จนกว่าที่ Unfilled orders
                จะจับคู่กันจนหมดไป อาจจะกลับมาครั้งเดียวแล้วจับคู่จนหมด
                หรืออาจจะกลับมาหลายๆ ครั้ง หลักการเดียวกับ Supply zone and
                Demand zone ครับ กลับมาครั้งแรกจะดีที่สุด เพราะมันเป็น Fresh
                zone
              </div>
              <div>
                เราไม่สามารถรู้ได้ว่ากลับมาครั้งแรกมันจะจับคู่ Unfilled orders
                หมดในครั้งเดียวไหม หรืออาจจะต้องกลับมาอีก
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='TerminologyAbbreviations'>
        <div className='bg-zinc-700/25 py-8 sm:py-12'>
          <div className='mx-auto px-6 lg:px-8'>
            <dl className='grid grid-cols-3 gap-x-8 gap-y-14 text-center lg:grid-cols-8'>
              {TerminologyAbbreviations.map(stat => (
                <div
                  key={stat.id}
                  className='mx-auto flex max-w-7xl flex-col gap-y-4'
                >
                  <dt className=' leading-7 text-zinc-600 text-xs'>
                    {stat.fullname}
                  </dt>
                  <dd className='order-first text-xs font-semibold tracking-tight text-zinc-200 sm:text-sm'>
                    {stat.name}
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
