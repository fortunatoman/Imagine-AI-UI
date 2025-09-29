/**
 * @imagine-readonly
 */

import { useMutation } from '@tanstack/react-query'
import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
  useSearch,
} from '@tanstack/react-router'
import { z } from 'zod'
import { AuthCard } from '@/components/auth/auth-card'
import { AuthForm } from '@/components/auth/auth-form'
import { AuthField } from '@/components/auth/auth-field'
import { signUpFn } from '@/lib/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { buildSeoHead } from '@/lib/seo'

const searchSchema = z.object({
  redirect: z.string().optional(),
})

export const Route = createFileRoute('/_auth/sign-up')({
  head: () =>
    buildSeoHead({
      path: '/sign-up',
      title: 'Sign up',
      description: 'Create an Imagine account and start building products.',
      noIndex: true,
    }),
  component: SignUpPage,
  validateSearch: searchSchema,
})

const signUpSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

function SignUpPage() {
  const search = useSearch({ from: Route.id })
  const navigate = useNavigate()
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const signUpMutation = useMutation({
    mutationFn: async (data: z.infer<typeof signUpSchema>) => {
      await signUpFn({
        data: { ...data, redirect: search.redirect },
      })
    },
    onSuccess: async () => {
      // Invalidate router to refresh auth state
      await router.invalidate()
      // Navigate to the redirect destination if provided
      if (search.redirect) {
        await navigate({ to: search.redirect })
      }
    },

    onError: async (error: {
      status: number
      redirect: boolean
      message: string
    }) => {
      // Check if it's a redirect error (TanStack Start throws redirects as errors)
      if (
        error?.status === 302 ||
        error?.redirect ||
        error?.message?.includes('redirect')
      ) {
        // Invalidate router to refresh auth state
        await router.invalidate()
        // Navigate to the redirect destination if provided
        if (search.redirect) {
          await navigate({ to: search.redirect })
        }
        return
      }
      console.error('Sign up error:', error)
      form.setError('root', { message: error.message || 'Failed to sign up' })
    },
  })

  return (
    <AuthCard
      title="Sign up"
      description="Enter your details to create a new account"
    >
      <AuthForm
        schema={signUpSchema}
        defaultValues={{
          email: '',
          password: '',
        }}
        onSubmit={(data) => signUpMutation.mutate(data)}
        submitText="Sign up"
        loadingText="Signing up..."
        isLoading={signUpMutation.isPending}
        form={form}
      >
        {(form) => (
          <>
            <AuthField
              control={form.control}
              name="email"
              label="Email"
              placeholder="john@doe.com"
              type="email"
            />

            <AuthField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
          </>
        )}
      </AuthForm>

      <div className="text-center text-sm text-muted-foreground mt-4 space-x-1">
        <div className="inline-block">Already have an account? </div>
        <div className="inline-block">
          <Link
            to="/sign-in"
            search={search.redirect ? { redirect: search.redirect } : undefined}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </AuthCard>
  )
}
