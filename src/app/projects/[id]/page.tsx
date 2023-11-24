"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/data";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return null;
  }
  return (
    <section className="min-h-screen relative pt-2 pb-24">
      <Container>
        <Image
          data-aos="fade-in"
          src={project.thumbnail}
          alt="art cover"
          loading="lazy"
          width="1440"
          height="1024"
          className="w-full object-cover rounded-3xl border border-gray-100 dark:border-gray-900 shadow-2xl shadow-gray-600/10"
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h3
              className="text-5xl font-bold text-black dark:text-white"
              data-aos="fade-up"
            >
              {project.name}
            </h3>
            <p
              className="mt-4 space-x-2 text-xl font-light text-gray-800 dark:text-gray-200"
              data-aos="fade-up"
              data-aos-duration={"1000"}
            >
              {project.overview}
            </p>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-3">
              {project.images.map((image, index) => (
                <div
                  key={image.src}
                  data-aos="fade-up"
                  data-aos-duration={
                    image.className
                      ? "500"
                      : (index + 1) % 3 === 0
                      ? "900"
                      : (index + 1) % 2 === 0
                      ? "700"
                      : "500"
                  }
                  className={image.className}
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? "Project image"}
                    loading="lazy"
                    width="900"
                    height="1600"
                    className={`object-cover rounded-xl border border-gray-100 dark:border-gray-900 shadow-xl shadow-gray-600/5 `}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/4 text-xl font-light  text-gray-800 dark:text-gray-200">
            <h2
              className="text-2xl font-medium text-black dark:text-gray-100 mt-16 mb-2"
              data-aos="fade-left"
            >
              Platforms
            </h2>
            <div className="flex flex-col gap-2" data-aos="fade-left">
              {project.platforms.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <h2
              data-aos="fade-left"
              className="text-2xl font-medium text-black dark:text-gray-100 mt-16 mb-2"
            >
              Key features
            </h2>
            <div data-aos="fade-left" className="flex flex-col gap-2">
              {project.keyFeatures.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <h2
              data-aos="fade-left"
              className="text-2xl font-medium text-black dark:text-gray-100 mt-16 mb-2"
            >
              Technologies Used
            </h2>
            <div data-aos="fade-left" className="flex flex-col gap-2">
              {project.technologies.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <h2
              data-aos="fade-left"
              className="text-2xl font-medium text-black dark:text-gray-100 mt-16 mb-2"
            >
              My responsibility
            </h2>
            <div data-aos="fade-left" className="flex flex-col gap-2">
              {project.roles.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            {project.demo && (
              <>
                <h2
                  data-aos="fade-left"
                  className="text-2xl font-medium text-black dark:text-gray-100 mt-16 mb-2"
                >
                  Visit demo
                </h2>
                <a
                  data-aos="fade-left"
                  className="hover:text-primary"
                  href={project.demo}
                  target="_blank"
                >
                  {project.demo}
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
