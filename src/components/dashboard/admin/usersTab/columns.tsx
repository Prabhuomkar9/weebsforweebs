"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import ExtraOptionsAdminDashBoard from "./extraOptionsAdminDashBoard"
import { User } from "@/types"

const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
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
    enableHiding: false,
  },
  {
    accessorKey: "_id",
    header: ({ column }) => {
      return (
        <span className="text-white font-bold text-lg">
          User ID
        </span>
      )
    },
    cell: ({ row }) => <div >{row.getValue("_id")}</div>,
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <span className="text-white font-bold text-lg">
          User Name
        </span>
      )
    },
    cell: ({ row }) => <div >{row.getValue("username")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <span className="text-white font-bold text-lg">
          Email
        </span>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "Type",
    header: ({ column }) => {
      return (
        <span className="text-white font-bold text-lg">
          Phone Number
        </span>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("Type")}</div>,
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => {
      return (
        <span className="text-white font-bold text-lg">
          Apartment
        </span>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("dateOfBirth")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original

      return (
        <ExtraOptionsAdminDashBoard user={user} />
      )
    },
  },
]

export default columns;
