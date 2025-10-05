import { Code2, Menu } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { NAME, TITLE } from "@/lib/constants";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  activeSection,
  setActiveSection,
}: Props) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center py-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-xl font-medium flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="text-primary" size={24} />
            <span>Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "hero" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  scrollToSection(item.id);
                }}
                className={`relative hover:text-primary transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon">
                    <Menu size={20} />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu for the portfolio website
                </SheetDescription>
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="px-4">
                    <h3 className="font-semibold">{NAME}</h3>
                    <p className="text-sm text-muted-foreground">{TITLE}</p>
                  </div>
                  <Separator />
                  <nav className="flex flex-col space-y-4">
                    {[
                      { name: "Home", id: "hero" },
                      { name: "Skills", id: "skills" },
                      { name: "Experience", id: "experience" },
                      { name: "Portfolio", id: "portfolio" },
                      { name: "Contact", id: "contact" },
                    ].map((item) => (
                      <motion.div key={item.id} whileHover={{ x: 5 }}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => scrollToSection(item.id)}
                        >
                          {item.name}
                        </Button>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
