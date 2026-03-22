import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import s from './NotFoundPage.module.css'

export function NotFoundPage() {
  const error = useRouteError()
  const is404 = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className={s.page}>
      <p className={s.code}>{is404 ? '404' : '500'}</p>
      <p className={s.message}>
        {is404 ? 'Challenge not found.' : 'Something went wrong.'}
      </p>
      <Link to="/" className={s.link}>
        ← Back to curriculum
      </Link>
    </div>
  )
}
