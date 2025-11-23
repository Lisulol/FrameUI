import { IconSearch } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function SearchBar() {
  const [togglesearchbar, settogglesearchbar] = useState(false)
  const [query, setquery] = useState("")

  const components = [
    { name: "Button", path: "/Docs/Components/Button" },
    { name: "Slider", path: "/Docs/Components/Slider" },
    { name: "ProgressBar", path: "/Docs/Components/ProgressBar" },
    { name: "Switch", path: "/Docs/Components/switch" },
    { name: "Alert", path: "/Docs/Components/Alert" },
    { name: "NavBar", path: "/Docs/Components/NavBar" },
    { name: "Menu", path: "/Docs/Components/Menu" },
    { name: "Modal", path: "/Docs/Components/Modal" },
    { name: "Input", path: "/Docs/Components/input" },
  ]

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(query.toLowerCase())
  )

  function handleEscape(event: KeyboardEvent) {
    if (event.key === "Escape") {
      settogglesearchbar(false)
      setquery("")
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <div className="flex flex-row relative">
      {togglesearchbar && (
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md p-2 text-sm outline-none w-48"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          autoFocus
        />
      )}
      {togglesearchbar && query && (
        <div className="absolute top-12 left-0 bg-white border border-gray-300 rounded-md shadow-lg w-48 z-50">
          {filteredComponents.length > 0 ? (
            filteredComponents.map((component) => (
              <Link key={component.name} href={component.path}>
                <div
                  className="p-3 hover:bg-gray-200 cursor-pointer border-b last:border-b-0"
                  onClick={() => {
                    settogglesearchbar(false)
                    setquery("")
                  }}
                >
                  <p className="text-sm font-semibold">{component.name}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-3 text-sm text-gray-500">No results found</div>
          )}
        </div>
      )}
      <button
        className="hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md"
        onClick={() => settogglesearchbar(!togglesearchbar)}
      >
        <IconSearch />
      </button>
    </div>
  )
}
