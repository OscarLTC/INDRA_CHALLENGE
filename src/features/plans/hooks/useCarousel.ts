import { useEffect, useRef, useState, useCallback } from 'react'

export function useCarousel<T>(items: T[], options?: { threshold?: number }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const threshold = options?.threshold ?? 50
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c === items.length - 1 ? 0 : c + 1))
  }, [items.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? items.length - 1 : c - 1))
  }, [items.length])

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX),
    []
  )
  const onTouchMove = useCallback(
    (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX),
    []
  )
  const onTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > threshold) next()
    if (touchEnd - touchStart > threshold) prev()
  }, [touchEnd, touchStart, next, prev, threshold])

  useEffect(() => {
    if (ref.current) {
      const scrollX = current * ref.current.offsetWidth
      ref.current.scrollTo({ left: scrollX, behavior: 'smooth' })
    }
  }, [current])

  return {
    ref,
    current,
    next,
    prev,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
