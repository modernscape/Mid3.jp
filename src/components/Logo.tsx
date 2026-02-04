"use client"

import React, {useState, useRef} from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"

const FloatingLogo = () => {
  const [position, setPosition] = useState({x: 20, y: 20})
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const pathname = usePathname()
  const dragStart = useRef({x: 0, y: 0})
  const initialPos = useRef({x: 20, y: 20})
  const moveCount = useRef(0)

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    setIsAnimating(false)
    moveCount.current = 0
    dragStart.current = {x: e.clientX, y: e.clientY}
    initialPos.current = {x: position.x, y: position.y}
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      moveCount.current++
      setPosition({
        x: initialPos.current.x + dx,
        y: initialPos.current.y + dy,
      })
    }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false)
    setIsAnimating(true)
    setPosition({x: 20, y: 20})
    if (moveCount.current < 5) {
      handleLogoClick(e)
    }
  }

  const handleLogoClick = (e: React.BaseSyntheticEvent) => {
    if (pathname === "/" || pathname === "/index.html") {
      window.location.reload()
    } else {
      window.location.href = "/"
    }
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
        // transitionProperty を消して、すべて一括指定の transition にまとめました
        transition: isAnimating
          ? "left 0.6s cubic-bezier(0.25, 1, 0.5, 1), top 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.3s ease"
          : "filter 0.3s ease",
        filter: isDragging ? "drop-shadow(0px 8px 12px rgba(0,0,0,0.4))" : "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
      }}
    >
      <Link href="/" onClick={(e) => e.preventDefault()} draggable={false}>
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path d="M20 30L40 10L85 25L95 70L60 95L10 80L20 30Z" fill="white" stroke="black" strokeWidth="2" />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="14"
            fill="black"
            fontWeight="bold"
            style={{userSelect: "none", pointerEvents: "none"}}
          >
            BW
          </text>
        </svg>
      </Link>
    </div>
  )
}

export default FloatingLogo
