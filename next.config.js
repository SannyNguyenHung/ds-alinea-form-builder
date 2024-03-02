/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@alinea/generated"],
  },
};

module.exports = nextConfig;
