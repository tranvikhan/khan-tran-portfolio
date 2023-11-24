import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { TechStackIcon } from "@/components/TechStackIcon";
import { Container } from "@/components/layout/Container";

export const AboutSection = () => {
  return (
    <section id="about" data-aos="fade-up" className="bg-primary py-24">
      <Container>
        <h2 className="text-3xl font-bold text-white">About me,</h2>
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <p className="text-lg font-thin text-gray-50" data-aos="fade-up">
              I am Khan Tran, a seasoned product designer and web/mobile app
              developer dedicated to pushing the boundaries of digital
              innovation. My journey in the tech industry has been marked by a
              relentless pursuit of excellence, a keen eye for aesthetics, and a
              commitment to delivering products that resonate with users.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-4 bg-white bg-opacity-20 rounded-xl p-4"
          >
            <h3 className="text-2xl font-light text-gray-50 px-4 pt-4">
              My skills
            </h3>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
              <TechStackIcon
                title="Figma"
                imageUrl="/images/tech-stacks/figma.png"
              />
              <TechStackIcon
                title="Adobe Photoshop"
                imageUrl="/images/tech-stacks/ps.png"
              />
              <TechStackIcon
                title="React"
                imageUrl="/images/tech-stacks/react.png"
              />
              <TechStackIcon
                title="React Native with Expo"
                imageUrl="/images/tech-stacks/expo.png"
              />
              <TechStackIcon
                title="MUI Design Systems"
                imageUrl="/images/tech-stacks/mui.png"
              />
              <TechStackIcon
                title="Telerik Kendo UI"
                imageUrl="/images/tech-stacks/kendo.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
