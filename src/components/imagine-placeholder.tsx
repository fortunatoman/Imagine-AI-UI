import { Link, useLocation } from '@tanstack/react-router'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { useAuth } from '@/hooks/use-auth'

export function ImaginePlaceholder() {
  const { currentUser, signOut } = useAuth()
  const location = useLocation()
  const { theme } = useTheme()

  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-6 text-center">
      <img
        src={
          theme === 'dark'
            ? '/imagine-logo-dark.svg'
            : '/imagine-logo-light.svg'
        }
        alt="Imagine Logo"
        className="size-14"
      />

      {currentUser ? (
        <>
          <p className="text-foreground/70">
            You are signed in as{' '}
            <span className="font-medium">{currentUser.email}</span>
          </p>
          <Button size="sm" onClick={signOut}>
            Sign out
          </Button>
        </>
      ) : (
        <>
          <p className="text-foreground/70">You are not signed in.</p>
          <Link
            to="/sign-in"
            search={{
              redirect: location.pathname,
            }}
            className="text-blue-500 underline"
          >
            <Button size="sm">Sign in</Button>
          </Link>
        </>
      )}
    </div>
  )
}
