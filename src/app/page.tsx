"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "react-feather";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSitePreferences } from "@/components/SitePreferences";
import { HeroPortrait } from "@/components/HeroPortrait";
import { LensanShowcase } from "@/components/LensanShowcase";
import { copy, projectCopy, skillGroups } from "@/data/siteCopy";
import { projects } from "@/data/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projectList = Object.values(projects);

export default function Home() {
  const { locale } = useSitePreferences();
  const t = copy[locale];
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .fromTo(".hero__name span", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.85, stagger: 0.16 }, 0)
        .from(".hero__role", { y: 18, opacity: 0, duration: 0.55 }, 0.48)
        .from(".hero__role .text-accent__line", { scaleX: 0, transformOrigin: "left center", duration: 0.56 }, 0.72)
        .from(".hero__intro, .hero__cta", { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, 0.59)
        .from(".hero__outfit-controls", { x: 14, opacity: 0, duration: 0.45 }, 0.72);

      gsap.utils.toArray<HTMLElement>("[data-heading-reveal]").forEach((element) => {
        gsap.fromTo(element, { clipPath: "inset(0 0 100% 0)", y: 12 }, {
          clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.72, ease: "expo.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".about-section [data-accent], .contact-section [data-accent]").forEach((element) => {
        const line = element.querySelector<HTMLElement>(".text-accent__line");
        if (!line) return;
        gsap.from(line, {
          scaleX: 0, transformOrigin: "left center", duration: 0.66, ease: "expo.out",
          scrollTrigger: { trigger: element, start: "top 83%", once: true },
        });
      });

      // Work tiles open like a shutter: the frame wipes in, the image settles from a slight zoom,
      // then the label and copy follow in order.
      gsap.utils.toArray<HTMLElement>(".project-tile[data-reveal]").forEach((element) => {
        const visual = element.querySelector(".project-tile__visual");
        const image = element.querySelector(".project-tile__image");
        const labels = element.querySelectorAll(".project-tile__cover > *, .project-tile__meta, .project-tile__text > *");
        const tl = gsap.timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
        tl.fromTo(visual, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.9 }, 0)
          .from(image, { scale: 1.14, duration: 1.3 }, 0)
          .from(labels, { y: 16, opacity: 0, duration: 0.6, stagger: 0.06 }, 0.3);
      });

      gsap.utils.toArray<HTMLElement>(".about-section [data-reveal], .contact-section [data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 16, opacity: 0.75, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".skill-group").forEach((group) => {
        gsap.from(group.querySelectorAll("h4, li"), {
          y: 12, opacity: 0, duration: 0.5, ease: "expo.out", stagger: 0.035,
          scrollTrigger: { trigger: group, start: "top 90%", once: true },
        });
      });

      gsap.from(".contact-section__links > *", {
        y: 18, opacity: 0, duration: 0.6, ease: "expo.out", stagger: 0.1,
        scrollTrigger: { trigger: ".contact-section__links", start: "top 88%", once: true },
      });

    });

    // Desktop only: the hero copy drifts up slower than the page as it leaves.
    mm.add("(min-width: 1051px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(".hero__copy", {
        y: -70, opacity: 0.35, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 },
      });
    });

    // Reduced motion: no travel or zoom, just a soft fade as sections arrive.
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.utils.toArray<HTMLElement>(".project-tile, [data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0.4, duration: 0.4, ease: "power1.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
        });
      });
    });
    return () => mm.revert();
  }, { scope: root, dependencies: [locale], revertOnUpdate: true });

  return (
    <main id="main-content" ref={root}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__main page-gutter">
          <div className="hero__copy">
            <h1 className="hero__name" id="hero-title"><span>KHAN</span><span>TRẦN</span></h1>
            <p className="hero__role">{t.hero.roleBefore} <span className="text-accent">{t.hero.roleAccent}<span className="text-accent__line" aria-hidden="true" /></span></p>
            <p className="hero__intro">{t.hero.intro}</p>
            <a className="pill-button hero__cta" href="#work">{t.hero.cta}<ArrowUpRight size={19} aria-hidden="true" /></a>
          </div>
          <HeroPortrait locale={locale} />
        </div>
        <div className="hero__status page-gutter">
          <span>{t.hero.availability}</span>
          <a href="#work" aria-label={t.hero.cta}><ArrowDown size={18} aria-hidden="true" /></a>
          <span>{t.hero.location}</span>
        </div>
      </section>

      <section className="work-section page-gutter" id="work" aria-labelledby="work-title">
        <div className="section-heading" data-reveal>
          <div><h2 id="work-title" data-heading-reveal>/{t.work.title.toUpperCase()}</h2></div>
          <a href="#project-grid">{t.work.all}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="project-grid" id="project-grid">
          {projectList.map((project, index) => {
            const content = projectCopy[project.id][locale];
            const featured = project.id === "lensan";
            const secondFeature = project.id === "lati-coffee";
            const showcase = project.id === "ptn-sport" || project.id === "easy-vocabulary";
            const hasCover = featured || secondFeature || showcase;
            return (
              <Link className={`project-tile${featured ? " project-tile--featured" : ""}${secondFeature ? " project-tile--second-feature" : ""}${showcase ? " project-tile--showcase" : ""}${project.id === "small-gift" ? " project-tile--last" : ""}`} href={`/projects/${project.id}`} key={project.id} aria-label={`${t.work.view}: ${project.name}`} data-reveal>
                <div className="project-tile__visual">
                  <div className="project-tile__image">{featured ? <LensanShowcase locale={locale} decorative /> : <Image src={project.cardImage ?? project.thumbnail} alt="" fill sizes={secondFeature ? "(max-width: 1050px) 100vw, 70vw" : "(max-width: 1050px) 100vw, 50vw"} />}</div>
                  {hasCover && <div className="project-tile__cover"><span>{String(index + 1).padStart(2, "0")} <span aria-hidden="true">──</span><br />{content.category}</span><strong>{project.id === "easy-vocabulary" ? "Easy Vocabulary" : project.name}</strong>{(featured || secondFeature) && <p>{content.summary}</p>}<ArrowUpRight size={24} aria-hidden="true" /></div>}
                </div>
                <div className="project-tile__meta"><span>{String(index + 1).padStart(2, "0")} / {content.category}</span><ArrowUpRight size={20} aria-hidden="true" /></div>
                <div className="project-tile__text"><h3>{project.name}</h3><p>{content.summary}</p></div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="about-section page-gutter" id="about" aria-labelledby="about-title">
        <div className="about-section__top" data-reveal><h2 id="about-title" data-heading-reveal>{t.about.title}</h2><p>{t.about.leadBefore} <span className="text-accent" data-accent>{t.about.leadAccent}<span className="text-accent__line" aria-hidden="true" /></span></p></div>
        <div className="about-section__content">
          <div className="about-section__statement" data-reveal><p>{t.about.body}</p><a href="#contact">{t.nav.contact}<ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="about-section__detail" data-reveal><h3>{t.about.approachTitle}</h3><p>{t.about.approach}</p></div>
        </div>
        <div className="skills-section" data-reveal>
          <div className="skills-section__intro"><h3 id="skills-title">{t.about.skillsTitle}</h3><p>{t.about.skillsNote}</p></div>
          <div className="skills-grid" aria-labelledby="skills-title">
            {skillGroups.map((group) => (
              <section className="skill-group" aria-labelledby={`skills-${group.id}`} key={group.id}>
                <h4 id={`skills-${group.id}`}>{group.label[locale]}</h4>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section page-gutter" id="contact" aria-labelledby="contact-title">
        <div data-reveal><h2 id="contact-title" data-heading-reveal>{t.contact.titleBefore} <span className="text-accent" data-accent>{t.contact.titleAccent}<span className="text-accent__line" aria-hidden="true" /></span></h2><p>{t.contact.body}</p></div>
        <div className="contact-section__links" data-reveal>
          <a className="contact-section__primary" href="mailto:tranvikhan@gmail.com">{t.contact.email}<ArrowUpRight size={25} aria-hidden="true" /></a>
          <div><a href="tel:+84974184717">{t.contact.phone}<span>+84 974 18 4717</span></a><a href="https://www.linkedin.com/in/tranvikhan/" target="_blank" rel="noopener noreferrer">{t.contact.linkedin}<ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <p>{t.contact.location}</p>
        </div>
      </section>
    </main>
  );
}
