import { useAuth } from '@/hooks/use-auth'
import { createFileRoute } from '@tanstack/react-router'
import { buildSeoHead } from '@/lib/seo'

export const Route = createFileRoute('/_protected/example-protected-route')({
  head: () =>
    buildSeoHead({
      path: '/example-protected-route',
      title: 'Account',
      description: 'Authenticated account area.',
      noIndex: true,
    }),
  component: RouteComponent,
})

function RouteComponent({}) {
  const { currentUser } = useAuth()
  return <div>Protected {currentUser?.email}</div>
}
