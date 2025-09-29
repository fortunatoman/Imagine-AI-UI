import * as React from 'react'
import { UseFormReturn, FieldValues, DefaultValues } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Loader2 } from 'lucide-react'

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodSchema<T>
  defaultValues: DefaultValues<T>
  onSubmit: (data: T, form: UseFormReturn<T>) => void
  children: (form: UseFormReturn<T>) => React.ReactNode
  submitText: string
  loadingText: string
  isLoading?: boolean
  className?: string
  form: UseFormReturn<T>
}

export function AuthForm<T extends FieldValues>({
  onSubmit,
  children,
  submitText,
  loadingText,
  isLoading = false,
  className = 'space-y-4',
  form,
}: AuthFormProps<T>) {
  const handleSubmit = (data: T) => {
    onSubmit(data, form)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={className}>
        {children(form)}

        {form.formState.errors.root && (
          <div className="text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button type="submit" size="sm" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              {loadingText}
            </div>
          ) : (
            submitText
          )}
        </Button>
      </form>
    </Form>
  )
}
