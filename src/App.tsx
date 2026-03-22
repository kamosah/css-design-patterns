import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CurriculumPage } from './components/curriculum/CurriculumPage'
import { ChallengePage, loader as challengeLoader } from './components/editor/ChallengePage'
import { NotFoundPage } from './components/NotFoundPage'
import { useThemeStore } from './store/themeStore'
import './styles/app.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CurriculumPage />,
  },
  {
    path: '/challenge/:topicId/:challengeId',
    element: <ChallengePage />,
    loader: challengeLoader,
    errorElement: <NotFoundPage />,
  },
])

export default function App() {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : ''
  }, [theme])

  return <RouterProvider router={router} />
}
