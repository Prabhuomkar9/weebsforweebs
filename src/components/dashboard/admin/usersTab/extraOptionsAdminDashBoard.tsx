import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Apartment, User } from "@/types"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { FunctionComponent, useEffect, useState } from "react"


const ExtraOptionsAdminDashBoard: FunctionComponent<{ user: User }> = ({ user }) => {
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
  const [removeModalOpen, setRemoveModalOpen] = useState<boolean>(false)
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
    setSelectedApartments((prev) => partiallyFilteredApartments)
  }, [apartmentQuery])

  return (
    <>
      <Dialog open={addModalOpen} >
        <DialogContent onCloseHandler={() => {
          setAddModalOpen(false)
          setRemoveModalOpen(false)
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
            onClick={() => navigator.clipboard.writeText(user._id)}
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
              onClick={() => { setRemoveModalOpen(true) }}>Remove from apartmnet</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>)
}

export default ExtraOptionsAdminDashBoard
