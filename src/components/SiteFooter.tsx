import { Shield, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-background text-sm text-muted-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-bold text-lg tracking-tight text-foreground uppercase">PTI</span>
            </div>
            <p className="mb-6 leading-relaxed">
              Professional camera security installation, repairs, and upgrades. Protecting homes and businesses with uncompromising quality.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Services</h3>
            <ul className="space-y-4">
              <li><a href="/services" className="hover:text-primary transition-colors">New Installation</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">System Repairs</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Equipment Upgrades</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Camera Additions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/free-quote" className="hover:text-primary transition-colors">Get a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-xs">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">551.999.0088</span>
              </li>
              <li>Serving New York (NY)</li>
              <li>Serving New Jersey (NJ)</li>
              <li>Serving Connecticut (CT)</li>
              <li>Serving Pennsylvania (PA)</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Progressive Technology Integrations. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
