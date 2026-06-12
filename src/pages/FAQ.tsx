import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How many cameras do I need for my home?",
    a: "It depends on your property size and layout. Generally, we recommend covering all exterior doors, the driveway/garage, and major first-floor windows. A typical suburban home usually requires 4 to 6 cameras for full perimeter coverage."
  },
  {
    q: "Do you work with existing systems or do I need all new equipment?",
    a: "We do both! If your existing cables and cameras are in good condition, we can repair or expand your current setup. If your system is outdated, we can often use your existing wiring to upgrade you to a modern HD or 4K system, saving you money."
  },
  {
    q: "How long does a typical installation take?",
    a: "Most residential installations take 1 to 2 days. Commercial installations depend on the scale of the project, but we work efficiently to minimize disruption to your business operations."
  },
  {
    q: "Will I be able to view cameras on my phone?",
    a: "Absolutely. All new systems we install come with a secure mobile app that allows you to view live footage, watch playbacks, and receive motion alerts from anywhere in the world."
  },
  {
    q: "What brands of cameras do you install?",
    a: "We only install enterprise-grade, non-proprietary equipment from trusted manufacturers. We avoid cheap consumer brands that lock you into cloud subscriptions."
  },
  {
    q: "Do you offer warranties on your work?",
    a: "Yes! We offer a full 1-year warranty on all our labor, plus we honor the manufacturer's warranty on all equipment we supply."
  },
  {
    q: "What areas do you service?",
    a: "We proudly serve the Tri-State area and beyond: New York (NY), New Jersey (NJ), Connecticut (CT), and Pennsylvania (PA)."
  },
  {
    q: "What's the difference between IP and analog cameras?",
    a: "Analog cameras transmit video over coaxial cables to a DVR, usually with lower resolution. IP cameras transmit digital signals over Ethernet (network) cables to an NVR, offering much higher resolution (up to 4K), better frame rates, and advanced AI features."
  },
  {
    q: "Can you add cameras to my existing system?",
    a: "Yes, as long as your current DVR/NVR has available channels and supports the camera type. If it's full, we can help you upgrade the recorder while keeping your existing cameras."
  },
  {
    q: "Do I need a monthly subscription?",
    a: "No! The systems we install record locally to an NVR or DVR. Once you buy the equipment, you own it. There are zero mandatory monthly cloud storage fees."
  },
  {
    q: "What happens if a camera goes offline?",
    a: "First, check your power and internet connection. If the issue persists, give us a call. We offer fast repair services and can diagnose whether it's a cabling issue, power supply failure, or hardware fault."
  },
  {
    q: "How do you run cables without damaging walls?",
    a: "We pride ourselves on clean installations. We fish cables through attics, crawlspaces, and existing conduits whenever possible to ensure wires remain completely hidden."
  },
  {
    q: "Can cameras work in the dark?",
    a: "Yes. Our cameras feature advanced infrared (IR) or 'Starlight' color night vision technology, allowing them to capture clear footage even in total darkness."
  },
  {
    q: "How much does it cost?",
    a: "Every property is unique, which is why we offer free, precise quotes. The cost depends on the number of cameras, the type of equipment, and the complexity of the cable runs. Click the button below to get your free estimate."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about our installations, repairs, and equipment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card/30 border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline transition-colors py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Still have questions?</h3>
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <a href="/free-quote">Get a Free Quote</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />

      <motion.a
        href="tel:5519990088"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-full shadow-xl shadow-primary/30 hover:brightness-110 active:scale-95 transition-all"
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span className="text-sm">551.999.0088</span>
      </motion.a>
    </div>
  );
}