import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experiences } from "@/assets/data/experience";

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/20 to-primary/5 backdrop-blur-sm scroll-m-8"
    >
      <div className="max-w-5xl mx-auto overflow-hidden md:flex md:gap-4 md:justify-between">
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Experience
          </h2>

          {/* Pointer List */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-3">
            I am a MERN stack developer with expertise in:
          </p>
          <div className="flex flex-col gap-2 mb-16 md:mb-0">
            {[
              "Full-stack apps with React, Node.js, Express.js",
              "Serverless solutions with AWS Lambdas",
              "Responsive UI/UX design",
              "SEO optimization for search engines",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2 px-2">
                <span className="text-primary">★</span>
                <p className="text-accent-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative ml-3 sm:ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative pl-8 sm:pl-10 pb-8 ${
                index === experiences.length - 1 ? "pb-0" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Vertical Line */}
              {index !== experiences.length - 1 && (
                <span className="absolute left-[6px] top-6 bottom-0 w-[2px] bg-border/80" />
              )}

              {/* Timeline Dot */}
              <span className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background" />

              <div className="relative rounded-lg">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-primary">
                  <Briefcase size={16} />
                  <span>{exp.skills}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
