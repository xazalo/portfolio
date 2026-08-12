import { useEffect } from 'react'
import { cn } from '../../lib/utils'

export type ToastTone = 'success' | 'error'

interface ToastProps {
  message: string | null
  tone?: ToastTone
  onDismiss: () => void
}

export function Toast({ message, tone = 'success', onDismiss }: ToastProps) {
  useEffect(() => {
    if (!message) return
    const timer = window.setTimeout(onDismiss, 3000)
    return () => window.clearTimeout(timer)
  }, [message, onDismiss])

  if (!message) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div
        className={cn(
          'rounded-full px-4 py-2 text-sm font-medium shadow-lg',
          tone === 'success' ? 'bg-accent text-foreground' : 'bg-red-600 text-white',
        )}
      >
        {message}
      </div>
    </div>
  )
}
