import Image from "next/image";

const HERO_DEVICES_DESKTOP = "/images/hero-devices.png";

export function HeroDeviceMockup() {
  return (
    <div className="hero-device-visual relative z-0 min-w-0 pointer-events-none">
      <div className="hero-device-wide-glow" aria-hidden />
      <Image
        src={HERO_DEVICES_DESKTOP}
        alt="Sveinssons website on a laptop and smartphone"
        width={1024}
        height={688}
        priority
        className="hero-device-wide-img"
        sizes="(min-width: 1280px) 52vw, 0px"
      />
    </div>
  );
}
