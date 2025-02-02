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

const Mainpage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = useState("right")

  const NavItems = () => (
    <>
      <li className="block mb-2 md:inline-block md:mr-2">
        <button className="active:text-[#FD914C] w-full text-left">UPLOAD</button>
      </li>
      <li className="block mb-2 md:inline-block md:mx-2">
        <button className="active:text-[#FD914C] w-full text-left">DOWNLOAD</button>
      </li>
      <li className="block mb-2 md:inline-block md:mx-2">
        <button className="active:text-[#FD914C] w-full text-left">ABOUT US</button>
      </li>
      <li className="block mb-2 md:inline-block md:mr-2">
        <button className="active:text-[#FD914C] w-full text-left">CONTACT US</button>
      </li>
    </>
  )

  return (
    <div className="min-h-dvh bg-gradient-to-b from-gray-900 to-black text-white" style={{ fontFamily: "Poppins" }}>
      <div className="min-h-full">
        <div className="top-0 p-5 flex justify-between items-center">
          <div className="flex items-center">
            <CloudLightning className="w-8 h-8 text-orange-400 mr-2" />
            <h1 className="text-2xl md:text-3xl font-semibold">Dash</h1>
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

        <div className="px-5 md:px-0 min-h-screen flex flex-col justify-center">
          <div className="font-semibold text-4xl md:text-5xl text-center mt-12 md:mt-24">QUICK. EASY. SECURE</div>
          <p className="text-center mt-5">Need To Send Files Urgently? Seamless File Transfers At Your Fingertips</p>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-10">
            <li>
              <button className="bg-[#FD914C] w-36 h-10 rounded">UPLOAD</button>
            </li>
            <li>
              <button className="w-36 h-10 rounded border-[#FD914C] border-2">DOWNLOAD</button>
            </li>
          </ul>
        </div>

        <AnimatedCards />

        <div className="grid grid-cols-1 md:grid-cols-2 bg-black my-20 md:my-56 px-5 md:px-0">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-9xl">Dash</h1>
            <h5 className="text-2xl md:text-3xl mt-2">QUICK.EASY.SECURE</h5>
          </div>
          <p className="mx-auto w-full md:w-48 my-8 md:my-auto font-medium text-center md:text-left">
            Discovered some bugs? Feel free to tell us about them at: teamdash@gmail.com
          </p>
        </div>
        <hr className="bg-[#FD914C] h-0.5 w-4/5 mx-auto border-0 mt-5"></hr>
        <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center py-5">
          <p className="mb-4 md:mb-0"></p>
        </div>
      </div>
    </div>
  )
}

export default Mainpage

