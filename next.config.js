/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "example.com",
  //         port: "",
  //         pathname: "/account123/**",
  //       },
  //     ],
  //   },
};

module.exports = nextConfig;
