import { SidebarProvider } from './components/ui/sidebar'
import AppSidebar from './components/ui/app-sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import { ThemeProvider } from './components/ui/theme-provider'
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
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
