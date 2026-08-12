import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'ghost'
type ButtonSize = 'lg' | 'md' | 'sm'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & { href: string }

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'href'> & {
    href?: undefined
  }

type ButtonProps = ButtonAsLink | ButtonAsButton

const baseClasses =
  'inline-flex items-center justify-center rounded-lg font-medium transition-[color,background-color,scale] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-foreground hover:bg-accent-hover',
  ghost: 'border border-border text-foreground hover:bg-surface',
}

const sizeClasses: Record<ButtonSize, string> = {
  lg: 'px-7 py-3 text-lg',
  md: 'px-5 py-2.5 text-base',
  sm: 'px-3.5 py-2 text-sm',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, href, ...rest } = props
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href !== undefined) {
    return (
      <a className={classes} href={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
