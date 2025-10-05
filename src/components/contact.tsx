import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { TypingText } from "./typing-text";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      text: "muneeb.phansopkar@gmail.com",
      href: "mailto:muneeb.phansopkar@gmail.com",
    },
    {
      icon: Github,
      text: "github.com/muneeb-mp",
      href: "https://github.com/muneeb-mp",
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/muneeb-phansopkar",
      href: "https://linkedin.com/in/muneeb-phansopkar-395b2b99",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-20 bg-gradient-to-br from-secondary/20 to-primary/5 backdrop-blur-sm scroll-mt-[68px]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --- LEFT: Title & Description --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always open to discussing new opportunities and interesting
            projects. Let’s connect and create something amazing together!
          </p>
        </motion.div>

        {/* --- RIGHT: Contact Info Card --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/100 backdrop-blur-sm border-border/30">
            <CardContent className="space-y-4">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="overflow-hidden"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-auto p-4 bg-gray-100 backdrop-blur-sm border border-border/30 hover:bg-gray-200 group"
                    asChild
                  >
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <contact.icon
                        className="text-primary group-hover:scale-110 transition-transform"
                        size={20}
                      />
                      <span className="group-hover:text-primary transition-colors">
                        <TypingText text={contact.text} delay={index * 400} />
                      </span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
