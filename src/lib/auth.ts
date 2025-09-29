/**
 * Frontend-only auth stubs.
 * Replace with real auth (e.g. Appwrite client SDK) when backend is added.
 */

export interface AuthUser {
  $id: string
  email: string
  name?: string
  [key: string]: unknown
}

export async function authMiddleware(): Promise<{ currentUser: AuthUser | null }> {
  return { currentUser: null }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  return null
}

const NOT_CONFIGURED = 'Authentication is not configured. Add backend auth to enable sign in/sign up.'

export async function signInFn(_args: {
  data: { email: string; password: string; redirect?: string }
}): Promise<void> {
  throw new Error(NOT_CONFIGURED)
}

export async function signUpFn(_args: {
  data: { email: string; password: string; redirect?: string }
}): Promise<void> {
  throw new Error(NOT_CONFIGURED)
}

export async function signOutFn(): Promise<void> {
  // No-op for frontend-only
}

export async function forgotPasswordFn(_args: {
  data: { email: string }
}): Promise<{ success: boolean; message: string }> {
  throw new Error(NOT_CONFIGURED)
}

export async function resetPasswordFn(_args: {
  data: {
    userId: string
    secret: string
    password: string
    confirmPassword: string
  }
}): Promise<{ success: boolean; message: string }> {
  throw new Error(NOT_CONFIGURED)
}
