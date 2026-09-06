import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  serverExternalPackages: ["nodemailer", "redis"],
};

export default nextConfig;
