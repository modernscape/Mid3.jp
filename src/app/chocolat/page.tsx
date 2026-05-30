"use client"
import { useEffect } from "react"

export default function FragmentsEmbed() {
  useEffect(() => {
    // ページが表示されたらロゴを消すクラスをbodyに追加
    document.body.classList.add("hide-logo")

    // このコンポーネントがアンマウントされたら元に戻す
    return () => {
      document.body.classList.remove("hide-logo")
    }
  }, [])
  return (
    <iframe
      src="https://modernscape.github.io/26-05-14_chocolat/"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  )
}
