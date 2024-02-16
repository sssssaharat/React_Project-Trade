import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
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
  MobileNav,
} from "@material-tailwind/react";
import { Dialog, Switch } from "@headlessui/react";
import Home from "./Home";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";
const SliderToggle = ({ selected, setSelected }) => {
  useEffect(() => {
    const localTheme = localStorage.getItem("selected");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected("light");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSelected("dark");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { id: 1, name: "ICT", action: "/ict" },
    { id: 2, name: "Elliott Wave", action: "/elliottwave" },
    { id: 3, name: "Harmonic Pattern", action: "/harmonicpattern" },
    { id: 4, name: "PriceAction", action: "/priceaction" },
  ];

  return (
    <div className="bg-black">
      <div className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-center p-6 lg:px-8 bg-zinc-950 "
          aria-label="Global"
        ></nav>
        <div className="flex lg:hidden items-start justify-start lg:px-8">
          <button
            type="button"
            className="mx-2 inline-flex  rounded-md p-2.5 text-gray-400 hover:text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
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
      <Home />
    </div>
  );
}

export default Nav;
