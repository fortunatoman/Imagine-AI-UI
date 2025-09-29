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
import { signInFn } from '@/lib/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { buildSeoHead } from '@/lib/seo'

const searchSchema = z.object({
  redirect: z.string().optional(),
})

export const Route = createFileRoute('/_auth/sign-in')({
  head: () =>
    buildSeoHead({
      path: '/sign-in',
      title: 'Sign in',
      description: 'Sign in to your Imagine account.',
      noIndex: true,
    }),
  component: SignInPage,
  validateSearch: searchSchema,
})

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})

function SignInPage() {
  const search = useSearch({ from: '/_auth/sign-in' })
  const navigate = useNavigate()
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const signInMutation = useMutation({
    mutationFn: async (data: z.infer<typeof signInSchema>) => {
      await signInFn({
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
      console.error('Sign in error:', error)
      form.setError('root', { message: error.message || 'Failed to sign in' })
    },
  })

  return (
    <AuthCard
      title="Sign in"
      description="Enter your email and password to access your account"
    >
      <AuthForm
        schema={signInSchema}
        defaultValues={{
          email: '',
          password: '',
        }}
        onSubmit={(data) => signInMutation.mutate(data)}
        submitText="Sign in"
        loadingText="Signing in..."
        isLoading={signInMutation.isPending}
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

            <div className="space-y-2">
              <AuthField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </>
        )}
      </AuthForm>

      <div className="text-center text-sm text-muted-foreground mt-4 space-x-1">
        <div className="inline-block">Don't have an account? </div>
        <div className="inline-block">
          <Link
            to="/sign-up"
            search={search.redirect ? { redirect: search.redirect } : undefined}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </AuthCard>
  )
}
