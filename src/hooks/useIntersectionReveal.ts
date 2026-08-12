import { useEffect, useRef, useState } from 'react'

interface RevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useIntersectionReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const { threshold = 0, rootMargin = '0px 0px 10% 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
