import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6
} from 'react-icons/ri'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from '@material-tailwind/react'

const datas = [
  {
    id: 1,
    label: 'Irregular Flat',
    value: 'irregularflat',
    img: 'src/assets/Elliotwave/rule/IrregularFlat.png'
  },
  {
    id: 2,
    label: 'Irregular Failure Flat',
    value: 'irregularfailureflat',
    img: 'src/assets/Elliotwave/rule/IrregularFlat.png'
  },
  {
    id: 3,
    label: 'Running Flat',
    value: 'runningflat',
    img: 'src/assets/Elliotwave/rule/Running_Flat.png'
  },
  {
    id: 4,
    label: 'Flat Normal B',
    value: 'flatnormalb',
    img: 'src/assets/Elliotwave/rule/NormalB.png'
  },
  {
    id: 5,
    label: 'Zigzag',
    value: 'zigzag',
    img: 'src/assets/Elliotwave/rule/Zigzag.png'
  }
]

const role = [
  {
    id: 1,
    name: 'Wave 3 ต้องไม่สั้นที่สุด',
    icon: RiNumber1
  },
  {
    id: 2,
    name: 'Wave 4 ต้องไม่ต่ำกว่า Wave 1  หรือ wave 2',
    icon: RiNumber2
  },
  {
    id: 3,
    name: 'Wave 1 มักจะประกอบด้วย 3 sub-waves',
    icon: RiNumber3
  },
  {
    id: 4,
    name: 'Wave 2 มักจะลงยาวเป็น A-B-C ชัดเจน ',
    icon: RiNumber4
  },
  {
    id: 5,
    name: 'Wave 4 ลงเร็วแล้วต่อด้วย Sideway sub-waves 1–2 ของ Wave 5',
    icon: RiNumber5
  },
  {
    id: 6,
    name: 'จะต้องมีสักคลื่นที่เป็นเวฟขยาย',
    icon: RiNumber6
  }
]

function Elliottwave () {
  return (
    <div className='bg-black'>
      <section className='header'>
        <h1 className='bg-black text-center py-24 text-9xl tracking-tight'>
          <LinearGradient gradient={['to left', '#deb8f5 ,#5b6cf9']}>
            Elliott Wave
          </LinearGradient>
        </h1>
      </section>
      <section className='structure'>
        <div className='bg-black'>
          <div className='mx-auto max-w-7xl px-4 py-12 '>
            <img src='src/assets/Elliotwave/structure.png' />
          </div>
        </div>
      </section>
      <section className='rule'>
        <div className='bg-black py-24 sm:py-32'>
          <div className='mx-auto  px-6 lg:px-8'>
            <div className=' text-center pb-12 text-7xl text-zinc-800 '>
              <LinearGradient
                className='p-4'
                gradient={['to left', '#8399a2 ,#eef2f3']}
              >
                กฎ
              </LinearGradient>
              ของคลื่น
            </div>
            <dl className='grid grid-cols-2 py-12 xl:divide-x divide-zinc-900 gap-y-12  text-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 rounded-3xl bg-zinc-950/40 ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl hover:shadow-zinc-950'>
              {role.map(roles => (
                <div
                  key={roles.id}
                  className='mx-3 flex max-w-xs flex-col  gap-y-6'
                >
                  <dt className='text-base leading-7 text-gray-400 '>
                    <LinearGradient gradient={['to left', '#60696b ,#858e96']}>
                      {roles.name}
                    </LinearGradient>
                  </dt>
                  <dd className='order-first text-3xl flex justify-center font-semibold tracking-tight text-gray-200 sm:text-5xl'>
                    <roles.icon className='' aria-hidden='true' />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className='detail'>
        <div className='bg-black '>
          <Tabs
            key={datas}
            value='Irregular Flat'
            className='mx-auto max-w-7xl py-12'
          >
            <TabsHeader
              className='text-white sm:text-lg mx-4 text-xs bg-transparent bg-zinc-700/25 rounded-3xl flex items-center'
              indicatorProps={{
                className: 'bg-gray-600/10 shadow-3xl rounded-3xl '
              }}
            >
              {datas.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className=' py-4 mx-2 my-1 text-md font-semibold  tracking-wide '
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 }
              }}
            >
              {datas.map(({ value, img }) => (
                <TabPanel key={value} value={value}>
                  <div className='border-gray-500 '>
                    <img
                      className='h-full w-full object-cover rounded-3xl ring-1 ring-gray-600'
                      src={img}
                    />
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </section>
      <section className='trending impules '>
        <div className='mx-auto max-w-7xl text-center py-24 '>
          <h2 className='text-7xl font-medium tracking-wide  text-center sm:text-6xl '>
            <LinearGradient gradient={['to left', '#727a9a ,#fff']}>
              ใน trending impules <br></br>รูปแบบปกติ เราจะเจออะไร
            </LinearGradient>
          </h2>
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 xl:gap-x-8 py-12'>
            <div className='mx-6 text-md leading-8 text-zinc-400 py-12 rounded-3xl bg-gradient-to-l to-70% from-indigo-900 '>
              <div className='text-7xl my-6 text-white'>Wave 1</div>
              <div className='mx-3 py-2'>
                market maker ทดสอบตลาด ดันราคาขึ้นมาสูง
              </div>
            </div>
            <div className='mx-6 col-span-2 text-md leading-8 text-zinc-400 py-12 rounded-3xl bg-gradient-to-r to-70% from-indigo-900'>
              <div class='mx-3 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                <div class='text-7xl my-6 text-white'>Wave 2</div>
                <div class='mx-3 py-2 '>
                  รายย่อยยังไม่มั่นใจว่า ตลาดกลับเทรนจริงรึยัง <br></br>(
                  ราคาเพิ่งลงมามาก )จึงมีการขายทำกำไร +
                  คนที่ดอยมาขายทิ้งซึ่งการขายมักจะเริ่มด้วย market maker
                  เป็นคนทุบเพื่อจุดชนวนการขาย
                </div>
              </div>
            </div>
            <div className='mx-6 col-span-2 text-md leading-8 text-zinc-400 py-12 rounded-3xl bg-gradient-to-l to-70% from-violet-950'>
              <div class='mx-3 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                <div class='mx-3 py-2'>
                  ราคาจะลงมาก ( คลื่นปรับ 2 ) ซึ่ง market maker<br></br>
                  จะมีหน้าที่รักษาราคา และ ดูแรงขายตรงนี้ให้ดูที่การ retrace
                  หลับลงมา 50-61.8 ถือว่าดี ถ้าหลุด 78.6-88.6 ลงไป
                  ถือว่าแรงขายมาก แต่ market maker ยังรับอยู่ และจะต้องไม่หลุด
                  low ลงไป
                </div>
                <div class='row-span-3 text-7xl my-6 text-white'>Wave 3</div>
              </div>
            </div>
            <div className='mx-6 text-md leading-8 text-zinc-400 py-12 rounded-3xl bg-gradient-to-r to-70% from-violet-950 '>
              <div className='text-7xl my-6 text-white'>Wave 4</div>

              <div>market maker ทดสอบตลาด ดันราคาขึ้นมาสูง</div>
            </div>
          </div>
          <div className='mx-6 text-md col-span-3 leading-8 text-zinc-400 py-12 rounded-3xl bg-gradient-to-r from-violet-950/10 from-5% via-purple-950 via-50% to-violet-950/10  to-90%'>
            <div className='text-7xl my-6 text-white'>Wave 5</div>
            <div className='mx-3 py-2'>รายย่อยขาย เจ้าเก็บของ</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Elliottwave
