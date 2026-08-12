import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { useIntersectionReveal } from '../../hooks/useIntersectionReveal.ts'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useIntersectionReveal<HTMLDivElement>()

  const style: CSSProperties | undefined = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'transition-[opacity,translate] duration-500 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
