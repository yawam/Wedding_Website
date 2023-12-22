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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface FeedbackFormProps {}

const FormSchema = z.object({
  feedback: z
    .string()
    .min(10, {
      message: "Feedback must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

const FeedbackForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const feedback = data;
      console.log(feedback);

      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.refresh();
      if (response.ok) {
        form.setValue("feedback", "");
        toast({
          title: "Thanks for your feedback",
          description: "Be sure to check out our registry!",
        });
      } else {
        throw new Error("Feedback submission failed");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Submission failed",
        description:
          "There was an error submitting your feedback. Please try again.",
      });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-w-[600px] w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FeedBack</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What's on your mind ..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FeedbackForm;
