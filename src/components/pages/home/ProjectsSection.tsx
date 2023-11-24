import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/data";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <Container>
        <SectionTitle
          title="My Projects"
          subTitle="Below are some projects I have worked on, taking on the roles of
            both a product designer and a developer."
        />
        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {Object.values(projects).map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              imageUrl={project.thumbnail}
              title={project.name}
              description={project.overview}
              aosDuration={
                (index + 1) % 3 === 0
                  ? "900"
                  : (index + 1) % 2 === 0
                  ? "700"
                  : "500"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
