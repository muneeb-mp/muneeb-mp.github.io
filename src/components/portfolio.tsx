import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { projects } from "@/assets/data/projects";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/image-with-fallback";
import { URL_GITHUB } from "@/lib/constants";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-12 px-4 sm:px-6 lg:px-8 relative z-20 bg-background/95 backdrop-blur-sm scroll-m-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden h-full bg-card/90 backdrop-blur-sm border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 py-0 gap-0">
                <div className="relative">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />

                    {/* Quick Action Buttons - Overlay */}
                    <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                            asChild
                          >
                            <a href={project.github}>
                              <Github size={14} />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.live && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                            asChild
                          >
                            <a href={project.live}>
                              <ExternalLink size={14} />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-primary-foreground transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 flex flex-col justify-between gap-2 h-full">
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs px-2 py-0.5 text-muted-foreground border-border/50"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-primary/5 group"
              asChild
            >
              <a
                href={URL_GITHUB}
                target="_blank"
                className="flex items-center space-x-3"
              >
                <Github
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                  size={20}
                />
                <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  View All Projects
                </span>
                <ExternalLink
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                  size={16}
                />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
