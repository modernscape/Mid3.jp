// src/app/page.tsx
import {redirect} from "next/navigation"

export const dynamic = "force-dynamic"

// export default function Home() {
//   const projects = ["/sphere", "/sphere_distortion"]
//   const randomIndex = Math.floor(Math.random() * projects.length)
//   const selectedPath = projects[randomIndex]

//   redirect(selectedPath)
// }

const works = [
  "/sphere", //
  "/sphere_distortion",
  "/twilight",
]

export default function Home() {
  const target = works[Math.floor(Math.random() * works.length)]
  redirect(target)
}
