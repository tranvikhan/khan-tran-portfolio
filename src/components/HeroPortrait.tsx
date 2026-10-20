"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pause, Play } from "react-feather";
import type { Locale } from "@/components/SitePreferences";

const outfits = [
  {
    src: "/images/avatars/kevin-casual-cutout.png",
    name: { en: "Casual", vi: "Thoải mái" },
    description: {
      en: "3D portrait of Kevin in sunglasses, a charcoal sweatshirt, gray shorts, and white sneakers",
      vi: "Nhân vật 3D của Kevin đeo kính râm, mặc áo nỉ xám đậm, quần short xám và giày trắng",
    },
  },
  {
    src: "/images/avatars/kevin-street-cutout.png",
    name: { en: "Street", vi: "Dạo phố" },
    description: {
      en: "3D portrait of Kevin in a black cap, sunglasses, jacket, shorts, and backpack",
      vi: "Nhân vật 3D của Kevin đội mũ đen, đeo kính râm, mặc áo khoác, quần short và mang ba lô",
    },
  },
  {
    src: "/images/avatars/kevin-outdoor-cutout.png",
    name: { en: "Outdoor", vi: "Ngoài trời" },
    description: {
      en: "3D portrait of Kevin wearing a black outdoor cap, clear glasses, jacket, and backpack",
      vi: "Nhân vật 3D của Kevin đội mũ đen, đeo kính trong, mặc áo khoác và mang ba lô",
    },
  },
] as const;

export function HeroPortrait({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (paused || interacting || reducedMotion || !pageVisible) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % outfits.length), 6000);
    return () => window.clearTimeout(timer);
  }, [active, paused, interacting, reducedMotion, pageVisible]);

  const labels = locale === "vi"
    ? { group: "Chọn trang phục", pause: "Tạm dừng đổi trang phục", resume: "Tiếp tục đổi trang phục", reduced: "Tự động đổi trang phục đã tắt theo cài đặt giảm chuyển động" }
    : { group: "Choose an outfit", pause: "Pause outfit rotation", resume: "Resume outfit rotation", reduced: "Automatic outfit changes are off because reduced motion is enabled" };

  return (
    <div
      className="hero__portrait"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
      }}
    >
      <div className="hero__portrait-stage" role="img" aria-label={outfits[active].description[locale]}>
        {outfits.map((outfit, index) => (
          <div className={`hero__avatar-frame${active === index ? " hero__avatar-frame--active" : ""}`} aria-hidden="true" key={outfit.src}>
            <Image src={outfit.src} alt="" fill priority={index === 2} sizes="(max-width: 700px) 90vw, (max-width: 1050px) 44vw, 42vw" className="hero__avatar" />
          </div>
        ))}
      </div>
      <div className="hero__outfit-controls" aria-label={labels.group} role="group">
        <span className="hero__outfit-label">{labels.group}</span>
        <div className="hero__outfit-options">
          {outfits.map((outfit, index) => (
            <button
              type="button"
              key={outfit.src}
              className={active === index ? "hero__outfit-option hero__outfit-option--active" : "hero__outfit-option"}
              aria-label={`${labels.group}: ${outfit.name[locale]}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span> {outfit.name[locale]}
            </button>
          ))}
        </div>
        <button type="button" className="hero__outfit-pause" aria-label={reducedMotion ? labels.reduced : paused ? labels.resume : labels.pause} onClick={() => setPaused((value) => !value)} disabled={reducedMotion}>
          {paused || reducedMotion ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
