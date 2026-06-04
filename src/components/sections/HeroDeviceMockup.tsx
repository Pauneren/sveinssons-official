import Image from "next/image";

/** Exact reference device mockup asset supplied by design */
const HERO_DEVICES_SRC = "/images/hero-devices.png";

export function HeroDeviceMockup() {
  return (
    <div className="hero-device-visual">
      <div className="hero-device-visual-glow" aria-hidden />
      <Image
        src={HERO_DEVICES_SRC}
        alt="Sveinssons website on a laptop and smartphone"
        width={1024}
        height={688}
        priority
        className="hero-device-visual-img"
        sizes="(max-width: 1023px) 100vw, 52vw"
      />
    </div>
  );
}
