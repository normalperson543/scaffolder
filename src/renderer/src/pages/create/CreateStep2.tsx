import BlueprintItem from "@renderer/components/ui/blueprint-item"
import reactLogo from '@renderer/assets/logos/react-logo.svg'
import CreateHeader from "@renderer/components/ui/create-header"
import { Item, ItemContent } from "@renderer/components/ui/item"

function CreateStep2(): React.JSX.Element {
  return (
    <div className="p-16 justify-between w-full h-full">
      <CreateHeader
        step={2}
        title="Customize your project settings"
        description="Here you can change your settings like project name, development tools and Git repositories."
      />
      <div className="flex flex-col gap-2 justify-center items-center">
        <Item variant="outline">
          <ItemContent>
            
          </ItemContent>
        </Item>
      </div>
    </div>
  )
}

export default CreateStep2
