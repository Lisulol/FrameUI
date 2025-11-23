import { ReactNode } from "react"

type ModalProps = {
  children?: ReactNode
}
export default function Modal({ children }: ModalProps) {
  return (
    <div className="flex items-center rounded-4xl border-2 bg-[#e7e7e7] justify-center w-4/5 h-4/5 p-15">
      {children}
    </div>
  )
}
