import { JSX } from 'react/jsx-runtime'
import { Button } from './button'
import { ChevronLeftIcon } from 'lucide-react'

function CreateHeader({
  step,
  title,
  description
}: {
  step: number
  title: string
  description: string
}): JSX.Element {
  return (
    <div className="flex flex-col gap-2 items-center text-center sticky top-0 w-full h-36 bg-background! pt-6 shadow-lg shadow-background z-5">
      <div className="flex flex-row gap-2 w-1/3 justify-center items-center pr-10">
        <Button variant="ghost">
          <ChevronLeftIcon width={12} height={12} />
        </Button>
        <div className="w-1/2 h-1 bg-white"></div>
        {step === 2 ? (
          <div className="w-1/2 h-1 bg-white"></div>
        ) : (
          <div className="w-1/2 h-1 bg-gray-500"></div>
        )}
      </div>
      <p className="font-mono text-gray-600">Step {step} of 2</p>
      <p className="text-xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  )
}
export default CreateHeader
