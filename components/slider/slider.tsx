type sliderProps = {
  setvalue: (value: number) => void
  value: number
}

export default function Slider({ setvalue, value }: sliderProps) {
  return (
    <div className="w-full flex">
      <input
        type="range"
        className="w-full accent-gray-600"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setvalue(Number(e.target.value))}
      />
    </div>
  )
}
