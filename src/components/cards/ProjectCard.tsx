import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { ExternalLink } from "react-feather";

export interface ProjectCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  aosDuration?: string;
}
export const ProjectCard = ({
  id,
  imageUrl,
  title,
  description,
  aosDuration = "500",
}: ProjectCardProps) => {
  return (
    <div
      data-aos-duration={aosDuration}
      data-aos="fade-up"
      className="group p-4 sm:p-6 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt="art cover"
          loading="lazy"
          width="1440"
          height="1024"
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 relative">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
        <a
          className="flex flex-row gap-2 items-center text-primary hover:opacity-80"
          href={ROUTES.PROJECT_DETAILS + id}
        >
          <span>Read more</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};
