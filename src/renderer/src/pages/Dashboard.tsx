import {
  ArrowRightIcon,
  ChevronRightIcon,
  GitBranchIcon,
  PackageIcon,
  SquareChevronRightIcon
} from 'lucide-react'
import reactLogo from '../assets/logos/react-logo.svg'
import { Button } from '../components/ui/button'
import { ThemeProvider } from '../components/ui/theme-provider'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from '../components/ui/item'
import { SidebarProvider, SidebarTrigger } from '../components/ui/sidebar'
import AppSidebar from '../components/ui/app-sidebar'
import BlueprintItem from '@renderer/components/ui/blueprint-item'

function Dashboard(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="flex flex-col gap-1 w-3/5 p-3">
        <div className="flex flex-row items-center">
          <SidebarTrigger />
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>
        <p>Let's create something new today</p>
        <Item variant="outline" size="sm" asChild>
          <a href="#">
            <ItemMedia>
              <img src={reactLogo} width={24} height={24} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>
                <h3 className="font-bold">MyProject</h3>
              </ItemTitle>
              <ItemDescription>
                <div className="flex flex-col gap-0 flex-1">
                  <p>Last modified 4 days ago</p>
                </div>
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="icon">
                <GitBranchIcon width={12} height={12} />
              </Button>
            </ItemActions>
          </a>
        </Item>
      </div>

      <div className="flex flex-col gap-1 w-2/5 p-3">
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <h2 className="text-xl font-bold">Blueprints</h2>
          </div>
          <Button variant="outline">
            <ArrowRightIcon width={12} height={12} />
            View all
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <BlueprintItem
            logo={reactLogo}
            title="React + TypeScript + Vite"
            description="a description"
          />
        </div>
        <div className="flex flex-row items-center">
          <div className="flex-1">
            <h2 className="text-lg font-bold">Installed tools</h2>
          </div>
          <Button variant="outline">
            <ArrowRightIcon width={12} height={12} />
            Manage
          </Button>
        </div>
        <Item variant="outline" size="sm">
          <div className="flex flex-row gap-2 items-center">
            <SquareChevronRightIcon width={12} height={12} />
            <p className="font-bold">Node.js</p>
            <p className="font-mono">v22.17.0</p>
            <div className="bg-green-700 w-2 h-2 rounded-full"></div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <PackageIcon width={12} height={12} />
            <p className="font-bold">npm</p>
            <p className="font-mono">v11.6.4</p>
            <div className="bg-green-700 w-2 h-2 rounded-full"></div>
          </div>
        </Item>
      </div>
    </>
  )
}

export default Dashboard
