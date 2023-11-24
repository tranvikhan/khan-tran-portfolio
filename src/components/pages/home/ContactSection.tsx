import { SectionTitle } from "@/components/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Mail, Map, Phone } from "react-feather";
export const ContactSection = () => {
  return (
    <section id="contact" data-aos="fade-up">
      <Container>
        <SectionTitle
          title="Contact"
          subTitle="Thank you for exploring my work! I'm excited to connect with you. Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out."
        />
        <div
          data-aos="fade-up"
          className="mt-16 flex flex-col gap-4 text-gray-900 dark:text-gray-50"
        >
          <div className="flex flex-row items-center gap-4">
            <Mail />
            <a href="mailto:khan.tran@ptnglobalcorp.com">
              khan.tran@ptnglobalcorp.com
            </a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Phone />
            <a href="tel:+84 974 18 4717">+84 974 18 4717</a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Map />
            <p>Can Tho, Viet Nam</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
