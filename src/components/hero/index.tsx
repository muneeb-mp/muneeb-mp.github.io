import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { NAME, TITLE } from "@/lib/constants";

interface Props {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: Props) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-20 bg-gradient-to-br from-background via-background to-secondary/20"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mx-auto">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="text-purple-700">{NAME}</span>
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {TITLE}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            I craft beautiful, functional, and user-centered digital
            experiences. With a passion for both front-end aesthetics and
            back-end functionality, I bring ideas to life through code.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Zap size={16} className="mr-2" />
                View My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="group"
            >
              <motion.span className="flex items-center" whileHover={{ x: 5 }}>
                Get In Touch
                <ExternalLink size={16} className="ml-2" />
              </motion.span>
            </Button>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown
            size={32}
            className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("skills")}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
