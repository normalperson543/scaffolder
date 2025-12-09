import { SidebarProvider } from './components/ui/sidebar'
import AppSidebar from './components/ui/app-sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { ThemeProvider } from './components/ui/theme-provider'
import CreateStep1 from './pages/create/CreateStep1'
import CreateStep2 from './pages/create/CreateStep2'
import CreateCustom from './pages/create/CreateCustom'
import Project from './pages/project/Project'
import Blueprints from './blueprints/Blueprints'
import ViewBlueprint from './blueprints/ViewBlueprint'
// https://www.geeksforgeeks.org/javascript/how-to-set-up-vite-for-a-multi-page-application/
function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider
        style={{
          '--sidebar-width': '12rem'
        }}
      >
        <div className="flex flex-row w-full h-full text-xs bg-background text-foreground">
          <AppSidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create/1" element={<CreateStep1 />} />
            <Route path="/create/2" element={<CreateStep2 />} />
            <Route path="/create/custom" element={<CreateCustom />} />
            <Route path="/blueprints" element={<Blueprints />} />
            <Route path="/blueprints/view-blueprint" element={<ViewBlueprint />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
