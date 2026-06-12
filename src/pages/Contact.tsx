import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { motion as m } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().optional(),
  message: z.string().min(5, { message: "Please enter a message." }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          service: values.service || "General Inquiry",
          email: values.email,
          message: values.message,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      toast({
        title: "Message received",
        description: "We'll get back to you within a few hours.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please call us directly at 551.999.0088.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have a question or ready to get started? Reach out and we'll respond promptly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left — contact info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {[
                {
                  icon: <Phone className="w-5 h-5 text-primary" />,
                  label: "Phone",
                  value: "551.999.0088",
                  sub: "Call or text anytime",
                  href: "tel:5519990088",
                },
                {
                  icon: <Mail className="w-5 h-5 text-primary" />,
                  label: "Email",
                  value: "chavesluis2@gmail.com",
                  sub: "We respond within 24 hours",
                  href: "mailto:chavesluis2@gmail.com",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-primary" />,
                  label: "Service Area",
                  value: "NY · NJ · CT · PA",
                  sub: "Local expert, no travel delays",
                  href: null,
                },
                {
                  icon: <Clock className="w-5 h-5 text-primary" />,
                  label: "Hours",
                  value: "Mon – Sat, 8am – 7pm",
                  sub: "Emergency service available",
                  href: null,
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 bg-card/40 border border-white/5 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-bold text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <div className="font-bold text-foreground">{item.value}</div>
                    )}
                    <div className="text-sm text-muted-foreground mt-0.5">{item.sub}</div>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Need a price estimate?</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  For a detailed free quote with pricing, use our dedicated estimate form.
                </p>
                <a
                  href="/free-quote"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Get a Free Estimate →
                </a>
              </motion.div>
            </motion.div>

            {/* Right — contact form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-3 bg-card/40 border border-white/5 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              data-testid="input-contact-name"
                              placeholder="John Smith"
                              {...field}
                              className="bg-background border-white/10 h-12 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              data-testid="input-contact-phone"
                              placeholder="(555) 123-4567"
                              {...field}
                              className="bg-background border-white/10 h-12 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            data-testid="input-contact-email"
                            placeholder="you@example.com"
                            {...field}
                            className="bg-background border-white/10 h-12 focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">What can we help with? <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger
                              data-testid="select-contact-service"
                              className="bg-background border-white/10 h-12 focus-visible:ring-primary"
                            >
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10">
                            <SelectItem value="New Installation">New Installation</SelectItem>
                            <SelectItem value="Repair">Repair</SelectItem>
                            <SelectItem value="Upgrade">Upgrade</SelectItem>
                            <SelectItem value="Camera Addition">Camera Addition</SelectItem>
                            <SelectItem value="General Question">General Question</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            data-testid="textarea-contact-message"
                            placeholder="Tell us what you need or ask us anything..."
                            className="min-h-[120px] bg-background border-white/10 focus-visible:ring-primary resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    data-testid="button-submit-contact-page"
                    type="submit"
                    className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating call button */}
      <m.a
        href="tel:5519990088"
        data-testid="button-call-now"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-full shadow-xl shadow-primary/30 hover:brightness-110 active:scale-95 transition-all"
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span className="text-sm">551.999.0088</span>
      </m.a>

      <SiteFooter />
    </div>
  );
}
