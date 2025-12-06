import BlueprintItem from "@renderer/components/ui/blueprint-item"
import reactLogo from '@renderer/assets/logos/react-logo.svg'
import CreateHeader from "@renderer/components/ui/create-header"

function CreateStep1(): React.JSX.Element {
  return (
    <div className="p-16 justify-between w-full h-full">
      <CreateHeader
        step={1}
        title="What do you want to create?"
        description="You can select from one of the blueprints below, or import a file."
      />
      <div className="flex flex-col gap-2">
        <BlueprintItem
          logo={reactLogo}
          title="React + TypeScript + Vite"
          description="a description"
          href="/create/2"
        />
      </div>
    </div>
  )
}

export default CreateStep1
