import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'
const datas = [
  {
    id: 1,
    name: 'The Gartley',
    img: 'src/assets/HarmonicPattern/Gartley.png'
  },
  {
    id: 2,
    name: 'The Bat',
    img: 'src/assets/HarmonicPattern/Bat.png'
  },
  {
    id: 3,
    name: 'The Butterfly',
    img: 'src/assets/HarmonicPattern/Butterfly.png'
  },
  {
    id: 4,
    name: 'The Crab',
    img: 'src/assets/HarmonicPattern/Crab.png'
  },
  {
    id: 5,
    name: 'C Point',
    img: 'src/assets/HarmonicPattern/CPoint.png'
  },
  {
    id: 6,
    name: 'D Point',
    img: 'src/assets/HarmonicPattern/DPoint.png'
  }
]

function Harmonicpattern () {
  const [open, setOpen] = React.useState(0)
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 }
  }

  const handleOpen = value => setOpen(open === value ? 0 : value)

  return (
    <div className='bg-black h-screen'>
      
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
        <section className='rule bg-black'>
          <div className='mx-auto max-w-7xl py-14 h-max '>
            <div className='mx-12'>
              {datas.map(data => (
                <Accordion
                  animate={CUSTOM_ANIMATION}
                  key={data.id}
                  open={open === data.id}
                  icon={<Icon id={data.id} open={open} />}
                  className='rounded-3xl py-8 mb-4 bg-zinc-950/40 ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl hover:shadow-zinc-950'
                >
                  <AccordionHeader
                    className='border-b-0 transition-colors pl-12'
                    onClick={() => handleOpen(data.id)}
                  >
                    <LinearGradient gradient={['to left', '#8399a2 ,#eef2f3']}>
                      {data.name}
                    </LinearGradient>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className='border-gray-500 py-4 mx-12'>
                      <img
                        className='h-full w-full  object-cover rounded-3xl ring-1 ring-gray-600 '
                        src={data.img}
                      />
                    </div>
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </section>
      </div>
    
  )
}
function Icon ({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      color='gray'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 mx-8 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}

export default Harmonicpattern
