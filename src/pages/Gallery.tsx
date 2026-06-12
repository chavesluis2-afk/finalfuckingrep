import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    type: "Residential",
    title: "4-Camera Residential Install — NJ",
    desc: "Clean exterior brick mounting with zero exposed wiring.",
    image: "/images/gallery-brick.png"
  },
  {
    id: 2,
    type: "Commercial",
    title: "Retail Storefront Coverage — NY",
    desc: "High-visibility deterrent cameras integrated with POS systems.",
    image: "/images/gallery-storefront.png"
  },
  {
    id: 3,
    type: "Commercial",
    title: "Wide-Angle Parking Lot — CT",
    desc: "Pole-mounted PTZ cameras for expansive lot coverage.",
    image: "/images/gallery-parking.png"
  },
  {
    id: 4,
    type: "Commercial",
    title: "Clean IT Infrastructure — PA",
    desc: "Meticulous cable management for a 32-camera NVR setup.",
    image: "/images/gallery-wiring.png"
  },
  {
    id: 5,
    type: "Residential",
    title: "Smart Home Perimeter — NY",
    desc: "Starlight night-vision cameras installed on modern siding.",
    image: "/images/services-install.png"
  },
  {
    id: 6,
    type: "Commercial",
    title: "Warehouse System Upgrade — NJ",
    desc: "Analog to IP conversion utilizing existing conduit.",
    image: "/images/services-repair.png"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.type === filter);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Browse a selection of our recent residential and commercial installations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["All", "Residential", "Commercial"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    filter === tab 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-card border border-white/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="container mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card/40 border border-white/5 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-md">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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