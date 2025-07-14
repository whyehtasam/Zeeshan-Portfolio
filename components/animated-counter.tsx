"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ end, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = countRef.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          gsap.to(
            { count: 0 },
            {
              count: end,
              duration,
              ease: "power2.out",
              onUpdate: function () {
                setCount(Math.round(this.targets()[0].count))
              },
            },
          )
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  )
}
