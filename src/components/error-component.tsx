import { useTheme } from 'next-themes'
import { useLocation } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export function ErrorComponent({
  error,
  info,
}: {
  error: Error
  info?: { componentStack: string }
  reset: () => void
}) {
  const randomErrorId = useRef<string>(
    Math.random().toString(36).substring(2, 15),
  )
  const { theme } = useTheme()
  const location = useLocation()

  const message = {
    type: 'NOTIFY_ERROR',
    data: {
      errorId: randomErrorId.current,
      href: location.href,
      errorMessage: error.message,
      errorStack: error.stack,
      errorCause: error.cause,
      errorComponentStack: info?.componentStack,
    },
  }

  // Every 1 second, notify parent that an error exists
  useEffect(() => {
    const interval = setInterval(() => {
      window.parent.postMessage(message)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-6 text-center my-20">
      <img
        src={
          theme === 'dark'
            ? '/imagine-logo-dark.svg'
            : '/imagine-logo-light.svg'
        }
        alt="Imagine Logo"
        className="size-14"
      />

      <h1 className="text-2xl font-medium">Oops! Something went wrong.</h1>

      <div>
        <pre className="text-xs border border-red-500 p-2 text-red-500 overflow-auto rounded-md">
          {error.message ? <code>{error.message}</code> : null}
        </pre>
      </div>
    </div>
  )
}
