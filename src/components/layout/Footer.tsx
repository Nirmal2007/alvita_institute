import { MapPin, Phone, Mail } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">
              Alvita <span className="text-accent-green">Institute</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading consultancy and training institute specializing in aviation, marine, railway, logistics, and hospitality sectors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Training Programs</a></li>
              <li><a href="#placement" className="text-gray-400 hover:text-white transition-colors">Placement Record</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Airport Management</span></li>
              <li><span className="text-gray-400">Cabin Crew Training</span></li>
              <li><span className="text-gray-400">Marine Services</span></li>
              <li><span className="text-gray-400">Railway Operations</span></li>
              <li><span className="text-gray-400">Logistics & Supply Chain</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent-green shrink-0 mt-1" size={20} />
                <span className="text-gray-400">8/198 , 2 ND FLOOR ,
                  VASU ARCADE ,
                  RAJA ANNAMALAI ROAD
                  SAI BABA COLONY
                  OPP TO CITY UNION BANK
                  COIMBATORE - 641011
                  TAMIL NADU, INDIA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent-green shrink-0" size={20} />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent-green shrink-0" size={20} />
                <span className="text-gray-400">info@alvitainstitute.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alvita International Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
