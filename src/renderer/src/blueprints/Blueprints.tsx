import BlueprintItem from '@renderer/components/ui/blueprint-item'
import { JSX } from 'react'
import reactLogo from '@renderer/assets/logos/react-logo.svg'
import { Button } from '@renderer/components/ui/button'

function Blueprints(): JSX.Element {
  return (
    <div className="flex flex-col gap-1 w-full p-3">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-2xl font-bold">Blueprint manager</p>
          <p>Manage and import your blueprints.</p>
        </div>
        <Button>Import</Button>
      </div>
      <BlueprintItem
        logo={reactLogo}
        title="React + TypeScript + Vite"
        description="a description"
        href="/blueprints/view-blueprint"
      />
    </div>
  )
}
export default Blueprints
