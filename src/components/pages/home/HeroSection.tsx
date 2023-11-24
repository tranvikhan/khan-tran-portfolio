"use client";

import { Button } from "@/components/Button";
import { Container } from "../../layout/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-blue-300"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-secondary to-purple-300"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-primary to-purple-300"></div>
      </div>
      <Container>
        <div className="relative mt-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 flex flex-row justify-center">
              <Image
                data-aos="fade-up"
                src="/images/avatars/khan-tran.png"
                alt="art cover"
                loading="lazy"
                width="697"
                height="974"
                className="w-[300px] md:w-full max-w-[400px] z-10"
              />
              <h2 className="absolute inset-0 z-0 text-[100px] font-bold opacity-20 text-white dark:text-black">
                Product Designer
                <br />
                Developer
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex-1 flex flex-col gap-4 "
            >
              <h3 className="text-3xl text-black dark:text-white">
                Hello ✌, I&apos;m
              </h3>
              <h3 className="text-5xl font-bold text-black dark:text-white">
                Khan Tran
              </h3>
              <p className="mt-4 text-xl font-light text-gray-800 dark:text-gray-100">
                Welcome to the online portfolio of Khan Tran, a multifaceted
                creative force at the intersection of design and development.
                With a passion for crafting seamless user experiences, Khan
                brings a unique blend of artistic flair and technical expertise
                to the digital realm.
              </p>
              <div className="mt-4 flex flex-row">
                <Button href={ROUTES.CONTACT}>Contact me</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
