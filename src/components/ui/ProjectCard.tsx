import Image from "next/image";
import Link from "next/link";

type Project = {
  imageUrl: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
      <div className="h-48 relative">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link
            href={project.githubLink}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </Link>
          <Link
            href={project.liveLink}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
