"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  addItem: z.string().min(2).max(50),
});

import React from "react";
import { Plus } from "lucide-react";

const AddItemForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addItem: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 relative"
      >
        <FormField
          control={form.control}
          name="addItem"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Add Item"
                  className="bg-[#ecf1f5] rounded-full px-7 py-8 text-gray-800"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="absolute right-5 top-4 rounded-full bg-[#3c79b1]"
        >
          <Plus />
        </Button>
      </form>
    </Form>
  );
};

export default AddItemForm;
