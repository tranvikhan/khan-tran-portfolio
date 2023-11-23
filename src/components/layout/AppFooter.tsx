import { ROUTES } from "@/constants/routes";
import { Container } from "./Container";
import { FooterNavButton } from "@/components/FooterNavButton";

export const AppFooter = () => {
  return (
    <footer className="py-10 md:py-20 bg-black">
      <Container>
        <div className="flex flex-col gap-16 w-full items-center">
          <ul className="flex flex-wrap list-inside list-disc gap-8 text-gray-50">
            <li>
              <FooterNavButton path={ROUTES.PROJECTS}>Projects</FooterNavButton>
            </li>
            <li>
              <FooterNavButton path={ROUTES.ABOUT}>About me</FooterNavButton>
            </li>
            <li>
              <FooterNavButton path={ROUTES.CONTACT}>Contact</FooterNavButton>
            </li>
          </ul>
          <span className="block text-gray-500 dark:text-gray-400">
            &copy; 2023 Khan Tran
          </span>
        </div>
      </Container>
    </footer>
  );
};
