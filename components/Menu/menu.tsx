import type { ReactNode } from "react"

type MenuProps = {
  children?: ReactNode
}
export default function Menu({ children }: MenuProps) {
  return (
    <div
      className="fixed h-full z-10 w-50 bg-white border-r-2 rounded-r top-0 left-0"
      style={
        {
          opacity: 0,
          animation: "slideIn 500ms ease-out 10ms forwards",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
