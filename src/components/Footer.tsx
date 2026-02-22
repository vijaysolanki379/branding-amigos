import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-extrabold mb-4">
            <span className="text-gradient">Branding</span>{" "}
            <span className="text-foreground">Amigos</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            AI-powered digital marketing agency helping brands grow with data-driven strategies and creative excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Services", "Process", "Results", "Testimonials"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            {["SEO Optimization", "Social Media", "Google Ads", "Meta Ads", "WhatsApp Marketing", "Local SEO"].map((s) => (
              <li key={s}>
                <span className="text-sm text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-foreground mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" /> hello@brandingamigos.com
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Mumbai, India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 mt-12 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Branding Amigos. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
