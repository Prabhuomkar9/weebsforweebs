import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React, { FunctionComponent, useEffect, useState } from 'react'
import columns from './columns'
import { User } from '@/types'
import { useSession } from 'next-auth/react'

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "joh@doe.com",
    role: "ADMIN",
    phoneNumber: "+234 123 456 7500",
    apartment: "Apartment 4"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "appleane@doe.comn",
    role: "SECRETARY",
    phoneNumber: "+234 123 456 7890",
    apartment: "Apartment 1"
  }
]

const UsersTab: FunctionComponent<{ asker: "SECRETARY" | "ADMIN" }> = ({ asker }) => {
  const { data: session } = useSession()

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch("http://localhost:3000/api/user", {
      method: 'GET'
    })
      .then((res) => {
        console.log(res)
        res.json()
        setLoading(false)
      })
  }, [])


  const [filteredUsers, setFilteredUsers] = useState<User[]>(users)
  const [userNameQuery, setUserNameQuery] = useState('')

  useEffect(() => {
    let partiallyFilteredUsers: User[] = users;
    partiallyFilteredUsers = partiallyFilteredUsers.filter((user) => {
      return user.name.toLowerCase().includes(userNameQuery.toLowerCase())
    })
    setFilteredUsers((prev) => partiallyFilteredUsers)
    // FIXME: Remember to update dependency array
  }, [userNameQuery])

  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-3'>
      <Sheet >
        <SheetTrigger className='self-end'>
          <Button>
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent className='z-[999999]'>
          <SheetHeader className='gap-3'>
            <SheetTitle className='text-4xl font-bold'>
              Filters
            </SheetTitle>
            <SheetDescription>
              <div className='flex flex-col justify-center items-center gap-2 text-lg font-semibold'>
                <p className='self-start'>User Name</p>
                <Input value={userNameQuery} placeholder='Search by name' onChange={(e) => {
                  setUserNameQuery((prev) => e.target.value)
                }} />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className='w-full'>
        {loading ? <>Hello i am loading</> :
          <DataTable columns={columns} data={filteredUsers} />
        }
      </div>
    </div>
  )
}

export default UsersTab
