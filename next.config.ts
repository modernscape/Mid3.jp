import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["works_react/sphere", "works_react/sphere_distortion"],

  async rewrites() {
    return [
      {
        source: "/fragments-proxy/:path*",
        destination: "http://btw.cloudfree.jp/pages/fragments/:path*",
      },
    ]
  },
}

export default nextConfig
