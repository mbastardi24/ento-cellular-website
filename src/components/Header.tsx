import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTitleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="EntoCellularIcon.ico" 
              alt="Entocellular Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Title */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <Link 
              to="/" 
              onClick={handleTitleClick}
              className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity no-underline"
            >
              <h1 className="m-0">
                <span className="text-primary">Ento</span>
                <span className="text-black">Cellular</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              onClick={(e) => handleSectionClick(e, "about")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="/" 
              onClick={(e) => handleSectionClick(e, "benefits")}
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Benefits
            </a>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="/" 
                onClick={(e) => handleSectionClick(e, "about")}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                About
              </a>
              <a 
                href="/" 
                onClick={(e) => handleSectionClick(e, "benefits")}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Benefits
              </a>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-primary hover:bg-primary-600 text-white w-full">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
