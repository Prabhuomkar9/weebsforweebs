import ApartmentsTab from '@/components/dashboard/admin/apartmentsTab'
import UsersTab from '@/components/dashboard/admin/usersTab'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const AdminDashBoard = () => {
  return (
    <div className='w-full px-5 py-12 min-h-screen flex flex-col justify-start items-center gap-10'>
      <h1 className='text-5xl text-center md:text-6xl font-semibold'>Welcome to Admin Dashboard</h1>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className='w-full'>
          <TabsTrigger className='w-full' value="users">Users</TabsTrigger>
          <TabsTrigger className='w-full' value="apartments">Apartments</TabsTrigger>
        </TabsList>
        <TabsContent className='w-full p-5' value="users">
          <UsersTab asker='ADMIN' />
        </TabsContent>
        <TabsContent className='w-full p-5' value="apartments">
          <ApartmentsTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminDashBoard
