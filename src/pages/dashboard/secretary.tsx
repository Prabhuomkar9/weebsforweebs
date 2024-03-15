import MaintainanceTab from '@/components/dashboard/admin/maintainnanceTab'
import UsersTab from '@/components/dashboard/admin/usersTab'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const SecretaryDashBoard = () => {
  return (
    <div className='w-full p-3 min-h-screen flex flex-col justify-start items-center'>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className='w-full'>
          <TabsTrigger className='w-full' value="users">Users</TabsTrigger>
          <TabsTrigger className='w-full' value="apartments">Maintainance</TabsTrigger>
        </TabsList>
        <TabsContent className='w-full' value="users">
          <UsersTab asker="SECRETARY" />
        </TabsContent>
        <TabsContent className='w-full' value="apartments">
          <MaintainanceTab apartmentId={"12345"} />
        </TabsContent>
      </Tabs>
    </div >
  )
}

export default SecretaryDashBoard
