import * as Switch from "@radix-ui/react-switch"
export default function SwitchComponent() {
  return (
    <Switch.Root className="w-12 h-7 bg-gray-300 rounded-full relative data-[state=checked]:bg-blue-500 transition-colors">
      <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transform translate-x-1 data-[state=checked]:translate-x-6 transition-transform" />
    </Switch.Root>
  )
}
