import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type BadgeVariant = 'neutral' | 'accent'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children: ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'border border-border bg-surface text-secondary',
  accent: 'border border-accent/30 bg-accent/10 text-accent-strong',
}

export function Badge({ variant = 'neutral', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
