import {
  ArrowRightIcon,
  ChevronRightIcon,
  GitBranchIcon,
  PackageIcon,
  SquareChevronRightIcon
} from 'lucide-react'
import reactLogo from './src/assets/logos/react-logo.svg'
import { Button } from './src/components/ui/button'
import { ThemeProvider } from './src/components/ui/theme-provider'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle
} from './src/components/ui/item'
import { SidebarProvider } from './src/components/ui/sidebar'
import AppSidebar from './src/components/ui/app-sidebar'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider
        style={{
          '--sidebar-width': '12rem'
        }}
      >
        <div className="flex flex-row gap-2 w-full h-full text-xs bg-background text-foreground">
          <AppSidebar />
          <p>Hello :3</p>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
