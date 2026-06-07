import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-0 bg-card/80 shadow-sm transition-all hover:shadow-md">
      <Link href={`/projects/${project.id}`} className="group">
        {project.images.length > 0 && (
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            {project.images[0] && (
              <Image
                src={project.images[0]}
                alt={project.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
              />
            )}
          </div>
        )}
        <CardHeader className="px-5 pt-4 pb-3">
          <CardTitle className="text-lg font-semibold tracking-tight">{project.title}</CardTitle>
          <CardDescription className="mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 px-5 pb-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
      <div className="px-5 pb-5">
        <Button asChild variant="default">
          <Link href={`/projects/${project.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
