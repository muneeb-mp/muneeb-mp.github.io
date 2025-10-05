import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Team Lead - Front End Development",
    duration: "Dec 2021 – Present · 3 yrs 11 mos",
    skills: "MERN Stack, Next.js and +8 skills",
  },
  {
    role: "Full-stack Developer",
    duration: "Oct 2019 – Dec 2021 · 2 yrs 3 mos",
    skills: "React.js, Node.js and +6 skills",
  },
  {
    role: "Intern - Frontend Developer",
    duration: "Apr 2019 – Oct 2019 · 7 mos",
    skills: "HTML, CSS, JavaScript, React",
  },
];

const ExperienceTimeline = () => {
  return (
    <section
      id="experience"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/20 to-primary/5 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto overflow-hidden">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

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

              <div className="relative bg-card/30 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-border/30 hover:bg-card/60 transition-colors">
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
