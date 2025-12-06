import BlueprintItem from "@renderer/components/ui/blueprint-item"
import reactLogo from '@renderer/assets/logos/react-logo.svg'
import CreateHeader from "@renderer/components/ui/create-header"

function CreateStep1(): React.JSX.Element {
  return (
    <div className="justify-between w-full h-full">
      <CreateHeader
        step={1}
        title="What do you want to create?"
        description="You can select from one of the blueprints below, or import a file."
      />
      <div className="pt-42 pl-16 pr-16 pb-16 flex flex-col gap-2">
        <BlueprintItem
          logo={reactLogo}
          title="React + TypeScript + Vite"
          description="a description"
          href="/create/2"
        />
        <BlueprintItem
          title="Custom project"
          description="Customize how your project works. If you want to feel... more custom."
          href="/create/custom"
        />
      </div>
    </div>
  )
}

export default CreateStep1
