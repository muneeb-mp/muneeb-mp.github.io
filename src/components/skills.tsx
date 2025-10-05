import { skills } from "@/assets/data/skills";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-20 bg-background/95 backdrop-blur-sm scroll-m-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with a variety of technologies to bring your ideas to life.
            Here are some of the tools and languages I'm proficient in.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Badge
                variant="secondary"
                className="flex items-center space-x-2 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border/50 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <span className="text-4xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Section */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              className="bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 group"
              asChild
            >
              <a href="#" className="flex items-center space-x-3">
                <Github
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                  size={20}
                />
                <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  View my work on GitHub
                </span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
