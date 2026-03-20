import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CurriculumPage } from './components/curriculum/CurriculumPage'
import { ChallengePage, loader as challengeLoader } from './components/editor/ChallengePage'
import { NotFoundPage } from './components/NotFoundPage'
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
  return <RouterProvider router={router} />
}
