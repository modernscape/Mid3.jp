import type {NextConfig} from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["projects/sphere", "projects/sphere_distortion"],
}

export default nextConfig
