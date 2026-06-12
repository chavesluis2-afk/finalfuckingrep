import { motion } from "framer-motion";
import { Camera, Wrench, ArrowUpCircle, PlusCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive security camera solutions for every property type. From ground-up installations to fixing the system you already have.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 border-y border-white/5 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 md:order-1">
              <motion.div variants={fadeIn} className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/5">
                <Camera className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">New Installation</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Full system design and camera placement engineered for maximum coverage. We offer wired and wireless options, NVR/DVR setup, and remote viewing configuration for both residential and commercial properties. Clean installs with no exposed wires.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                  <a href="/free-quote">Get a Quote</a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 md:order-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img src="/images/services-install.png" alt="Camera Installation" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img src="/images/services-repair.png" alt="Camera Repair" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeIn} className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/5">
                <Wrench className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">System Repairs</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Camera not recording? Blurry footage? Wiring issues? DVR/NVR failures or power supply problems? Our technicians provide fast diagnostics and same-week service to get your security system back online.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button asChild size="lg" variant="outline">
                  <a href="/free-quote">Schedule Repair</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-background border border-white/5 p-10 rounded-2xl">
              <ArrowUpCircle className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Upgrades</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Convert your old analog system to IP/HD/4K without completely starting over. We handle NVR upgrades, adding mobile alerts, night vision enhancements, and cloud backup setups.
              </p>
              <Button asChild variant="secondary">
                <a href="/free-quote">Upgrade System</a>
              </Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="bg-background border border-white/5 p-10 rounded-2xl">
              <PlusCircle className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Camera Additions</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Expand your existing systems effortlessly. Add coverage zones, cover new entry points, or monitor expanded parking areas. We integrate new cameras into your current workflow.
              </p>
              <Button asChild variant="secondary">
                <a href="/free-quote">Add Cameras</a>
              </Button>
            </motion.div>
          </div>
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