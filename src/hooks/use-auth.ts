import { signOutFn } from '@/lib/auth'
import type { AuthUser } from '@/lib/auth'
import { useLoaderData, useRouter } from '@tanstack/react-router'

export function useAuth() {
  const { currentUser } = useLoaderData({ from: '__root__' }) as {
    currentUser: AuthUser | null
  }
  const router = useRouter()

  const signOut = async () => {
    await signOutFn()
    await router.invalidate()
  }

  return {
    currentUser,
    signOut,
  }
}
