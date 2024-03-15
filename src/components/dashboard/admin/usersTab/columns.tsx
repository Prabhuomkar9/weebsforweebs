"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import Temporary from "./temp"
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
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <>
          User ID
        </>
      )
    },
    cell: ({ row }) => <div >{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <>
          User Name
        </>
      )
    },
    cell: ({ row }) => <div >{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <>
          Email
        </>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => {
      return (
        <>
          Phone Number
        </>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("phoneNumber")}</div>,
  },
  {
    accessorKey: "apartment",
    header: ({ column }) => {
      return (
        <>
          Apartment
        </>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("apartment")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original

      return (
        <Temporary user={user} />
      )
    },
  },
]

export default columns;
