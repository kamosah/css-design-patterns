import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'

export function NotFoundPage() {
  const error = useRouteError()
  const is404 = isRouteErrorResponse(error) && error.status === 404

  return (
    <div style={{ padding: '4rem', textAlign: 'center', color: '#718096' }}>
      <p style={{ fontSize: '48px', margin: '0 0 16px' }}>{is404 ? '404' : '500'}</p>
      <p style={{ marginBottom: '24px' }}>
        {is404 ? 'Challenge not found.' : 'Something went wrong.'}
      </p>
      <Link to="/" style={{ color: '#4f46e5', fontSize: '14px' }}>
        ← Back to curriculum
      </Link>
    </div>
  )
}
