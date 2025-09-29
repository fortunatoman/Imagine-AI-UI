import { redirect } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { authMiddleware } from '@/lib/auth'
import { buildNoIndexHead } from '@/lib/seo'

export const Route = createFileRoute('/_protected')({
  head: () => buildNoIndexHead(),
  loader: async ({ location }) => {
    const { currentUser } = await authMiddleware()

    if (!currentUser) {
      if (
        location.pathname !== '/sign-in' &&
        location.pathname !== '/sign-up'
      ) {
        throw redirect({ to: '/sign-in', search: { redirect: location.href } })
      }
    }

    return {
      currentUser,
    }
  },
})
