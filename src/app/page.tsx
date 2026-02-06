"use client"

import {Suspense, useState} from "react"
import dynamic from "next/dynamic"

const PAGE_PATHS = [
  "@/projects/sphere", //
  "@/projects/sphere_distortion",
  "./twilight/page",
  "./fragments/page",
  "./imgeToPoints/page",
]

export default function Home() {
  const [RandomPage] = useState(() => {
    // ランダムにパスを選択
    const randomPath = PAGE_PATHS[Math.floor(Math.random() * PAGE_PATHS.length)]

    // 選択されたパスだけを dynamic インポート
    return dynamic(() => import(`${randomPath}`), {ssr: false})
  })

  return (
    <Suspense fallback={null}>
      <RandomPage />
    </Suspense>
  )
}
