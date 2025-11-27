'use client'

import { useEffect, useState } from 'react'

/**
 * Component to display errors in production for debugging
 * Only shows in development or when explicitly enabled
 */
export function ErrorDisplay() {
  const [error, setError] = useState<Error | null>(null)
  const [showErrors, setShowErrors] = useState(false)

  useEffect(() => {
    // Check if we should show errors (development or query param)
    const urlParams = new URLSearchParams(window.location.search)
    const debug = urlParams.get('debug') === 'true'
    setShowErrors(debug || process.env.NODE_ENV === 'development')

    // Global error handler
    const handleError = (event: ErrorEvent) => {
      setError(event.error || new Error(event.message))
    }

    const handleRejection = (event: PromiseRejectionEvent) => {
      setError(new Error(event.reason?.message || String(event.reason || 'Unhandled promise rejection')))
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleRejection)
    }
  }, [])

  if (!showErrors || !error) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      padding: '1rem',
      backgroundColor: '#fee2e2',
      border: '1px solid #ef4444',
      borderRadius: '0.5rem',
      maxWidth: '400px',
      zIndex: 10000,
      fontSize: '0.875rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
        <strong style={{ color: '#dc2626' }}>Error Detected</strong>
        <button
          onClick={() => setError(null)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.25rem',
            cursor: 'pointer',
            color: '#dc2626',
          }}
        >
          ×
        </button>
      </div>
      <div style={{ color: '#991b1b' }}>
        <div><strong>Message:</strong> {error.message}</div>
        {error.stack && (
          <details style={{ marginTop: '0.5rem' }}>
            <summary style={{ cursor: 'pointer' }}>Stack Trace</summary>
            <pre style={{
              marginTop: '0.5rem',
              fontSize: '0.75rem',
              overflow: 'auto',
              maxHeight: '200px',
            }}>
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

