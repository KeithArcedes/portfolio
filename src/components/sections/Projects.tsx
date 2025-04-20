import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with cart functionality and payment integration.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    imageUrl: "/images/moon art.png",
    githubLink: "#",
    liveLink: "#",
  },
  // Add more projects...
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
