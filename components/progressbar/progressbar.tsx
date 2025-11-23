import * as Progress from "@radix-ui/react-progress"

type ProgressBarProps = {
  value: number
  showLabel?: boolean
}

export default function ProgressBar({
  value,
  showLabel = true,
}: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value))

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-64 h-6 bg-gray-300 rounded-full overflow-hidden">
        <Progress.Root className="w-full h-full" value={clampedValue}>
          <Progress.Indicator
            className="h-full bg-gray-200 transition-all duration-500 ease-in-out"
            style={{ width: `${clampedValue}%` }}
          />
        </Progress.Root>
        {showLabel && (
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
            {clampedValue}%
          </span>
        )}
      </div>
    </div>
  )
}
