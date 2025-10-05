import { EMAIL, NAME, URL_GITHUB, URL_LINKEDIN } from "@/lib/constants";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="py-4 px-4 sm:px-6 lg:px-8 border-t border-border/30 relative z-20 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex gap-4 sm:gap-12 md:gap-32 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">{NAME}</p>
          <div className="flex justify-center gap-3">
            {[
              { icon: Github, href: URL_GITHUB },
              { icon: Linkedin, href: URL_LINKEDIN },
              { icon: Mail, href: `mailto:${EMAIL}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
