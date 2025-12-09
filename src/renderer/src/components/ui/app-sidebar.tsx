// Code from shadcn: https://ui.shadcn.com/docs/components/sidebar#installation
import { JSX } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from './sidebar'
import {
  BookDashedIcon,
  CogIcon,
  LayoutDashboardIcon,
  PlusIcon,
  SidebarCloseIcon,
  SidebarOpenIcon,
  WrenchIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const items = [
  {
    icon: LayoutDashboardIcon,
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: PlusIcon,
    title: 'Create',
    url: '/create/1'
  },
  {
    icon: BookDashedIcon,
    title: 'Blueprints',
    url: '/blueprints'
  },
  {
    icon: WrenchIcon,
    title: 'Tools',
    url: '#'
  },
  {
    icon: CogIcon,
    title: 'Settings',
    url: '#'
  }
]
export default function AppSidebar(): JSX.Element {
  const navigate = useNavigate()
  const { open, toggleSidebar } = useSidebar()
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="flex flex-col">
        <div className="flex-1">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href="#" onClick={() => navigate(item.url)}>
                        <item.icon />
                        <p>{item.title}</p>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" onClick={toggleSidebar}>
                    {open ? (
                      <SidebarCloseIcon width={12} height={12} />
                    ) : (
                      <SidebarOpenIcon width={12} height={12} />
                    )}
                    <p>Close sidebar</p>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
