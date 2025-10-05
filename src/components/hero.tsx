import { ExternalLink, Github, Linkedin, Mail, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { EMAIL, NAME, TITLE, URL_GITHUB, URL_LINKEDIN } from "@/lib/constants";
import { TypingText } from "./typing-text";

interface Props {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: Props) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center flex-col-reverse md:flex-row justify-center gap-4 px-4 sm:px-6 lg:px-8 relative z-20 bg-gradient-to-br from-background via-background to-secondary/20 pt-20 pb-8 md:mt-0"
    >
      <div>
        <div className="text-center md:text-start mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="text-fuchsia-700">
              <TypingText text={NAME} delay={500} speed={100} />
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-3xl lg:text-4xl text-muted-foreground mb-4 md:mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TypingText text={TITLE} delay={500} speed={100} />
          </motion.h2>
          <motion.p
            className="text-sm sm:text-xl text-muted-foreground mb-6 md:mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            I craft beautiful, functional, and user-centered digital
            experiences. With a passion for both front-end aesthetics and
            back-end functionality, I bring ideas to life through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center md:hidden mb-8 md:mb-0"
          >
            <img
              src="/svg/hero.svg"
              alt="Hero Image"
              className="w-64 sm:w-80 md:w-96 h-auto"
            />
          </motion.div>

          <motion.div
            className="flex md:flex-row gap-2 md:gap-6 justify-center md:justify-start mb-6 md:mb-12"
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
            className="flex justify-center md:justify-start space-x-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {[
              { icon: Github, href: URL_GITHUB, label: "GitHub" },
              { icon: Linkedin, href: URL_LINKEDIN, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors p-1 md:p-3 rounded-full hover:bg-primary/10"
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
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown
            size={32}
            className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection("skills")}
          />
        </motion.div> */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="hidden md:block"
      >
        <img src="/svg/hero.svg" alt="Hero Image" className="w-96 h-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
