import { signOutFn } from '@/lib/auth'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-out')({
  loader: async () => {
    await signOutFn()
    throw redirect({ to: '/' })
  },
})
