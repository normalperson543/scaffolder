import { JSX } from 'react/jsx-runtime'

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
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <div className="flex flex-row gap-2 w-1/3 justify-center">
        <div className="w-1/3 h-1 bg-white"></div>
        {step === 2 ? (
          <div className="w-1/3 h-1 bg-white"></div>
        ) : (
          <div className="w-1/3 h-1 bg-gray-500"></div>
        )}
        {step === 3 ? (
          <div className="w-1/3 h-1 bg-white"></div>
        ) : (
          <div className="w-1/3 h-1 bg-gray-500"></div>
        )}
      </div>
      <p className="font-mono text-gray-600">Step {step} of 3</p>
      <p className="text-xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  )
}
export default CreateHeader
