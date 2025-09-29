import { useMutation } from '@tanstack/react-query'
import {
  createFileRoute,
  Link,
  useNavigate,
  useSearch,
} from '@tanstack/react-router'
import { z } from 'zod'
import { AuthCard } from '@/components/auth/auth-card'
import { AuthForm } from '@/components/auth/auth-form'
import { AuthField } from '@/components/auth/auth-field'
import { resetPasswordFn } from '@/lib/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { buildSeoHead } from '@/lib/seo'

const searchSchema = z.object({
  userId: z.string().optional(),
  secret: z.string().optional(),
})

export const Route = createFileRoute('/_auth/reset-password')({
  head: () =>
    buildSeoHead({
      path: '/reset-password',
      title: 'Reset password',
      description: 'Reset your Imagine account password securely.',
      noIndex: true,
    }),
  component: ResetPasswordPage,
  validateSearch: searchSchema,
})

const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

function ResetPasswordPage() {
  const search = useSearch({ from: '/_auth/reset-password' })
  const navigate = useNavigate()
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const resetPasswordMutation = useMutation({
    mutationFn: async (data: z.infer<typeof resetPasswordSchema>) => {
      if (!search.userId || !search.secret) {
        throw new Error('Invalid recovery link')
      }

      await resetPasswordFn({
        data: {
          userId: search.userId,
          secret: search.secret,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
      })
    },
    onSuccess: () => {
      setIsSuccess(true)
      form.reset()
      // Redirect to sign in after 3 seconds
      setTimeout(() => {
        void navigate({ to: '/sign-in' })
      }, 3000)
    },
    onError: (error: { status: number; message: string }) => {
      console.error('Reset password error:', error)
      form.setError('root', {
        message: error.message || 'Failed to reset password',
      })
    },
  })

  if (!search.userId || !search.secret) {
    return (
      <AuthCard
        title="Invalid recovery link"
        description="The password recovery link is invalid or has expired"
      >
        <Alert className="border-red-500 bg-red-50 dark:bg-red-950">
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            This recovery link is invalid or has expired. Please request a new
            password recovery link.
          </AlertDescription>
        </Alert>

        <div className="text-center text-sm text-muted-foreground mt-4 space-x-1">
          <div className="inline-block">
            <Link
              to="/forgot-password"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Request new recovery link
            </Link>
          </div>
        </div>
      </AuthCard>
    )
  }

  if (isSuccess) {
    return (
      <AuthCard
        title="Password reset successful"
        description="Your password has been updated"
      >
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Your password has been reset successfully. You'll be redirected to
            the sign in page shortly.
          </AlertDescription>
        </Alert>

        <div className="text-center text-sm text-muted-foreground mt-4 space-x-1">
          <div className="inline-block">
            <Link
              to="/sign-in"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Sign in now
            </Link>
          </div>
        </div>
      </AuthCard>
    )
  }

  return (
    <AuthCard
      title="Reset password"
      description="Enter your new password below"
    >
      <AuthForm
        schema={resetPasswordSchema}
        defaultValues={{
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(data) => resetPasswordMutation.mutate(data)}
        submitText="Reset password"
        loadingText="Resetting..."
        isLoading={resetPasswordMutation.isPending}
        form={form}
      >
        {(form) => (
          <>
            <AuthField
              control={form.control}
              name="password"
              label="New Password"
              placeholder="Enter your new password"
              type="password"
            />

            <AuthField
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your new password"
              type="password"
            />
          </>
        )}
      </AuthForm>

      <div className="text-center text-sm text-muted-foreground mt-4 space-x-1">
        <div className="inline-block">Remember your password? </div>
        <div className="inline-block">
          <Link
            to="/sign-in"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </AuthCard>
  )
}
