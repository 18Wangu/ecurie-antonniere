"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/router'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FormSchema = z.object({
  horseName: z.string().nonempty({
    message: "Horse name is required.",
  }),
  number: z.preprocess((val) => Number(val), z.number().min(1, {
    message: "Veuillez rentrer un prix",
  })),
  message: z.string().optional(),
})

export default function InputForm() {
  const router = useRouter();
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      horseName: "",
      number: 0,
      message: "",
    },
  })

  /*
  const onSubmit = (data) => {
    console.log(data);
    router.push('/offre-envoyer');
  }
    */

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Form {...form}>
        <form /*</Form>onSubmit={form.handleSubmit(onSubmit)}*/ className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="horseName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom du cheval</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="horseName"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Nom du cheval" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tonere">Tonere</SelectItem>
                          <SelectItem value="eclair">Eclair</SelectItem>
                          <SelectItem value="tempete">Tempete</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proposition prix</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Envoyer</Button>
        </form>
      </Form>
    </div>
  )
}
