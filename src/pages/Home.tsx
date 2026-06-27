import { motion } from "framer-motion";
import { QuickContactForm } from "@/components/QuickContactForm";
import { Button } from "@/components/ui/button";
import { Shield, Camera, Lock, Eye, Crosshair, Zap, CheckCircle2, MapPin, ChevronRight, Phone, Video, Cpu, Server, Wrench, PlusCircle, ArrowUpCircle } from "lucide-react";
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
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-camera.png" 
            alt="High-tech security camera" 
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              24/7 Professional Monitoring Available
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              Absolute Control <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Over Your Perimeter.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Professional camera security installation, repairs, upgrades, and system additions for homes and businesses. We keep your property protected from day one — and for every day after.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/20" asChild>
                <a href="#contact">Secure Your Property <ChevronRight className="ml-2 w-5 h-5" /></a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium border-white/10 hover:bg-white/5" asChild>
                <a href="#services">View Our Systems</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-16 border-y border-white/5 bg-card/30 relative">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">15+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">Years Experience</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">2.5k</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">Installations</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">Active Support</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-semibold">Coverage Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Everything Your Security System Needs.</motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground">From brand-new installs to fixing what's broken, expanding what you have, or bringing your old system up to date — we handle it all.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-10 h-10 text-primary mb-6" />,
                title: "Installation",
                desc: "Full camera security system design and installation for residential and commercial properties. Clean wiring, optimal camera placement, and zero blind spots."
              },
              {
                icon: <Wrench className="w-10 h-10 text-primary mb-6" />,
                title: "Repairs",
                desc: "Fast diagnosis and repair of cameras, recorders, cabling, and power supplies. Whether it's a single camera or the whole system, we get you back online quickly."
              },
              {
                icon: <ArrowUpCircle className="w-10 h-10 text-primary mb-6" />,
                title: "Upgrades",
                desc: "Swap out outdated analog cameras for HD or 4K IP systems, upgrade your NVR/DVR, or add remote viewing and mobile alerts to an existing setup."
              },
              {
                icon: <PlusCircle className="w-10 h-10 text-primary mb-6" />,
                title: "Additions",
                desc: "Expand your current system with more cameras, additional coverage zones, or new locations — without replacing what's already working."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-card/50 border border-white/5 p-8 rounded-xl hover:bg-card/80 transition-colors group"
              >
                <div className="bg-background rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Tech Info */}
      <section className="py-24 bg-card/20 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/control-room.png" 
                  alt="Security control room" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 aspect-square rounded-xl overflow-hidden border-4 border-background shadow-2xl hidden md:block">
                <img 
                  src="/images/technician.png" 
                  alt="Technician installing camera" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:pl-12"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                Precision Installation. <br/>Zero Compromise.
              </motion.h2>
              <motion.div variants={staggerContainer} className="space-y-8">
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="mt-1"><Crosshair className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Tactical Placement</h4>
                    <p className="text-muted-foreground">We don't just hang cameras. We conduct a full architectural threat assessment to ensure overlapping fields of view with zero blind spots.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="mt-1"><Zap className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Clean Wire Routing</h4>
                    <p className="text-muted-foreground">Exposed wires are vulnerabilities. Our technicians specialize in invisible routing through complex structures for a clean, secure finish.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="mt-1"><Cpu className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Enterprise Hardware</h4>
                    <p className="text-muted-foreground">We deploy commercial-grade sensors featuring starlight night vision, thermal imaging, and AI-driven motion tracking.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Specs */}
      <section id="equipment" className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The Arsenal</h2>
            <p className="text-lg text-muted-foreground">We only deploy hardware that meets our rigorous standards for uptime, clarity, and resilience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "4K Ultra HD Resolution",
              "Color Night Vision",
              "AI Human/Vehicle Detection",
              "Two-Way Audio",
              "Vandal-Proof Housings",
              "Weather Resistance (IP67)",
              "Local NVR Storage (No Cloud Fees)",
              "Encrypted Data Streams"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-muted/20 border border-white/5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">Secured Properties.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-white/10 p-8 rounded-xl relative">
              <Lock className="w-12 h-12 text-white/5 absolute top-6 right-6" />
              <div className="flex gap-1 text-primary mb-6">
                {[1,2,3,4,5].map(star => <StarIcon key={star} />)}
              </div>
              <p className="text-lg italic text-muted-foreground mb-8">"Vanguard found blind spots my previous security company completely missed. The installation was incredibly clean—you can't see a single wire anywhere on the exterior."</p>
              <div>
                <div className="font-bold">Marcus T.</div>
                <div className="text-sm text-muted-foreground">Homeowner, North Hills</div>
              </div>
            </div>
            <div className="bg-background border border-white/10 p-8 rounded-xl relative">
              <Lock className="w-12 h-12 text-white/5 absolute top-6 right-6" />
              <div className="flex gap-1 text-primary mb-6">
                {[1,2,3,4,5].map(star => <StarIcon key={star} />)}
              </div>
              <p className="text-lg italic text-muted-foreground mb-8">"We needed a 16-camera setup for our warehouse. They mapped the whole facility, installed everything in two days, and trained our staff on the NVR system. Total professionals."</p>
              <div>
                <div className="font-bold">Sarah Jenkins</div>
                <div className="text-sm text-muted-foreground">Operations Manager, Apex Logistics</div>
              </div>
            </div>
            <div className="bg-background border border-white/10 p-8 rounded-xl relative">
              <Lock className="w-12 h-12 text-white/5 absolute top-6 right-6" />
              <div className="flex gap-1 text-primary mb-6">
                {[1,2,3,4,5].map(star => <StarIcon key={star} />)}
              </div>
              <p className="text-lg italic text-muted-foreground mb-8">"The peace of mind is worth every penny. The night vision on these cameras is better than my vision during the day. Highly recommend Vanguard to anyone serious about security."</p>
              <div>
                <div className="font-bold">David Chen</div>
                <div className="text-sm text-muted-foreground">Property Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Serving the Tri-State Area & Beyond</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            We install, repair, and upgrade camera security systems across New York, New Jersey, Connecticut, and Pennsylvania. Local expertise, fast response, no long-distance delays.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="px-6 py-3 rounded-full border border-white/10 bg-card text-base">New York (NY)</span>
            <span className="px-6 py-3 rounded-full border border-white/10 bg-card text-base">New Jersey (NJ)</span>
            <span className="px-6 py-3 rounded-full border border-white/10 bg-card text-base">Connecticut (CT)</span>
            <span className="px-6 py-3 rounded-full border border-white/10 bg-card text-base">Pennsylvania (PA)</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-card/40 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              Leave your name and number and we'll call you back — or{" "}
              <a href="/free-quote" className="text-primary font-semibold hover:underline">
                request a detailed free quote
              </a>{" "}
              online.
            </p>
          </div>
          <div className="max-w-md mx-auto bg-background border border-white/10 rounded-2xl p-8 shadow-2xl">
            <QuickContactForm />
            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              Or call us directly: <span className="font-bold text-foreground">551.999.0088</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Floating Call Now button */}
      <motion.a
        href="tel:5519990088"
        data-testid="button-call-now"
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

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}

     
                 
