export default function ButtonComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="border border-black bg-white rounded-2xl p-3 font-bold hover:cursor-pointer hover:bg-gray-200">
      {children}
    </button>
  )
}
