"use client"

export default function FragmentsEmbed() {
  return (
    <>
      <style jsx>{`
        #logo {
          display: none;
        }
      `}</style>

      <iframe
        src="https://modernscape.github.io/26-05-14_chocolat/"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
      />
    </>
  )
}
