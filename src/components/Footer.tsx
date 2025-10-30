import { Sun, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 text-ink-700">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-foreground">SolarBright Marketing</span>
            </div>
            <p className="text-sm text-ink-700/70">
              Empowering solar companies with cutting-edge digital marketing strategies.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">SEO & Local Search</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">PPC Advertising</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Content Marketing</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Social Media</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-brand-600" />
                <span>hello@solarbright.marketing</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-brand-600" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-brand-600" />
                <span>123 Solar Street<br />San Diego, CA 92101</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-ink-700/70">
          <p>&copy; 2025 SolarBright Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
