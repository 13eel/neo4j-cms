"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  ComboBox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  TagInput,
} from "~";

const formSchema = z.object({
  name: z.string(),
  labels: z.array(z.string()),
});

export function NodeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      labels: [],
    },
  });
  const existingTags = ["Character", "Place", "Event", "Item"];

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("🚀 ~ onSubmit ~ values:", values);
  }

  return (
    <>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name..." {...field} />
                </FormControl>
                <FormDescription>This is the name of the node</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="labels"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Labels</FormLabel>
                <FormControl>
                  <TagInput allowCreate options={ExistingTags} {...field} />
                </FormControl>
                <FormDescription>
                  These are the labels of the node
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form> */}
      <ComboBox items={existingTags} onSelect={(e) => console.log(e)} />
    </>
  );
}
