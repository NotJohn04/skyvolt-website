// components/Footer.tsx
import { Sun, Mail, Phone, MapPin } from "lucide-react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import logo from "./images/logo.png";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-transparent pt-16 pb-8 text-white">
      {/* background */}
      <div className="absolute inset-0 -z-30 opacity-[0.28]">
        {/* <BackgroundGradientAnimation fill="parent" size="68%" blendingValue="screen" /> */}
      </div>
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.1]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-28 2xl:px-40">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Skyvolt Solar" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
              </div>
              <span className="font-bernier tracking-[.06em] text-[18px] md:text-[22px] text-[#ff6a00] pl-1">Skyvolt Solar</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Facebook Advertising</a></li>
              {/* <li><a href="#" className="hover:text-brand-400 transition-colors">PPC Advertising</a></li> */}
              <li><a href="#" className="hover:text-brand-400 transition-colors">Automation & CRM</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">AI Chatbot</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#results" className="hover:text-brand-400 transition-colors">Case Studies</a></li>
              {/* <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li> */}
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-brand-400" />
                <span>skyvoltsolar@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-brand-400" />
                <span>+60 18-291 5479</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-brand-400" />
                <span>Cheras, Kuala Lumpur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Skyvolt Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
