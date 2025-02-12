"use client"

import { useState } from "react"
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { CloudLightning, Menu } from "lucide-react"
import { AnimatedCards } from "./AnimatedCards"
import CountUp from "./CountUp"

const Mainpage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = useState("right")

  const NavItems = () => (
    <>
      <li className="block mb-4 md:inline-block md:mr-2">
        <a href="/upload" className="active:text-[#FD914C] w-full text-left text-lg md:text-base">UPLOAD</a>
      </li>
      <li className="block mb-4 md:inline-block md:mx-2">
        <a href="/download" className="active:text-[#FD914C] w-full text-left text-lg md:text-base">DOWNLOAD</a>
      </li>
      <li className="block mb-4 md:inline-block md:mx-2">
        <a href="/about" className="active:text-[#FD914C] w-full text-left text-lg md:text-base">ABOUT US</a>
      </li>
      <li className="block mb-4 md:inline-block md:mr-2">
        <a className="active:text-[#FD914C] w-full text-left text-lg md:text-base">CONTACT US</a>
      </li>
    </>
  )

  return (
    <div className="min-h-dvh bg-gradient-to-b from-gray-900 to-black text-white" style={{ fontFamily: "Poppins" }}>
      <div className="min-h-full">
        <div className="top-0 p-4 md:p-5 flex justify-between items-center">
          <div className="flex items-center">
            <CloudLightning className="w-6 h-6 md:w-8 md:h-8 text-orange-400 mr-2" />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Dash</h1>
          </div>
          <IconButton
            className="md:hidden"
            aria-label="Open menu"
            icon={<Menu color="#ffffff" />}
            onClick={onOpen}
            display={{ base: "flex", md: "none" }}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
          <ul className="hidden md:flex font-medium">
            <NavItems />
          </ul>
        </div>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="black" opacity={75}>
            <DrawerCloseButton color="white" />
            <DrawerHeader borderBottomWidth="1px" className="text-white">
              Menu
            </DrawerHeader>
            <DrawerBody>
              <ul className="font-medium text-white">
                <NavItems />
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <div className="px-4 md:px-5 min-h-screen flex flex-col justify-center">
          <div className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center mt-8 md:mt-12">
            QUICK. EASY. SECURE
          </div>
          <p className="text-center mt-4 md:mt-5 text-sm md:text-base">
            Need To Send Files Urgently? Seamless File Transfers At Your Fingertips
          </p>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-8 md:mt-10">
            <li className="">
              <a href="/upload" className="bg-[#FD914C] w-full md:w-36 h-10 rounded px-4 md:px-0"><p className="p-5 bg-[#FD914C] w-full md:w-36 h-10 rounded px-4 md:px-0 flex justify-center items-center">UPLOAD</p></a >
            </li>
            <li>
              <a href="/download" className=""><p className="w-full md:w-36 h-10 rounded border-[#FD914C] border-2 px-4 md:px-0 flex justify-center items-center">DOWNLOAD</p></a >
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 my-12 md:my-20">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <CountUp
              from={0}
              to={1000000}
              separator=","
              direction="up"
              duration={0.3}
              className="text-3xl md:text-5xl lg:text-6xl font-bold"
            />
            <span className="text-xl md:text-3xl lg:text-4xl text-center">uploads to date</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <CountUp
              from={0}
              to={1000231230}
              separator=","
              direction="up"
              duration={0.3}
              className="text-3xl md:text-5xl lg:text-6xl font-bold"
            />
            <span className="text-xl md:text-3xl lg:text-4xl text-center">downloads to date</span>
          </div>
        </div>

        <AnimatedCards />

        

        <div className="grid grid-cols-1 md:grid-cols-2 bg-black my-12 md:my-20 lg:my-56 px-4 md:px-5 bg-transparent">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-9xl">Dash</h1>
            <h5 className="text-xl md:text-2xl lg:text-3xl mt-2">QUICK.EASY.SECURE</h5>
          </div>
          <p className="mx-auto w-full md:w-48 my-6 md:my-8 font-medium text-center md:text-left text-sm md:text-base">
            Discovered some bugs? Feel free to tell us about them at: teamdash@gmail.com
          </p>
        </div>
        <hr className="bg-[#FD914C] h-0.5 w-11/12 md:w-4/5 mx-auto border-0 mt-4 md:mt-5" />
        <div className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-5">
          <p className="mb-4 md:mb-0"></p>
        </div>
      </div>
    </div>
  )
}

export default Mainpage

