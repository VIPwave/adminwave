import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.music-flo.com",
      "cdnimg.melon.co.kr",
      "image.genie.co.kr",
      "image.bugsm.co.kr",
      "musicmeta-phinf.pstatic.net",
    ],
  },
};

export default nextConfig;
