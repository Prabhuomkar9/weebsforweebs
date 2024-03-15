"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"
import { Apartment, User } from "@/types"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

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
      const apartments: Apartment[] = [
        {
          id: 1,
          name: "Apartment 1",
          address: "123, Main Street, Lagos",
          numberOfRooms: 3,
          numberOfOccupants: 3
        },
        {
          id: 2,
          name: "Apartment 2",
          address: "123, Main Street, Lagos",
          numberOfRooms: 3,
          numberOfOccupants: 3
        }
      ]
      const [addModalOpen, setAddModalOpen] = useState<boolean>(false)
      const [selectedApartments, setSelectedApartments] = useState<Apartment[]>(apartments)
      const [apartmentId, setApartmentId] = useState<Apartment["id"]>(1)
      const [apartmentQuery, setApartmentQuery] = useState<Apartment["name"]>("")
      const [openApartmentList, setOpenApartmentList] = useState<boolean>(false)

      useEffect(() => {
        let partiallyFilteredApartments: Apartment[] = apartments;
        partiallyFilteredApartments = partiallyFilteredApartments?.filter((apartment) => {
          return apartment.name.toLowerCase().includes(apartmentQuery.toLowerCase())
        })
        partiallyFilteredApartments = partiallyFilteredApartments?.filter((apartment) => {
          return apartment.id.toString().includes(apartmentQuery.toLowerCase())
        })
      }, [apartmentQuery])

      return (
        <>
          <Dialog open={addModalOpen} >
            <DialogContent onCloseHandler={() => {
              setAddModalOpen(false)
            }}>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?
                </DialogTitle>
                <DialogDescription>
                  <Input placeholder="Apartment ID/Name" value={apartmentQuery} onChange={(e) => {
                    setApartmentQuery(e.target.value)
                    setOpenApartmentList(true)
                  }} />
                  <ScrollArea>
                    <div className="group">
                      {selectedApartments?.length === 0 && (
                        <div className="text-center text-gray-500">
                          No apartments found
                        </div>
                      )}
                      {selectedApartments?.map((apartment) => (
                        <Button
                          variant="ghost"
                          className={`h-max w-full justify-start text-wrap text-start font-normal bg-accent text-accent-foreground group-hover:bg-inherit group-hover:text-inherit group-hover:hover:bg-accent group-hover:hover:text-accent-foreground`}
                          key={apartment.id}
                          onClick={(e) => {
                            setApartmentId(apartment.id);
                            setApartmentQuery(apartment.name);
                            setOpenApartmentList(false);
                          }}
                        >
                          {apartment.name}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.id.toString())}
              >
                Copy User ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  onClick={() => { setAddModalOpen(true) }}>Add to apartment</Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  onClick={() => { }}>Remove from apartmnet</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )
    },
  },
]

export default columns


{/* <Table>
          <TableCaption>List of all registered users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Email</TableHead>
              <TableHead className="text-right">Phone</TableHead>
              <TableHead className="text-right">Apartment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">{user.email}</TableCell>
                <TableCell className="text-right">{user.phoneNumber}</TableCell>
                <TableCell className="text-right">{user.apartment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}
