import Link from "next/link"

export default function HomePage() {
  return (
    <div className="h-screen  w-full justify-center items-center flex">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-serif font-bold text-black">FrameUI</p>
          <p className=" font-serif font-bold text-white">
            Component Framework
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <a href="https://github.com/Lisulol" target={"_blank"}>
            <button className="border items-center justify-center flex bg-white rounded-2xl p-3 font-bold hover:cursor-pointer hover:bg-gray-200">
              Github Repository
            </button>
          </a>
          <Link href="/Docs/Start">
            <button className="border border-[#363636] items-center text-white justify-center flex bg-[#121212] rounded-2xl p-3 font-bold hover:cursor-pointer hover:bg-gray-800">
              Documenation
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
