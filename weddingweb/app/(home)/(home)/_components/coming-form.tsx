"use client";

// Import necessary dependencies and components
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Address, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import AddressForm from "./address-form";

interface ComingFormProps {
  initialData: User & { address: Address };
}
// Define the Zod schema for the form
const FormSchema = z.object({
  attendance: z.boolean().default(false),
});

// Define the ComingForm component
export function ComingForm({ initialData }: ComingFormProps) {
  // Use react-hook-form to manage the form state
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      attendance: initialData.isAttending || false,
    },
  });

  const router = useRouter();

  // Handle form submission
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const attendanceValue = data.attendance;
      console.log(attendanceValue);

      const response = await fetch("/api/attendance", {
        method: "PATCH",
        body: JSON.stringify(attendanceValue),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.refresh();
      if (response.ok) {
        toast({
          title: "Attendance Status Updated",
          description: "Thank you for your response",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description:
          "There was an error submitting your form. Please try again.",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 flex flex-col justify-items items-center"
        >
          <FormField
            control={form.control}
            name="attendance" // Change the field name to 'attendance'
            render={({ field }) => (
              <FormItem className="space-y-3 ">
                <FormControl>
                  <div className="flex flex-row space-x-6">
                    <span>No</span>
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                        form.handleSubmit(onSubmit)();
                      }}
                    />
                    <span>Yes</span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Dialog>
        <DialogTrigger asChild className=" cursor-pointer">
          {initialData?.isAttending &&
            (!initialData?.address ? (
              <Button className="my-4" variant="ghost">
                Add Address info
              </Button>
            ) : (
              <Button className="my-4" variant="ghost">
                Update Address Info
              </Button>
            ))}
        </DialogTrigger>
        <DialogContent>
          <AddressForm initialData={initialData} />
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
