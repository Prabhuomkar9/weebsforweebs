
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { User } from "@/types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NextPage } from "next"
import { useSession } from "next-auth/react"
import { Option } from "@/components/ui/multiple-selector"
import { toast } from "sonner"


const formSchema = z.object({
  number: z.number().int().positive({
    message: "Room number must be a positive integer.",
  }),
  type: z.enum(["rental", "forSale"]),
  price: z.number().int().positive({
    message: "Price must be a positive integer.",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters.",
  }),
  bathrooms: z.number().int().positive({
    message: "Bathrooms must be a positive integer.",
  }),
  bedrooms: z.number().int().positive({
    message: "Bedrooms must be a positive integer.",
  }),
  squareFeet: z.number().int().positive({
    message: "Square feet must be a positive integer.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  agent: z.object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    contact: z.string().regex(/^\d{10}$/, {
      message: "Contact must be a valid 10 digit number.",
    }),
  }),
  images: z.string().url({
    message: "Image must be a valid URL.",
  }),

})

const rooms: NextPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { data: session } = useSession()
  const [users, setUsers] = useState<User[] | Option[]>([])


  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // FIXME:Cloudinary upload
    fetch("http://localhost:3000/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data, email: session?.user?.email || "omkar@gmail.com"
      }),
    }).then((res) => {
      let options: Option[] = []
      users.forEach(user => {
        options.push({
          label: user.email,
          value: user.email
        })
      });
      console.log(users)
      setUsers(options)
      toast.success("Form submitted!")
    }).catch((err) => {
      toast.error(err)
    })
  }

  return (
    <>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Room Number</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="roomNumber" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Room Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Room Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="rental">Rental</SelectItem>
                      <SelectItem value="forSale">For Sale</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="price" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Bath Rooms</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="No of Bathrooms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Bed Rooms</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="No of Bedrooms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Location" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="squareFeet"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Square Feet</FormLabel>
                  <FormControl>
                    <Input placeholder="Size in square ft." {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agent.name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Agent Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Agent Name" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agent.contact"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="contact" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input type="file" placeholder="Image" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default rooms
