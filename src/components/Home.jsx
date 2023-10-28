import React from 'react'
import { BiCandles } from 'react-icons/bi'
import { LinearGradient } from 'react-text-gradients'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Navbar,
  MobileNav
} from '@material-tailwind/react'
import ICT from './ICT'
import Elliottwave from './Elliottwave.jsx'
import Harmonicpattern from './Harmonicpattern.jsx'
import PriceAction from './Priceaction.jsx'
import { useState, Fragment, useEffect } from 'react'
import { Dialog, Switch } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function Home () {
  const products = [
    {
      id: 1,
      name: 'ICT',
      action: '/ict',
      logo: 'src/assets/home/ICT.jpeg',
      aptitude: '⭐️⭐️⭐️⭐️⭐️',
      sub: 'ICT หรือ ชื่อเต็มคือ Inner Circle Trader เป็นแนวคิดการเทรดที่เผยแพร่ความคิดเกี่ยวกับ Smart Money Concept หรือ SMC ซึ่งเป็นที่รู้จักในบรรดาเทรดเดอร์ในประเทศไทยอย่างกว้างขวาง มีการนำแนวคิดไปใช้จำนวนมาก'
    },
    {
      id: 2,
      name: 'Elliott Wave',
      action: '/elliottwave',
      logo: 'src/assets/home/Elliott wave.jpeg',
      aptitude: '⭐️⭐️⭐️⭐️',
      sub: 'ทฤษฎีที่อธิบายถึงการขึ้นลงของราคาสินทรัพย์ ที่เกิดขึ้นจากพฤติกรรมการซื้อขายของคนหมู่มากที่มีทั้งอารมณ์และหลักการทางจิตวิทยาเข้ามาเกี่ยวข้องกับการตัดสินใจของนักลงทุนในตลาด จนได้กราฟที่มีลักษณะเป็นคลื่นประกอบกันเป็นวัฏจักรของราคา'
    },
    {
      id: 3,
      name: 'Harmonic Pattern',
      action: '/harmonicpattern',
      logo: 'src/assets/home/Harmonic Pattern.jpg',
      aptitude: '⭐️⭐️',
      sub: 'เป็นหนึ่งในรูปแบบกราฟเทรดที่มีความซับซ้อนเพิ่มมากขึ้น โดยอาศัยระดับ Fibonacci และพฤติกรรมราคาที่มีความเชื่อมโยงรูปแบบเรขาคณิตเข้ามาเกี่ยวข้อง เราเรียกรูปแบบนี้ว่า harmonic pattern ตามชื่อของ Harold McKinley Gartley ผู้ที่คิดค้นทฤษฎีนี้ขึ้นมาครั้งแรก'
    },
    {
      id: 4,
      name: 'PriceAction',
      action: '/priceaction',
      logo: 'src/assets/home/Price Action.jpeg',
      aptitude: '⭐️⭐️',
      sub: 'สิ่งที่ราคาได้กระทำเป็นการพยายามแปลความหมายและตีความสถานการณ์ของตลาดทางการเงิน ผ่านการพิจารณารูปแบบราคา หรือ "Pattern" ที่สามารถมองเห็นได้ด้วยตาเปล่าผ่านกราฟราคา จึงมักนิยมเรียกลักษณะการวิเคราะห์ดังกล่าวว่า "วิเคราะห์กราฟเปล่า"'
    }
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = [
    { id: 1, name: 'ICT', action: '/ict' },
    { id: 2, name: 'Elliott Wave', action: '/elliottwave' },
    { id: 3, name: 'Harmonic Pattern', action: '/harmonicpattern' },
    { id: 4, name: 'PriceAction', action: '/priceaction' }
  ]

  return (
    <div className='bg-black'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map(item => (
              <Link
                key={item.id}
                to={item.action}
                // variant='text'
                // color='while'
              >
                <Button
                  variant='text'
                  className='rounded-full text-neutral-500 hover:text-gray-100 '
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
          {/* themed */}
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <button class='items-center text-while hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500'>
              <svg
                class='w-4 h-4'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z' />
              </svg>
            </button>
            <button class='hidden items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500'>
              <svg
                class='w-4 h-4'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
              </svg>
            </button>
          </div>
          {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            
          </div> */}
        </nav>
        {/* Endnav */}

        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map(item => (
                    <Link
                      key={item.id}
                      to={item.action}
                      variant='text'
                      color='blue-gray'
                    >
                      <Button
                        fullWidth
                        variant='text'
                        className='rounded-lg p-6 text-start'
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className=' relative isolate px-6 pt-14 lg:px-8 '>
        <Card className='my-6 backdrop-blur-sm bg-gradient-to-r from-stone-950 to-black  rounded-3xl '>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          ></div>
          <div className='relative isolate px-6 pt-14 lg:px-8 '>
            <div className='items-center justify-beetween grid gap-x-12 gap-y-12 sm:gap-y-16 sm:grid-cols-2 xl:py-20 md:py-20 sm:py-6 py-12'>
              {/* Text inspire  */}
              <div className='text-center'>
                <h1 className='mx-6 text-9xl font-bold tracking-tight'>
                  <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                    Trust in Bias
                  </LinearGradient>
                </h1>
                <p className='mx-20 mt-6 text-lg leading-8 text-zinc-300  '>
                  Knowledge is worthless when you can't control your emotions
                  but consciousness can be deadly when practiced well.
                </p>

                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <a
                    to='/'
                    className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-400 hover:ring-gray-900/20 font-semibold '
                  >
                    Learn more <span aria-hidden='true'>👇</span>
                  </a>
                </div>
              </div>
              {/* Img headerBG  */}
              {/* <div className='grid items-center justify-center mx-9'>
            <Spline
              className='object-cover object-center '
              scene='https://prod.spline.design/rGFxfdsWETg4oAT1/scene.splinecode'
            />
          </div> */}
            </div>
          </div>
        </Card>
        {/* Our Trending Courses */}
        <div className='mx-auto max-w-2xl px-16 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h1 className='text-7xl text-center font-bold tracking-tight animate-pulse '>
            <LinearGradient gradient={['to left', '#f3696e ,#f8a902']}>
              Our Trending Courses
            </LinearGradient>
          </h1>
          <h2 className='my-4 text-lg text-center font-bold tracking-tight text-slate-50'>
            Check out most 🔥 courses in the market
          </h2>
          <div className='mt-24 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {/* Card */}

            {products.map(product => (
              <Card
                key={product.id}
                className='group relative h-full w-full bg-clip-border bg-neutral-950'
              >
                <CardHeader className='relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40'>
                  <img
                    src={product.logo}
                    className='h-full w-full object-cover item-center'
                  />
                </CardHeader>
                <CardBody>
                  <div className='mb-2 flex items-center justify-between'>
                    <Typography className='text-gray-200 font-bold'>
                      {product.name}
                    </Typography>
                    <Typography className='font-medium'>
                      {product.aptitude}
                    </Typography>
                  </div>
                  <Typography
                    variant='small'
                    className='text-neutral-400 font-normal opacity-75'
                  >
                    {product.sub}
                  </Typography>
                </CardBody>
                <CardFooter className='pt-0'>
                  <Link to={product.action}>
                    <Button variant='text' color='white' className='text-neutral-400 flex items-center gap-2'>
                      Learn More
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                        className='h-4 w-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                        />
                      </svg>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
