import { Mail, Phone } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", values);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="bg-sections-testimonials text-white py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-8">
            <GlassCard className="text-center">
              <div className="flex flex-col items-center gap-4">
                <Mail className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-bold">Email</h3>
                <a 
                  href="mailto:afzalishaq52@gmail.com"
                  className="text-accent hover:underline"
                >
                  afzalishaq52@gmail.com
                </a>
              </div>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="flex flex-col items-center gap-4">
                <Phone className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-bold">Phone</h3>
                <a 
                  href="tel:+923114282526"
                  className="text-accent hover:underline"
                >
                  +92 311 4282526
                </a>
              </div>
            </GlassCard>
          </div>
          
          <GlassCard>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
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
                        <Textarea 
                          placeholder="How can I help you?"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </Form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};