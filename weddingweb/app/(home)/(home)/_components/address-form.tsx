"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Address, User } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import ComingWithForm from "./coming-with";

interface AddressFormProps {
  initialData: { address?: Address | null | undefined } & User;
}

const FormSchema = z.object({
  streetAddress: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
});

const AddressForm = ({ initialData }: AddressFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      streetAddress: initialData?.address?.street_address || "",
      city: initialData?.address?.city || "",
      state: initialData?.address?.state || "",
      zipCode: initialData?.address?.zipcode || "",
    },
  });

  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const addressValue = data;

      const response = await fetch("/api/address", {
        method: "PATCH",
        body: JSON.stringify(addressValue),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.refresh();
      if (response.ok) {
        toast({
          title: "Address Updated",
          description: "Be sure to check out our registry!",
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
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormDescription className=" text-red-500">
          Note: Fill the address form only if you <strong>need</strong> a
          physical invite
        </FormDescription>
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* State */}
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Zip Code */}
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button className="sm: w-full" type="submit">
          {!initialData.address
            ? "Add Address Details"
            : " Update Address Details"}
        </Button>
      </form>
    </Form>
  );
};

export default AddressForm;
