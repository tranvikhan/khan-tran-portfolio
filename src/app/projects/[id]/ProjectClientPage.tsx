"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { ArrowLeft, ArrowUpRight } from "react-feather";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSitePreferences } from "@/components/SitePreferences";
import { LensanShowcase } from "@/components/LensanShowcase";
import { copy, displayRole, projectCopy } from "@/data/siteCopy";
import { projects } from "@/data/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const orderedProjects = Object.values(projects);

export default function ProjectPage() {
  const { id } = useParams();
  const { locale } = useSitePreferences();
  const root = useRef<HTMLElement>(null);
  const project = projects[String(id)];
  const t = copy[locale].detail;
  const content = project ? projectCopy[project.id][locale] : null;
  const next = project ? orderedProjects[(orderedProjects.findIndex((item) => item.id === project.id) + 1) % orderedProjects.length] : null;

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .fromTo(".case-hero__title", { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.82 }, 0)
        .from(".case-hero__summary", { y: 16, opacity: 0, duration: 0.52 }, 0.27)
        .fromTo(".case-hero__image", { clipPath: "inset(0 0 13% 0)", y: 16 }, { clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.7 }, 0.32);
      gsap.utils.toArray<HTMLElement>("[data-case-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 18, opacity: 0.78, duration: 0.58, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
        });
      });
    });
    return () => mm.revert();
  }, { scope: root, dependencies: [id, locale], revertOnUpdate: true });

  if (!project || !content) {
    return <main id="main-content" className="missing-project page-gutter"><h1>{locale === "vi" ? "Không tìm thấy dự án" : "Project not found"}</h1><Link href="/#work">{t.back}</Link></main>;
  }

  return (
    <main id="main-content" ref={root}>
      <article>
        <header className="case-hero page-gutter">
          <Link href="/#work" className="case-back"><ArrowLeft size={18} aria-hidden="true" />{t.back}</Link>
          <div className="case-hero__headline"><p>{content.category}</p><h1 className="case-hero__title">{project.name}</h1></div>
          <p className="case-hero__summary">{content.summary}</p>
          <div className="case-hero__image">{project.id === "lensan" ? <LensanShowcase locale={locale} priority /> : <Image src={project.thumbnail} alt={`${project.name} ${locale === "vi" ? "ảnh giới thiệu dự án" : "project preview"}`} fill priority sizes="100vw" />}</div>
        </header>

        <section className="case-body page-gutter" aria-label={t.overview}>
          <div className="case-body__main" data-case-reveal><h2>{t.overview}</h2><p>{content.overview}</p>{project.demo && <a href={project.id === "lensan" && locale === "en" ? "https://lensan.vn/en" : project.demo} target="_blank" rel="noopener noreferrer" className="text-link">{t.visit}<ArrowUpRight size={19} aria-hidden="true" /></a>}</div>
          <aside className="case-facts" data-case-reveal>
            <div><h3>{t.role}</h3><ul>{project.roles.map((role) => <li key={role}>{displayRole(role, locale)}</li>)}</ul></div>
            <div><h3>{t.platform}</h3><ul>{project.platforms.map((platform) => <li key={platform}>{platform}</li>)}</ul></div>
            <div><h3>{t.technology}</h3><ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
            <div><h3>{t.features}</h3><ul>{content.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          </aside>
        </section>

        {content.story && <section className={`case-story page-gutter${project.id === "lati-coffee" ? " case-story--lati" : ""}`} aria-label={locale === "vi" ? `Câu chuyện ${project.name}` : `The ${project.name} story`}>
          <div className="case-story__row" data-case-reveal><h2>{content.story.challengeTitle}</h2><p>{content.story.challenge}</p></div>
          <div className="case-story__row" data-case-reveal><h2>{content.story.systemTitle}</h2><p>{content.story.system}</p></div>
          <div className="case-story__row" data-case-reveal><h2>{content.story.assistantTitle}</h2><p>{content.story.assistant}</p></div>
        </section>}

        <section className="case-gallery page-gutter" aria-labelledby="gallery-title"><h2 id="gallery-title" data-case-reveal>{t.gallery}</h2>{content.galleryNote && <p className="case-gallery__note" data-case-reveal>{content.galleryNote}</p>}<div className={`case-gallery__grid${project.id === "lensan" ? " case-gallery__grid--lensan" : ""}${project.id === "lati-coffee" ? " case-gallery__grid--lati" : ""}${project.id === "ptn-sport" ? " case-gallery__grid--ptn" : ""}`}>{project.images.map((image, index) => {
          const portraitPreview = (project.id === "lensan" && image.src.endsWith(".jpg")) || (project.id === "lati-coffee" && index > 0);
          const imageWidth = image.width ?? (portraitPreview ? project.id === "lati-coffee" ? 438 : 1320 : project.id === "lati-coffee" && index === 0 ? 2533 : project.id === "lensan" ? 1800 : 1200);
          const imageHeight = image.height ?? (portraitPreview ? project.id === "lati-coffee" ? 956 : 2868 : project.id === "lati-coffee" && index === 0 ? 1279 : project.id === "lensan" ? 1149 : 900);
          const fullWidthPreview = index === 0 || (project.id === "ptn-sport" && index === 1);
          const imageSizes = fullWidthPreview ? "(max-width: 1800px) 100vw, 1800px" : project.id === "lensan" ? "(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" : project.id === "lati-coffee" ? "(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw" : "(max-width: 700px) 100vw, 50vw";
          return <figure key={`${image.src}-${index}`} data-case-reveal><Image src={image.src} alt={(locale === "vi" ? image.altVi : image.alt) || image.alt || `${project.name} ${locale === "vi" ? "màn hình" : "screen"} ${index + 1}`} width={imageWidth} height={imageHeight} sizes={imageSizes} /><figcaption>{String(index + 1).padStart(2, "0")} / {project.name}</figcaption></figure>;
        })}</div></section>

        {next && <Link className="case-next page-gutter" href={`/projects/${next.id}`}><span>{t.next}</span><strong>{next.name}</strong><ArrowUpRight size={30} aria-hidden="true" /></Link>}
      </article>
    </main>
  );
}
