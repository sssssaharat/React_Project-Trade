import React from 'react'
import { BiCandles } from 'react-icons/bi'
import { LinearGradient } from 'react-text-gradients'
import Spline from '@splinetool/react-spline'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton
} from '@material-tailwind/react'

function Homepage () {
  const products = [
    {
      id: 1,
      name: 'ICT',
      href: '#',
      logo: 'src/assets/headerbg.PNG',
      aptitude: '⭐️⭐️⭐️⭐️⭐️',
      sub: 'ICT หรือ ชื่อเต็มคือ Inner Circle Trader เป็นแนวคิดการเทรดที่เผยแพร่ความคิดเกี่ยวกับ Smart Money Concept หรือ SMC ซึ่งเป็นที่รู้จักในบรรดาเทรดเดอร์ในประเทศไทยอย่างกว้างขวาง มีการนำแนวคิดไปใช้จำนวนมาก'
    },
    {
      id: 2,
      name: 'Elliott Wave',
      href: '#',
      logo: 'src/assets/headerbg.PNG',
      aptitude: '⭐️⭐️⭐️⭐️',
      sub: 'ทฤษฎีที่อธิบายถึงการขึ้นลงของราคาสินทรัพย์ ที่เกิดขึ้นจากพฤติกรรมการซื้อขายของคนหมู่มากที่มีทั้งอารมณ์และหลักการทางจิตวิทยาเข้ามาเกี่ยวข้องกับการตัดสินใจของนักลงทุนในตลาด จนได้กราฟที่มีลักษณะเป็นคลื่นประกอบกันเป็นวัฏจักรของราคา'
    },
    {
      id: 3,
      name: 'Harmonic Pattern',
      href: '#',
      logo: 'src/assets/headerbg.PNG',
      aptitude: '⭐️⭐️',
      sub: 'เป็นหนึ่งในรูปแบบกราฟเทรดที่มีความซับซ้อนเพิ่มมากขึ้น โดยอาศัยระดับ Fibonacci และพฤติกรรมราคาที่มีความเชื่อมโยงรูปแบบเรขาคณิตเข้ามาเกี่ยวข้อง เราเรียกรูปแบบนี้ว่า harmonic pattern ตามชื่อของ Harold McKinley Gartley ผู้ที่คิดค้นทฤษฎีนี้ขึ้นมาครั้งแรก'
    },
    {
      id: 4,
      name: 'PriceAction',
      href: '#',
      logo: 'src/assets/headerbg.PNG',
      aptitude: '⭐️⭐️',
      sub: 'สิ่งที่ราคาได้กระทำเป็นการพยายามแปลความหมายและตีความสถานการณ์ของตลาดทางการเงิน ผ่านการพิจารณารูปแบบราคา หรือ "Pattern" ที่สามารถมองเห็นได้ด้วยตาเปล่าผ่านกราฟราคา จึงมักนิยมเรียกลักษณะการวิเคราะห์ดังกล่าวว่า "วิเคราะห์กราฟเปล่า"'
    }

    // More products...
  ]

  return (
    <div className='bg-while'>
      {/* Tag header */}
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-center p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex'>
            <BiCandles color='white' className='h-10 w-auto' />
          </div>
        </nav>
      </header>
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
          <div className='grid items-center justify-center mx-9'>
            <Spline
              className='object-cover object-center'
              scene='https://prod.spline.design/rGFxfdsWETg4oAT1/scene.splinecode'
            />
          </div>
        </div>
      </div>
      {/* Our Trending Courses */};
      <div className='mx-auto max-w-2xl px-16 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h1 className='text-7xl text-center font-bold tracking-tight text-slate-50'>
          <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
            Our Trending Courses
          </LinearGradient>
        </h1>
        <h2 className='my-4 text-lg text-center font-bold tracking-tight text-slate-50'>
          Check out most 🔥 courses in the market
        </h2>
        <div className='mt-24 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <Card key={product.id} className='group relative'>
              <CardHeader className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-400 lg:aspect-none  lg:h-80 w-38'>
                <img
                  src={product.logo}
                  className='h-full w-full object-cover'
                />
              </CardHeader>
              <CardBody>
                <div className='mb-2 flex items-center justify-between'>
                  <Typography color='blue-gray' className='font-medium'>
                    {product.name}
                  </Typography>
                  <Typography color='blue-gray' className='font-medium'>
                    {product.aptitude}
                  </Typography>
                </div>
                <Typography
                  variant='small'
                  color='gray'
                  className='font-normal opacity-75'
                >
                  {product.sub}
                </Typography>
              </CardBody>
              <CardFooter className='pt-0'>
                <Button variant='text' className='flex items-center gap-2'>
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Homepage
