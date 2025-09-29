import { useMutation } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'
import { AuthCard } from '@/components/auth/auth-card'
import { AuthForm } from '@/components/auth/auth-form'
import { AuthField } from '@/components/auth/auth-field'
import { forgotPasswordFn } from '@/lib/auth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'
import { buildSeoHead } from '@/lib/seo'

export const Route = createFileRoute('/_auth/forgot-password')({
  head: () =>
    buildSeoHead({
      path: '/forgot-password',
      title: 'Forgot password',
      description: 'Request a password recovery link for your Imagine account.',
      noIndex: true,
    }),
  component: ForgotPasswordPage,
})

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

function ForgotPasswordPage() {
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const forgotPasswordMutation = useMutation({
    mutationFn: async (data: z.infer<typeof forgotPasswordSchema>) => {
      await forgotPasswordFn({ data })
    },
    onSuccess: () => {
      setIsSuccess(true)
      form.reset()
    },
    onError: (error: { status: number; message: string }) => {
      console.error('Forgot password error:', error)
      form.setError('root', {
        message: error.message || 'Failed to send recovery email',
      })
    },
  })

  if (isSuccess) {
    return (
      <AuthCard
        title="Check your email"
        description="We've sent you a password recovery link"
      >
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            If an account exists with that email, you'll receive a password
            recovery link shortly. Please check your inbox and spam folder.
          </AlertDescription>
        </Alert>

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

  return (
    <AuthCard
      title="Forgot password"
      description="Enter your email address and we'll send you a recovery link"
    >
      <AuthForm
        schema={forgotPasswordSchema}
        defaultValues={{
          email: '',
        }}
        onSubmit={(data) => forgotPasswordMutation.mutate(data)}
        submitText="Send recovery link"
        loadingText="Sending..."
        isLoading={forgotPasswordMutation.isPending}
        form={form}
      >
        {(form) => (
          <AuthField
            control={form.control}
            name="email"
            label="Email"
            placeholder="john@doe.com"
            type="email"
          />
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
