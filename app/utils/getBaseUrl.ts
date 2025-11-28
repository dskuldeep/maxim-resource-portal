/**
 * Get the base URL for the application
 * Checks environment variables for Vercel deployment
 * This function is safe to call at build time and runtime
 */
export function getBaseUrl(): string {
  // In browser, try to get from window.location
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`
  }

  // Check for explicit base URL (build time)
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }

  // Check for Vercel deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Fallback to localhost for development
  return 'http://localhost:3000'
}

