import Image from "next/image";

import type { PublicLanguage } from "@/lib/language";

const HERO_DEVICES = {
  en: "/images/hero-devices-en.png",
  is: "/images/hero-devices-is-aligned.png",
} as const;

const HERO_DEVICE_SIZE = { width: 1024, height: 688 } as const;

export function HeroDeviceMockup({ lang }: { lang: PublicLanguage }) {
  const src = lang === "is" ? HERO_DEVICES.is : HERO_DEVICES.en;

  return (
    <div className="hero-device-visual relative z-0 min-w-0 pointer-events-none">
      <div className="hero-device-wide-glow" aria-hidden />
      <Image
        src={src}
        alt="Sveinssons website on a laptop and smartphone"
        width={HERO_DEVICE_SIZE.width}
        height={HERO_DEVICE_SIZE.height}
        priority
        className="hero-device-wide-img"
        sizes="(min-width: 1280px) 52vw, 0px"
      />
      <div className="hero-device-fade" aria-hidden />
      {lang === "is" && <div className="hero-device-fade-boost" aria-hidden />}
    </div>
  );
}
