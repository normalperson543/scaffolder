import { JSX } from 'react/jsx-runtime'
import reactLogo from '@renderer/assets/logos/react-logo.svg'
import { Button } from '@renderer/components/ui/button'
import { GitBranchIcon, PlayIcon, SquareArrowUpRightIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@renderer/components/ui/tabs'
import { Separator } from '@renderer/components/ui/separator'
import { columns } from '@renderer/components/ui/packages/columns'
import { packagesPlaceholder } from '@renderer/lib/placeholders'
import PackagesTable from '@renderer/components/ui/packages/packages-table'
function Project(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="p-3 flex flex-row w-full gap-4 items-center h-18">
        <img src={reactLogo} width={24} height={24} />
        <div className="flex flex-col gap-1 w-full flex-1">
          <p className="font-bold text-lg">MyProject</p>
          <p className="text-gray-300">React + TypeScript + Vite</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Button variant="outline" size="icon-sm">
            <GitBranchIcon width={8} height={8} />
          </Button>
          <Button variant="outline" size="icon-sm">
            <PlayIcon width={8} height={8} />
          </Button>
          <Button>
            <SquareArrowUpRightIcon width={12} height={12} />
            Open
          </Button>
        </div>
      </div>
      <Tabs defaultValue="packages" className="w-full">
        <div className="pl-3 pr-3 pb-1">
          <TabsList>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>
        <Separator />

        <TabsContent value="packages">
          <div className="flex flex-col gap-1 pt-1 pb-1 pl-3 pr-3 w-full">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-lg font-bold">Packages</p>
                <p>
                  Fetched from your <code>package.json</code> file.
                </p>
              </div>
              <Button>
                Update
              </Button>
              <Button>
                Reinstall
              </Button>
            </div>
            <PackagesTable columns={columns} data={packagesPlaceholder} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default Project
