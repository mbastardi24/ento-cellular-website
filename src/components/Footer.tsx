
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img 
                src="/lovable-uploads/bbddc5a9-aeb2-412b-b106-14409b31d725.png" 
                alt="Entocellular Logo" 
                className="h-10 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed">
                Harnessing the power of insect resiliency to create sustainable, 
                cost-effective, and ethical pet food ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-400">
                <p>hello@entocellular.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Innovation Drive<br />BioTech Park, CA 94301</p>
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
