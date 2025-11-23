"use client"
import CodeBox from "@/components/Code/code"
import Menu from "@/components/Menu/menu"
import NavBar from "@/components/NavBar/navbar"
import SearchBar from "@/components/searchbar/searchbar"
import Slider from "@/components/slider/slider"
import SwitchComponent from "@/components/switch/switch"
import {
  IconChevronLeft,
  IconMenu2,
  IconPoint,
  IconSearch,
} from "@tabler/icons-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SwitchPage() {
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
      <div className="h-full w-full items-center justify-center flex overflow-y-auto">
        <div className="flex flex-col h-4/5 w-4/5 border rounded-4xl gap-10 p-15 overflow-y-auto">
          <div className="w-full h-16">
            <p className=" text-6xl flex items-center flex-row">
              <IconPoint />
              Switch
            </p>
            <p className="ml-7 text-xl font-bold">
              A simple and customizable switch component for toggling between on
              and off states.
            </p>
          </div>
          <div>
            <div className="flex-col gap-y-5 font-bold flex items-center justify-center">
              <div className="flex items-center justify-center flex-col gap-40">
                <div className="flex flex-col items-center justify-center gap-5">
                  <div className="flex flex-row gap-y-20 items-center justify-center gap-10">
                    <SwitchComponent /> <p className="flex">ON/OFF</p>
                  </div>
                  <div className="w-1/3 h-1/3 flex items-center justify-center">
                    <div>
                      <CodeBox>
                        <div className="h-full w-full overflow-auto">
                          <pre className="p-5 text-sm">
                            {`export default function MainPage() {
    const [value, setvalue] = useState(50)
    return (
      <Slider value={value} setvalue={setvalue} />
    )
}`}
                          </pre>
                        </div>
                      </CodeBox>
                    </div>
                  </div>
                </div>
                <div className="flex-col flex gap-5 w-full justify-center items-center">
                  <div className="flex flex-row items-center justify-center border-b border-[#b8b8b8] gap-10 pb-5">
                    <p>Installation :</p>
                    <button
                      className="bg-[#b8b8b8] w-30 p-4 items-center rounded-2xl justify-center flex hover:bg-[#a9a9a9]"
                      onClick={() => setInstallmethod("Manual")}
                    >
                      Manual
                    </button>
                    <button
                      className="bg-[#b8b8b8] w-30 p-4 items-center rounded-2xl justify-center flex hover:bg-[#a9a9a9]"
                      onClick={() => setInstallmethod("CLI")}
                    >
                      CLI
                    </button>
                  </div>
                  {installmethod === "Manual" && (
                    <div className=" w-2/3 h-full items-center justify-center flex flex-col gap-5">
                      <div
                        className="border w-full p-10 gap-5 flex flex-col rounded-4xl"
                        style={
                          {
                            opacity: 0,
                            animation: "fadeIn 500ms ease-out 10ms forwards",
                          } as React.CSSProperties
                        }
                      >
                        <p className="font-bold text-sm">
                          Install dependeceies
                        </p>
                        <CodeBox>
                          <pre className="text-sm p-4">{`npm install @radix-ui/react-switch`}</pre>
                        </CodeBox>
                        <p className="font-bold text-sm">
                          Copy the code and put it in your component
                        </p>
                        <CodeBox>
                          <div className="h-full w-full overflow-auto p-5">
                            <pre className="text-sm overflow-x-auto">
                              {`import * as Switch from "@radix-ui/react-switch"

export default function SwitchComponent() {
  return (
    <Switch.Root className="w-12 h-7 bg-gray-300 rounded-full relative data-[state=checked]:bg-blue-500 transition-colors">
      <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transform translate-x-1 data-[state=checked]:translate-x-6 transition-transform" />
    </Switch.Root>
  )
}`}
                            </pre>
                          </div>
                        </CodeBox>
                      </div>
                    </div>
                  )}
                  {installmethod === "CLI" && (
                    <div
                      className="flex w-full flex-col gap-5"
                      style={
                        {
                          opacity: 0,
                          animation: "fadeIn 500ms ease-out 10ms forwards",
                        } as React.CSSProperties
                      }
                    >
                      <CodeBox>
                        <pre className="text-sm p-5 w-full">{`npm i frameui-package`}</pre>
                      </CodeBox>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
