import { useLocation } from "wouter";
import { Shield, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-tight uppercase hidden sm:block">Progressive Technology Integrations</span>
        </a>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`hover:text-foreground transition-colors ${location === link.href ? "text-primary font-semibold" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-2 text-sm font-semibold">
            <Phone className="w-4 h-4 text-primary" />
            <span>551.999.0088</span>
          </div>
          <Button asChild variant="default" className="font-semibold shadow-lg shadow-primary/20">
            <a href="/free-quote">Get a Free Quote</a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-72 bg-card border-l-white/10">
              <div className="flex flex-col gap-8 mt-12">
                <div className="flex flex-col gap-4 text-lg font-medium">
                  {links.map((link) => (
                    <a 
                      key={link.href} 
                      href={link.href} 
                      className={`hover:text-foreground transition-colors ${location === link.href ? "text-primary font-semibold" : "text-muted-foreground"}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>551.999.0088</span>
                  </div>
                  <Button asChild className="w-full">
                    <a href="/free-quote">Get a Free Quote</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
