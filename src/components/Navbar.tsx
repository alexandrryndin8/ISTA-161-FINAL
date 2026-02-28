import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center items-center h-14 sm:h-16 md:h-20">
          <div className="relative">
            <span className="hidden md:flex items-center space-x-6 font-medium lg:space-x-8">
              <a
                href="#week1"
                className="text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 1
              </a>
              <a
                href="#week2"
                className="text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 2
              </a>
              <a
                href="#week3"
                className="text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 3
              </a>
              <a
                href="#week4"
                className="text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 4
              </a>
              <a
                href="#week5"
                className="text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 5
              </a>
              <a
                href="#week6"
                className="text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 6
              </a>
            </span>

            <button
              className="md:hidden p-2 text-gray-300 hover:text-white flex justify-center items-center relative z-50"
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              {mobileMenuIsOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuIsOpen && (
          <div className="absolute top-full left-0 w-full md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <a
                href="#week1"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 1
              </a>
              <a
                href="#week2"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 2
              </a>
              <a
                href="#week3"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 3
              </a>
              <a
                href="#week4"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 4
              </a>
              <a
                href="#week5"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 5
              </a>
              <a
                href="#week6"
                onClick={() => setMobileMenuIsOpen(false)}
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
              >
                Week 6
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}