import { Link } from "react-router-dom";
import { Mail, Phone} from "lucide-react";
import { CONTACT_INFO } from "@/config/constants";
import {LOGOS} from "@/config/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img 
                  src={LOGOS.logo}
                  alt="Entocellular Logo" 
                  className="h-22 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Harnessing the power of insect resiliency to create sustainable, 
                cost-effective, and ethical pet food ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {/* <li>
                  <Link
                    to = "/benefits"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    Benefits
                  </Link>
                </li> */}
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Information</h4>
              <div className="space-y-4 text-gray-400">
                <a 
                  href={CONTACT_INFO.emailLink} 
                  className="flex items-center hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <a 
                  href={CONTACT_INFO.phoneLink} 
                  className="flex items-center hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Entocellular. All rights reserved. | 
              <span className="text-primary-400"> Pioneering sustainable pet nutrition.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
