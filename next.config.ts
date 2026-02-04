import type {NextConfig} from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["projects/sphere", "projects/sphere_distortion"],

  async rewrites() {
    return [
      // twilight 本体
      {
        source: "/twilight",
        destination: "https://www.twilight-joetsu.com",
      },
      {
        source: "/twilight/:path*",
        destination: "https://www.twilight-joetsu.com/:path*",
      },

      // 👇 ルート直下の「全部」を twilight に流す（暫定）
      {
        source: "/:path*",
        destination: "https://www.twilight-joetsu.com/:path*",
      },
    ]
  },
}

export default nextConfig
