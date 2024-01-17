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
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { toast } from "@/components/ui/use-toast";

interface ComingWithFormProps {
  initialData: User;
}

const ComingWithSchema = z.object({
  numberOfPeople: z.coerce.number().min(0),
});

const ComingWithForm = ({ initialData }: ComingWithFormProps) => {
  const form = useForm<z.infer<typeof ComingWithSchema>>({
    resolver: zodResolver(ComingWithSchema),
    defaultValues: {
      numberOfPeople: initialData?.comingwith || 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof ComingWithSchema>) => {
    try {
      const numberOfPeople = Number(data.numberOfPeople);
      console.log(numberOfPeople);

      // Handle the submission for the "Coming With" form separately
      const response = await fetch("/api/comingwith", {
        method: "PATCH",
        body: JSON.stringify(numberOfPeople),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Coming With Form Submitted",
          description: `Number of people: ${numberOfPeople}`,
        });
      }
    } catch (error) {
      console.error("Error submitting Coming With form:", error);
      toast({
        title: "Submission failed",
        description:
          "There was an error submitting your Coming With form. Please try again.",
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormDescription>
          How many people are you coming with ( kids especially)? Others are
          encouraged to log in on their own
        </FormDescription>
        <FormField
          control={form.control}
          name="numberOfPeople"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of People Coming With You</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button className="sm: w-full" type="submit">
          {!initialData.comingwith ? "Add" : "Update"}
        </Button>
      </form>
    </Form>
  );
};

export default ComingWithForm;
