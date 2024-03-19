"use client"

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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"
import { useSession } from "next-auth/react"
import { FunctionComponent, useEffect, useState } from "react"
import { User } from "@/types"



const formSchema = z.object({
  Name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  date: z.date().refine((date) => date > new Date(), {
    message: "Date must be in the future.",
  }),
  location: z.string().min(3, {
    message: "Location must be at least 3 characters.",
  }),
  image: z.string().url({
    message: "Image must be a valid URL.",
  }),
})

const CreateEvent: FunctionComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { data: session } = useSession()
  const [value, setValue] = useState<Option[]>([]);
  const [users, setUsers] = useState<User[] | Option[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/api/user", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        res.json().then((data) => {
          setUsers(data.users.map((user: User) => {
            return { label: user.email, value: user.email }
          }
          ))
        })
      })
      .catch((err) => {
        console.log(err)
      }
      )
  }, [])


  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // FIXME:Cloudinary upload
    fetch("http://localhost:3000/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data, email: session?.user?.email || "john@example.com"
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
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-6">
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} className="text-black" />
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
            name="date"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col">
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal text-black",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(e) => {
                          if (!e) return;
                          form.setValue("date", e)
                          form.trigger("date")
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
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
            name="image"
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
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <MultipleSelector
                value={value}
                onChange={setValue}
                defaultOptions={[
                  { label: "john_doe", value: "john_doe" },
                  { label: "Sayeem", value: "Sayeem" },
                  { label: "Dhanush", value: "Dhanush" }
                ]}
                placeholder="Select users to be invited..."
                emptyIndicator={
                  <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                    no results found.
                  </p>
                }
              />
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>

  )
}

export default CreateEvent
