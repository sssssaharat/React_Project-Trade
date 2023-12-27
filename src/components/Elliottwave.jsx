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
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'

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

const moreDetail = [
  {
    id: 1,
    name: 'สาเหตุการเกิด 3 ขยาย ',
    detail:
      'ในรูปแบบมาตราฐานของ trending impulseเกิดเมื่อ wave 2 ปรับลึก กินเวลานาน ทำไม ต้องกินเวลานาน/ปรับลึกด้วย?'
  },
  {
    id: 2,
    name: 'market maker ',
    detail:
      'จะเก็บของ ต้องใช้เวลาคับ จะมาหวดๆ เลยมันไม่ได้เมื่อความเชื่อมั่นยังไม่สูง เนื่องจากตลาดยังไม่มั่นใจว่า กลับเทรนแล้วหรือยัง ( DOW ยังไม่ยก low ) ราคามีแนวโน้มที่จะซึมลง ตามอาการการเก็บของของ market makerเมื่อเจ้าเก็บของได้ครบ (ปรับลึก ใช้เวลานานของ w2 ) ราคาจะมีการขึ้นอย่างรุนแรง ( ข่าวเริ่มเข้า ) เพื่อเดินทางสู่ wave3extension'
  },
  {
    id: 3,
    name: 'เมื่อคนเริ่มเห็นการขึ้น',
    detail:
      'มีอาการจบ 2 แบบ ยก low ( DOW ) จะเริ่มเข้ามาเก็บของ market maker  จะลากราคาให้พ้น high ของ wave1 แล้ว จะเข้า media attention phase ( ข่าวดีมาทุกวัน )นี่เป็นสาเหตุให้เกิด wave3 ขยาย ( รูปแบบ trending impulse ที่เจอได้มาก )'
  },
  {
    id: 4,
    name: 'ราคาวิ่งไปถึงจุด peak ของ wave 3',
    detail:
      'จะเข้ากระบวนการปรับ wave4 คำถามคือ wave4 ใครขาย? ใครรักษาราคา? 1. ย่อยขายทำกำไร ( panic )  ราคาจะลงแรง และ เร็ว 2. market maker จะเข้ามารักษาราคา ( ไม่ใช่ช่วงเก็บของ แล้ว ) และ ดันราคา ให้เข้าสู่ wave5 คลื่นปรับ 4 จึงมีลักษณะที่ต่างกันออกไป คือ ปรับตื้น กินเวลาน้อย'
  },
  {
    id: 5,
    name: 'เมื่อลักษณะจิตวิตยาคลื่น 2 และ 4 ต่างกัน ?',
    detail:
      'ผู้เข้ามามีบทบาท ในคลื่นนี้ต่างกัน  ใน trending impulse จึงมีกฏการสลับนั่นเอง จะสลับในรูปแบบคลื่นปรับ FLAT ZZ TRI  หรือ สลับกันที่ ระยะเวลา+ราคา ก็ได้ ( ปรับตื้น กินเวลาสั้น - ปรับลึก กินเวลานาน )'
  },
  {
    id: 6,
    name: 'เมื่อปรับ 4 จบ จะเข้าสู่ Wave 5 ',
    detail:
      'ใครขาย ใครซื้อ ใน wave5 จะเป็น climax ของ media attention 2. ย่อยซื้อ ( fomo , to the moon ) ส่วน market maker จะขายทำกำไร ( ใครสนใจเรื่องนี้ สามารถดูเรื่อง wyckoff distribution ประกอบได้ )จบ  trending impules รูปแบบปกติ'
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
                  <dt className='text-base leading-7  '>
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
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-medium tracking-wide  text-center  '>
            <LinearGradient gradient={['to left', '#727a9a ,#fff']}>
              ใน Trending Impules <br></br>รูปแบบปกติ เราจะเจออะไร
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
              <div className='mx-3 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                <div className='text-7xl my-6 text-white'>Wave 2</div>
                <div className='mx-3 py-2 '>
                  รายย่อยยังไม่มั่นใจว่า ตลาดกลับเทรนจริงรึยัง <br></br>(
                  ราคาเพิ่งลงมามาก )จึงมีการขายทำกำไร +
                  คนที่ดอยมาขายทิ้งซึ่งการขายมักจะเริ่มด้วย market maker
                  เป็นคนทุบเพื่อจุดชนวนการขาย
                </div>
              </div>
            </div>
            <div className='mx-6 col-span-2 text-md leading-8 text-zinc-400 py-12 rounded-3xl bg-gradient-to-l to-70% from-violet-950'>
              <div className='mx-3 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                <div className='mx-3 py-2'>
                  ราคาจะลงมาก ( คลื่นปรับ 2 ) ซึ่ง market maker<br></br>
                  จะมีหน้าที่รักษาราคา และ ดูแรงขายตรงนี้ให้ดูที่การ retrace
                  หลับลงมา 50-61.8 ถือว่าดี ถ้าหลุด 78.6-88.6 ลงไป
                  ถือว่าแรงขายมาก แต่ market maker ยังรับอยู่ และจะต้องไม่หลุด
                  low ลงไป
                </div>
                <div className='row-span-3 text-7xl my-6 text-white'>
                  Wave 3
                </div>
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
      <section className='more detail'>
        <div className='mx-auto max-w-7xl'>
          <div className='py-12 mx-6 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
            {moreDetail.map(more => (
              <div
                key={more.id}
                className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'
              >
                <div className='flex items-center justify-center w-10 h-10 rounded-full  text-slate-200   shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'>
                  <CurrencyDollarIcon className='h-5 w-5' />
                </div>
                <div className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-950/40 ring-1 ring-white/10 hover:ring-white/20 hover:shadow-xl hover:shadow-zinc-950 p-4 rounded-3xl '>
                  <div className='flex items-center justify-between space-x-2 mb-1'>
                    <div className='font-bold text-xl text-slate-200 my-2'>
                      {more.name}
                    </div>
                  </div>
                  <div className='text-md text-gray-400'>{more.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Elliottwave
