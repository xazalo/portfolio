import { useCallback, useState } from 'react'

interface CopyState {
  copied: boolean
  error: string | null
}

export function useCopyToClipboard() {
  const [state, setState] = useState<CopyState>({ copied: false, error: null })

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setState({ copied: true, error: null })
      return true
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(textarea)
      setState(
        ok
          ? { copied: true, error: null }
          : { copied: false, error: 'Could not copy to clipboard' },
      )
      return ok
    }
  }, [])

  return { ...state, copy }
}
