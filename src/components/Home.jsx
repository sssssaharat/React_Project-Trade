import React from "react";
import { LinearGradient } from "react-text-gradients";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

function Home() {
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { id: 1, name: "ICT", action: "/ict" },
    { id: 2, name: "Elliott Wave", action: "/elliottwave" },
    { id: 3, name: "Harmonic Pattern", action: "/harmonicpattern" },
    { id: 4, name: "PriceAction", action: "/priceaction" },
  ];
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl mt-12">
        <section className="nav">
          <div className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-center p-2 lg:px-8 bg-zinc-950 "
              aria-label="Global"
            >
              <div className="hidden lg:flex lg:gap-x-12 items-center justify-center">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    to={item.action}
                    // variant='text'
                    // color='while'
                  >
                    <Button
                      variant="text"
                      className="rounded-full text-neutral-500 hover:text-gray-100 "
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="flex lg:hidden items-start justify-start lg:px-8 bg-zinc-950 p-2">
              <button
                type="button"
                className="mx-2 inline-flex  rounded-md  text-gray-400 hover:text-gray-100"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Dialog
              as="div"
              className="lg:hidden "
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    className="-m-2.5 rounded-full p-2.5 text-gray-400 hover:bg-zinc-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link key={item.id} to={item.action}>
                          <Button
                            fullWidth
                            variant="text"
                            className="rounded-lg p-6 text-start text-neutral-500 hover:bg-zinc-900"
                          >
                            {item.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </section>
        <section className="title">
          <div className="mx-auto max-w-7xl">
            <div className="py-4">
              <Spline scene="https://prod.spline.design/LGlygYGujQeHBF-7/scene.splinecode" />
            </div>
            <div className="mx-12">
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
              className="text-7xl text-center font-bold tracking-tight "
              data-taos-offset="300"
            >
              <LinearGradient gradient={["to left", "#727a9a ,#d8dbe9"]}>
                Our Trending Courses
              </LinearGradient>
            </h1>
            <h2
              className="my-4 text-md text-center font-semibold  text-zinc-500 "
              data-taos-offset="300"
            >
              Check out most 🔥 courses in the market
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 mx-12 lg:grid-cols-2 ">
              {products.map((pd) => (
                <div key={pd.id} className="group ">
                  <div className="bg-zinc-800/40  rounded-3xl p-2 ">
                    <img
                      className="h-full w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 "
                      data-taos-offset="300"
                      src={pd.logo}
                    />
                    <h3 className="mt-4 text-xl text-center text-gray-300 font-extrabold">
                      {pd.name}
                    </h3>
                    <div className="text-neutral-500 p-6 indent-8">
                      {pd.sub}
                    </div>
                    <Link
                      to={pd.action}
                      className="flex justify-center items-center gap-2"
                    >
                      <Button className="text-neutral-400 bg-zinc-800/35 rounded-full ring-1 ring-white/10 hover:text-gray-300 mb-4">
                        เพิ่มเติม
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

export default Home;
