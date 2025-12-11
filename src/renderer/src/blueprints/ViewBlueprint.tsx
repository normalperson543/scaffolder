import { Button } from '@renderer/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@renderer/components/ui/tabs'
import { ArrowRightIcon, GitBranchIcon, PlayIcon, SquareArrowUpRightIcon } from 'lucide-react'
import { JSX } from 'react/jsx-runtime'
import reactLogo from '@renderer/assets/logos/react-logo.svg'
import { Separator } from '@renderer/components/ui/separator'
function ViewBlueprint(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Tabs defaultValue="packages" className="w-full">
        <div className="flex flex-col gap-2 h-32 sticky top-0 z-10 bg-background shadow-background shadow-md">
          <div className="p-3 flex flex-row w-full gap-4 items-center">
            <img src={reactLogo} width={24} height={24} />
            <div className="flex flex-col gap-1 w-full flex-1">
              <p className="font-bold text-lg">React + TypeScript + Vite</p>
              <p className="text-gray-300">
                by{' '}
                <a href="#" className="underline">
                  normalperson543
                </a>
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Button variant="outline" size="icon-sm">
                <GitBranchIcon width={8} height={8} />
              </Button>
              <Button>
                <ArrowRightIcon width={12} height={12} />
                Create
              </Button>
            </div>
          </div>
          <Separator />
          <div className="pl-3 pr-3 pb-1">
            <TabsList defaultValue="readme">
              <TabsTrigger value="readme">Readme</TabsTrigger>
              <TabsTrigger value="workflow">Workflow</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="readme">
          <p>readme goes here :3</p>
        </TabsContent>
        <TabsContent value="workflow">
          <div className="flex flex-col gap-1 pt-1 pb-1 pl-3 pr-3 w-full">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-lg font-bold">Workflow</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default ViewBlueprint
