/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "s3-alpha-sig.figma.com",
      "images.unsplash.com",
      "images.prismic.io",
      "security-rwinfotech.cdn.prismic.io",
      "www.rwit.io",
      "datawise-rwinfotech.vercel.app",
    ],
  },
};

export default nextConfig;
