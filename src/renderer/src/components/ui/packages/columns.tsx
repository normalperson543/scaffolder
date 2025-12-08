import { Package } from '@renderer/lib/types'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '../checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../dropdown-menu'
import { Button } from '../button'
import { ArrowUpDownIcon, BoxIcon, MoreHorizontalIcon } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../hover-card'

export const columns: ColumnDef<Package>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Package name
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const packageItem = row.original
      return (
        <HoverCard>
          <HoverCardTrigger>
            <p className="font-mono">{packageItem.sanitized_name}</p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm">
            <div className="flex flex-col gap-1">
              <p className="font-bold">{packageItem.sanitized_name}</p>
              <p>{packageItem.description}</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      )
    }
  },
  {
    accessorKey: 'version',
    header: 'Version'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const packageItem = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuItem>Install specific version</DropdownMenuItem>
            <DropdownMenuItem>View on npm registry</DropdownMenuItem>
            <DropdownMenuItem>Reinstall</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Go nuclear</DropdownMenuLabel>
              <DropdownMenuItem variant="destructive">Remove</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
