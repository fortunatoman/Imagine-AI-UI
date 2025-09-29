import { getCurrentUser } from '@/lib/auth'
import { redirect } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { buildNoIndexHead } from '@/lib/seo'

export const Route = createFileRoute('/_auth')({
  head: () => buildNoIndexHead(),
  loader: async ({ location }) => {
    const currentUser = await getCurrentUser()

    if (currentUser && location.pathname !== '/sign-out') {
      throw redirect({ to: '/' })
    }

    return {
      currentUser,
    }
  },
})
