import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react"
import { CodeXml, MonitorSmartphone, Layers, ShieldHalf, UsersRound, Files, CloudLightning, Menu } from "lucide-react"
import "../theme"

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

        <div className="px-5 md:px-0">
          <div className="font-semibold text-3xl md:text-4xl text-center mt-12 md:mt-24">QUICK. EASY. SECURE</div>
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

        <div className="mt-16 md:mt-32">
          <p className="mx-auto w-4/5 md:w-2/5 text-center">
            Dash is a platform for <span className="text-[#FD914C]">fast, secure</span> file sharing. Users can{" "}
            <span className="text-[#FD914C]">upload</span> files and easily send them to other devices for{" "}
            <span className="text-[#FD914C]">quick</span> downloads, ensuring{" "}
            <span className="text-[#FD914C]">seamless</span> and <span className="text-[#FD914C]">reliable</span> file
            transfers.
          </p>
          <div className="mt-10 px-5 md:px-0">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-8 justify-center align-middle">
              {[
                {
                  Icon: CodeXml,
                  text: "Our website features a simple and secure file upload system. Users can easily share files, with data safely stored in firebase storage and managed by an Express backend.",
                },
                {
                  Icon: MonitorSmartphone,
                  text: "Our platform offers seamless file sharing across all devices, allowing you to upload and access files from smartphones, tablets or computers anytime anywhere.",
                },
                {
                  Icon: Layers,
                  text: "Our token-based system simplifies file sharing by generating a unique token for each file, allowing recipients to access it without needing an account.",
                },
                {
                  Icon: ShieldHalf,
                  text: "We prioritize security with a token system that restricts file access to authorized users only. Additionally, Firebase Storage enhances protection against breaches and unauthorized access.",
                },
                {
                  Icon: UsersRound,
                  text: "We've designed our platform for a smooth user experience by eliminating extra steps. Recipients don't need to log in or create an account to download a file - just enter a token, and the download is ready.",
                },
                {
                  Icon: Files,
                  text: "Our website stands out with secure uploads, cross-device compatability, and a token-based sharing system. It's a reliable, secure, and user-friendly solution for sharing work documents or personal files",
                },
              ].map(({ Icon, text }, index) => (
                <li key={index}>
                  <Card
                    bg={"black"}
                    borderWidth={2}
                    borderColor={"#FD914C"}
                    height={{ base: "auto", md: 350 }}
                    width={5 / 6}
                    className="flex justify-center ml-10"
                    align={"center"}
                  >
                    <CardHeader>
                      <Icon color="#FD914C" />
                    </CardHeader>
                    <CardBody textColor={"white"}>{text}</CardBody>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-black my-20 md:my-56 px-5 md:px-0">
            <h1 className="text-6xl md:text-9xl mx-auto">Dash</h1>
            <p className="mx-auto w-full md:w-48 my-8 md:my-auto font-medium text-center md:text-left">
              Discovered some bugs? Feel free to tell us about them at: something@email.com
            </p>
            <h5 className="mx-auto text-2xl md:text-3xl col-span-1 md:col-span-2 mt-8 md:mt-0">QUICK.EASY.SECURE</h5>
          </div>
          <hr className="bg-[#FD914C] h-0.5 w-4/5 mx-auto border-0 mt-5"></hr>
          <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center py-5">
            <p className="mb-4 md:mb-0">Team Dash</p>
            <p className="text-center md:text-right">
              Chinmay Raj | Lead developer
              <br />
              Adarsh Sagiraju | Business Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage

