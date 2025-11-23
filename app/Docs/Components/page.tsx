"use client"
import CodeBox from "@/components/Code/code"
import Menu from "@/components/Menu/menu"
import NavBar from "@/components/NavBar/navbar"
import Slider from "@/components/slider/slider"
import {
  IconChevronLeft,
  IconMenu2,
  IconPoint,
  IconSearch,
} from "@tabler/icons-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "./Alert/page"
import ButtonComponent from "@/components/button/button"
import ProgressBar from "@/components/progressbar/progressbar"
import { Code } from "lucide-react"
import { Switch } from "@radix-ui/react-switch"
import SwitchComponent from "@/components/switch/switch"
import Input from "@/components/input/input"
import SearchBar from "@/components/searchbar/searchbar"

export default function SliderPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setisVisible] = useState(false)
  const [installmethod, setInstallmethod] = useState<"Manual" | "CLI">("CLI")
  const [progress, setProgress] = useState(50)

  useEffect(() => {
    setTimeout(() => setisVisible(true), 10)
  }, [])
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(true)
    } else {
      const timer = setTimeout(() => setMenuOpen(false), 500)
      return () => clearTimeout(timer)
    }
  }, [menuOpen, setMenuOpen])

  return (
    <div
      className={`h-screen w-full overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      <NavBar>
        <div className="flex items-center justify-between w-full h-full">
          <button
            className="hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IconMenu2 />
          </button>
          <Link href="/" passHref>
            <p>FrameUI</p>
          </Link>
          <SearchBar />
        </div>
      </NavBar>
      {menuOpen && (
        <Menu>
          <div
            className="w-full h-full"
            style={
              {
                opacity: menuOpen ? 1 : 0,
                animation: menuOpen
                  ? "slideIn 500ms ease-out 10ms forwards"
                  : "slideOut 500ms ease-in forwards",
              } as React.CSSProperties
            }
          >
            <div className="w-full h-15 border-b flex items-center">
              <button
                className="flex items-center justify-center hover:bg-[#535353] h-15 w-15 rounded-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <IconChevronLeft />
              </button>
            </div>
            <div className="h-50 border-b border-black items-center justify-center flex hover:cursor-pointer rounded-2xl hover:bg-[#535353]">
              <Link href="/Docs/Start" className="w-full">
                <p className="items-center justify-center flex font-bold">
                  Getting Started
                </p>
              </Link>
            </div>
            <div className="flex w-full h-full flex-col items-center ">
              <Link href="/Docs/Components/Button" className="w-full">
                <div className="hover:cursor-pointer rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold ">
                    Button
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/NavBar" className="w-full">
                <div className="hover:cursor-pointer rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    NavBar
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/Menu" className="w-full">
                <div className="hover:cursor-pointer rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Menu
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/ProgressBar" className="w-full">
                <div className="hover:cursor-pointer rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Progress Bar
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/Modal" className="w-full">
                <div className="hover:cursor-pointer rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Modal
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/Alert" className="w-full">
                <div className="hover:cursor-pointer rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Alert
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/input" className="w-full">
                <div className="hover:cursor-pointer  rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Input Pop Up
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/Slider" className="w-full">
                <div className="hover:cursor-pointer  rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Slider
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/switch" className="w-full">
                <div className="hover:cursor-pointer  rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Switch
                  </p>
                </div>
              </Link>
              <Link href="/Docs/Components/Codebox" className="w-full">
                <div className="hover:cursor-pointer  rounded-2xl hover:bg-[#535353] w-full h-20 items-center justify-center flex">
                  <p className="items-center justify-center flex font-bold">
                    Code box
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Menu>
      )}
      <div className="h-full flex-col w-full items-center justify-center flex gap-12 overflow-y-auto">
        <p className="font-bold text-4xl">Components</p>
        <div className="flex flex-col h-4/5 w-4/5 border rounded-4xl gap-10 p-15 overflow-y-auto">
          <div className="grid grid-cols-2 grid-rows-3 gap-50">
            <div className="flex items-center justify-center">
              <ButtonComponent>
                <div>Button</div>
              </ButtonComponent>
            </div>
            <div className="flex items-center justify-center">
              <Slider value={progress} setvalue={setProgress} />
            </div>
            <div className="flex items-center justify-center">
              <ProgressBar value={progress} />
            </div>
            <div className="flex items-center justify-center">
              <CodeBox>
                <pre className="p-5 text-sm">{"smth"}</pre>
              </CodeBox>
            </div>
            <div className="flex items-center justify-center">
              <SwitchComponent />
            </div>
            <div className="flex items-center justify-center">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
