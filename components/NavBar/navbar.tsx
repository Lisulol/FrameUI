import type { ReactNode } from "react"

type NavBarProps = {
  children?: ReactNode
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <div className="w-full z-10 h-15 p-5 border-b-4 border-black bg-[#ececec] font-bold text-2xl">
      {children}
    </div>
  )
}
