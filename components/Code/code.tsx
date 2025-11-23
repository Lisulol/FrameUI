import { IconCopy } from "@tabler/icons-react"

export default function CodeBox({ children }: { children: React.ReactNode }) {
  function handleCopy(e: React.MouseEvent<SVGSVGElement>) {
    if (typeof window !== "undefined") {
      const codeBoxDiv = (e.currentTarget as SVGSVGElement).closest(
        ".codebox-container"
      )
      const codeElement = codeBoxDiv?.querySelector("pre")
      if (codeElement) {
        const codeText = codeElement.textContent || ""
        navigator.clipboard.writeText(codeText)
      }
    }
  }
  return (
    <div className="w-full flex-col border h-full flex items-center justify-center bg-[#cccbcb] rounded-4xl codebox-container">
      <div className="h-10 p-5 w-full border-b flex items-center justify-between">
        <p>Code.tsx</p>
        <div className="hover:after:">
          <IconCopy
            onClick={handleCopy}
            className="hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
          />
        </div>
      </div>
      <div className="h-full w-full bg-[#b8b8b8] rounded-b-4xl text-black">
        {children}
      </div>
    </div>
  )
}
