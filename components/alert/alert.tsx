type AlertProps = {
  message?: string
}

export default function Alert({ message = "Alert message" }: AlertProps) {
  return (
    <div className="w-fit p-2 font-bold h-full flex bg-green-400 border-2 border-green-500   justify-center rounded-4xl">
      <p>{message}</p>
    </div>
  )
}
