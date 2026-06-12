import { motion } from "framer-motion";
import { Shield, Clock, ShieldCheck, Zap, CheckCircle2, Phone } from "lucide-react";
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

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Who We <span className="text-primary">Are</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              Your trusted local security experts, dedicated to bringing professional-grade protection to everyday homes and businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 border-y border-white/5 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img src="/images/about-technician.png" alt="Security Technician" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">Built on Trust and Technical Excellence</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Progressive Technology Integrations was founded with a single mission: to provide uncompromising security solutions without the massive overhead of national corporate brands. 
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-10 leading-relaxed">
                With years of hands-on experience in complex technical environments, our team treats every property like our own. We don't just sell equipment; we design perimeters.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <motion.div variants={fadeIn} className="flex gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Reliability</h4>
                    <p className="text-sm text-muted-foreground">Systems that work when you need them most.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Speed</h4>
                    <p className="text-sm text-muted-foreground">Fast dispatch, quick installs, rapid repairs.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex gap-3">
                  <Shield className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Expertise</h4>
                    <p className="text-sm text-muted-foreground">Deep knowledge of IP and analog architecture.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex gap-3">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Transparency</h4>
                    <p className="text-sm text-muted-foreground">Clear pricing, no hidden fees, honest advice.</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                  <a href="/free-quote">Work With Us</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why Choose PTI?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Fully Licensed & Insured",
              "Meticulously Clean Installations",
              "We Actually Answer the Phone",
              "No Subcontractors Ever",
              "Satisfaction 100% Guaranteed",
              "Enterprise-Grade Hardware"
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-card/50 border border-white/5 rounded-xl hover:bg-card transition-colors">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-semibold text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-primary/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">Installations</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">8+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">Years Exp.</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">4</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">States Served</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">4.9★</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">Average Rating</div>
            </div>
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