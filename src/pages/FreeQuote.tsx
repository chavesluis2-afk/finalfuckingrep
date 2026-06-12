import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
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
import { Shield, ArrowLeft, CheckCircle2, Camera, Home, Building2, Wrench, ArrowUpCircle, PlusCircle, Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  propertyType: z.string({ required_error: "Please select a property type." }),
  service: z.string({ required_error: "Please select a service." }),
  cameraCount: z.string().optional(),
  address: z.string().min(5, { message: "Please enter a property address." }),
  details: z.string().optional(),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  { value: "New Installation", label: "New Installation", icon: <Camera className="w-5 h-5" /> },
  { value: "Repair", label: "Repair", icon: <Wrench className="w-5 h-5" /> },
  { value: "Upgrade", label: "Upgrade", icon: <ArrowUpCircle className="w-5 h-5" /> },
  { value: "Camera Addition", label: "Camera Addition", icon: <PlusCircle className="w-5 h-5" /> },
];

export default function FreeQuote() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      service: "",
      cameraCount: "",
      address: "",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Server error");
      toast({
        title: "Quote request sent",
        description: "We'll review your details and reach out within 24 hours with a free estimate.",
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

  const selectedService = form.watch("service");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Camera className="w-4 h-4" />
              100% Free — No Obligation
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Get Your Free Quote</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fill out the form below and we'll put together a precise estimate for your property — no guesswork, no surprises.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="grid grid-cols-3 gap-4 mb-12">
            {["Free on-site assessment", "Response within 24 hours", "No hidden fees"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-card/50 border border-white/5 rounded-xl p-4 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-8">
            <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-widest">What do you need?</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {services.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  data-testid={`button-service-${s.value}`}
                  onClick={() => form.setValue("service", s.value, { shouldValidate: true })}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-medium transition-all ${
                    selectedService === s.value
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-card/50 border-white/5 text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                >
                  {s.icon}
                  {s.label}
                </button>
              ))}
            </div>
            {form.formState.errors.service && (
              <p className="text-sm text-destructive mt-2">{form.formState.errors.service.message}</p>
            )}
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-card/40 border border-white/5 rounded-2xl p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="propertyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Property Type</FormLabel>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: "Residential", label: "Residential", icon: <Home className="w-4 h-4" /> },
                          { value: "Commercial", label: "Commercial / Business", icon: <Building2 className="w-4 h-4" /> },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            data-testid={`button-property-${opt.value}`}
                            onClick={() => form.setValue("propertyType", opt.value, { shouldValidate: true })}
                            className={`flex items-center gap-3 p-4 rounded-xl border text-sm font-medium transition-all ${
                              field.value === opt.value
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background border-white/10 text-muted-foreground hover:text-foreground hover:bg-card"
                            }`}
                          >
                            {opt.icon}
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Full Name</FormLabel>
                        <FormControl>
                          <Input data-testid="input-quote-name" placeholder="John Smith" {...field} className="bg-background border-white/10 h-12 focus-visible:ring-primary" />
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
                          <Input data-testid="input-quote-phone" placeholder="(555) 123-4567" {...field} className="bg-background border-white/10 h-12 focus-visible:ring-primary" />
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
                        <Input data-testid="input-quote-email" placeholder="you@example.com" {...field} className="bg-background border-white/10 h-12 focus-visible:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-2">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Property Address</FormLabel>
                          <FormControl>
                            <Input data-testid="input-quote-address" placeholder="123 Main St, City, State" {...field} className="bg-background border-white/10 h-12 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="cameraCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Cameras Needed</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-camera-count" className="bg-background border-white/10 h-12 focus-visible:ring-primary">
                              <SelectValue placeholder="How many?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/10">
                            <SelectItem value="1-2">1 – 2</SelectItem>
                            <SelectItem value="3-4">3 – 4</SelectItem>
                            <SelectItem value="5-8">5 – 8</SelectItem>
                            <SelectItem value="9-16">9 – 16</SelectItem>
                            <SelectItem value="16+">16+</SelectItem>
                            <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">
                        Anything else we should know?{" "}
                        <span className="text-muted-foreground font-normal">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          data-testid="textarea-quote-details"
                          placeholder="Describe your property, existing system, specific concerns, or anything that would help us give you an accurate quote..."
                          className="min-h-[100px] bg-background border-white/10 focus-visible:ring-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  data-testid="button-submit-quote"
                  type="submit"
                  className="w-full h-14 text-lg font-semibold shadow-lg shadow-primary/20"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  {loading ? "Sending..." : "Send My Free Quote Request"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. Your information is never shared or sold.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
