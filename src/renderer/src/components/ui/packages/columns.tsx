import { Package } from "@renderer/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Package>[] = [
  {
    accessorKey: "name",
    header: "Package name"
  },
  {
    accessorKey: "version",
    header: "Version"
  }
]