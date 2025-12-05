// Code from shadcn: https://ui.shadcn.com/docs/components/sidebar#installation
import { JSX } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from './sidebar'
import { CogIcon, LayoutDashboardIcon, PlusIcon, WrenchIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const items = [
  {
    icon: LayoutDashboardIcon,
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: PlusIcon,
    title: 'Create',
    url: "/create"
  },
  {
    icon: WrenchIcon,
    title: 'Tools',
    url: "#"
  },
  {
    icon: CogIcon,
    title: 'Settings',
    url: "#"
  }
]
export default function AppSidebar(): JSX.Element {
  const navigate = useNavigate();
  
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
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
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
