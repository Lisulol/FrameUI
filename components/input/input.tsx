type InputProps = {
  message?: string
  value?: string
  setValue?: (value: string) => void
}

export default function Input({ message, value, setValue }: InputProps) {
  return (
    <div className="flex flex-col bg-white gap-2  font-bold p-5 border border-black rounded-2xl ">
      {message}
      <input
        onChange={(e) => setValue?.(e.target.value)}
        value={value}
        placeholder={"..."}
        className="outline-none"
      ></input>
    </div>
  )
}
