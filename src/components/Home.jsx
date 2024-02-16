import React from 'react'
import { LinearGradient } from 'react-text-gradients'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import {
  Button
} from '@material-tailwind/react'

function Home () {
  const products = [
    {
      id: 1,
      name: "ICT",
      action: "/ict",
      logo: "home/ICT.png",
      aptitude: "⭐️⭐️⭐️⭐️⭐️",
      sub: "ICT หรือ ชื่อเต็มคือ Inner Circle Trader เป็นแนวคิดการเทรดที่เผยแพร่ความคิดเกี่ยวกับ Smart Money Concept หรือ SMC ซึ่งเป็นที่รู้จักในบรรดาเทรดเดอร์ในประเทศไทยอย่างกว้างขวาง มีการนำแนวคิดไปใช้จำนวนมาก",
    },
    {
      id: 2,
      name: "Elliott Wave",
      action: "/elliottwave",
      logo: "home/EW.png",
      aptitude: "⭐️⭐️⭐️⭐️",
      sub: "ทฤษฎีที่อธิบายถึงการขึ้นลงของราคาสินทรัพย์ ที่เกิดขึ้นจากพฤติกรรมการซื้อขายของคนหมู่มากที่มีทั้งอารมณ์และหลักการทางจิตวิทยาเข้ามาเกี่ยวข้องกับการตัดสินใจของนักลงทุนในตลาด จนได้กราฟที่มีลักษณะเป็นคลื่นประกอบกันเป็นวัฏจักรของราคา",
    },
    {
      id: 3,
      name: "Harmonic Pattern",
      action: "/harmonicpattern",
      logo: "home/HMN.png",
      aptitude: "⭐️⭐️",
      sub: "เป็นหนึ่งในรูปแบบกราฟเทรดที่มีความซับซ้อนเพิ่มมากขึ้น โดยอาศัยระดับ Fibonacci และพฤติกรรมราคาที่มีความเชื่อมโยงรูปแบบเรขาคณิตเข้ามาเกี่ยวข้อง เราเรียกรูปแบบนี้ว่า harmonic pattern ตามชื่อของ Harold McKinley Gartley ผู้ที่คิดค้นทฤษฎีขึ้นมาครั้งแรก",
    },
    {
      id: 4,
      name: "PriceAction",
      action: "/priceaction",
      logo: "home/PA.png",
      aptitude: "⭐️⭐️",
      sub: 'สิ่งที่ราคาได้กระทำเป็นการพยายามแปลความหมายและตีความสถานการณ์ของตลาดทางการเงิน ผ่านการพิจารณารูปแบบราคา หรือ "Pattern" ที่สามารถมองเห็นได้ด้วยตาเปล่าผ่านกราฟราคา จึงมักนิยมเรียกลักษณะการวิเคราะห์ดังกล่าวว่า "วิเคราะห์กราฟเปล่า"',
    },
  ];

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl mt-12">
        <section className="title">
          <div className="">
            <div className="py-4">
              <div className="duration-[1000ms] ease-[cubic-bezier(.47,0,.745,.715)] taos:opacity-0">
                <Spline scene="https://prod.spline.design/LGlygYGujQeHBF-7/scene.splinecode" />
              </div>
            </div>
            <div
              className="mx-12 delay-[600ms] duration-[800ms] taos:translate-y-[100%] taos:invisible"
              data-taos-offset="200"
            >
              <img
                className="h-full w-full object-cover rounded-xl ring-1 ring-gray-600"
                src="home/Teaser.gif"
              />
            </div>
          </div>
        </section>
        <section className="Our Trending Courses ">
          <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <h1
              className="text-7xl text-center font-bold tracking-tight delay-[500ms] duration-[1000ms] taos:translate-y-[-100%] taos:invisible"
              data-taos-offset="300"
            >
              <LinearGradient gradient={["to left", "#727a9a ,#d8dbe9"]}>
                Our Trending Courses
              </LinearGradient>
            </h1>
            <h2
              className="my-4 text-md text-center font-semibold  text-zinc-500 delay-[500ms] duration-[1000ms] taos:translate-y-[-100%] taos:invisible"
              data-taos-offset="300"
            >
              Check out most 🔥 courses in the market
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 mx-24 lg:grid-cols-2 ">
              {products.map((pd) => (
                <div key={pd.id} className="group ">
                  <div className="bg-zinc-800/40  rounded-3xl p-2 ">
                    <img
                      className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
                      data-taos-offset="300"
                      src={pd.logo}
                    />
                    <h3 className="mt-4 text-xl text-center text-gray-300 font-extrabold">
                      {pd.name}
                    </h3>
                    <div className="text-neutral-600 p-6 indent-8">
                      {pd.sub}
                    </div>
                    <Link
                      to={pd.action}
                      className="flex justify-center items-center gap-2"
                    >
                      <Button className="text-neutral-600 bg-zinc-800/35 rounded-full ring-1 ring-white/10 hover:text-gray-400 mb-4">
                        Learn more
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home
