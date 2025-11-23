"use client"
import Menu from "@/components/Menu/menu"
import NavBar from "@/components/NavBar/navbar"
import SearchBar from "@/components/searchbar/searchbar"
import { IconChevronLeft, IconMenu2, IconSearch } from "@tabler/icons-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function DocsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [instalation, showInstalation] = useState(false)
  const [showcomponents, setshowComponents] = useState(false)
  const [instalationMethod, setInstallationMethod] = useState<
    "pnpm" | "npm" | "yarn"
  >("npm")

  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true)
    } else {
      const timer = setTimeout(() => setMenuVisible(false), 500)
      return () => clearTimeout(timer)
    }
  }, [menuOpen])
  return (
    <div className="h-screen w-full  overflow-hidden">
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
      <div className="items-center justify-center flex h-full w-full">
        <div className="w-4/5 p-10 h-4/5 gap-10 border-2 rounded-2xl flex flex-col justify-center">
          <p className="text-xl font-bold">
            {" "}
            <span className="text-3xl">FrameUi </span>is a component library
            built with tailwind. It helps you to quickly "frame" your web app,
            hence the name. Start here:
          </p>
          <div className="w-full h-4/5 gap-15 flex flex-row  justify-center">
            <div className="w-1/2 h-full flex-col  flex">
              <button
                className="font-bold hover:bg-[#bbbbbb] border rounded-2xl w-full h-50 p-15"
                onClick={() => showInstalation(!instalation)}
              >
                Instalation
              </button>
              {instalation && (
                <div className="w-ull h-full flex gap-5 flex-col">
                  <div className="flex-row flex border-b p-5 font-bold  justify-between gap-x-15">
                    <button
                      className="items-center justify-center flex hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
                      onClick={() => setInstallationMethod("npm")}
                    >
                      npm
                    </button>
                    <button
                      className="items-center justify-center flex hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
                      onClick={() => setInstallationMethod("pnpm")}
                    >
                      pnpm
                    </button>
                    <button
                      className="items-center justify-center flex hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
                      onClick={() => setInstallationMethod("yarn")}
                    >
                      yarn
                    </button>
                  </div>
                  {instalationMethod === "npm" && (
                    <div className="w-full ">
                      <p className="bg-[#b8b8b8] w-100 font-bold p-5 rounded-4xl border ">
                        {`${instalationMethod} install frameui-package`}
                      </p>
                    </div>
                  )}
                  {instalationMethod === "pnpm" && (
                    <div className="w-full ">
                      <p className="bg-[#b8b8b8] w-100 font-bold p-5 rounded-4xl border ">
                        coming soon
                      </p>
                    </div>
                  )}
                  {instalationMethod === "yarn" && (
                    <div className="w-full ">
                      <p className="bg-[#b8b8b8] w-100 font-bold p-5 rounded-4xl border ">
                        coming soon{" "}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="w-1/2 h-full  justify-center flex">
              <Link href="/Docs/Components" className="w-full">
                <button className="font-bold hover:bg-[#bbbbbb] border rounded-2xl w-full h-50 p-15">
                  Components
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
