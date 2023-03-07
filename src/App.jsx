import { useEffect, useState } from 'react'
import { EVENTS } from './consts'
import NotFoundPage from './pages/404'
import AboutPage from './pages/About'
import HomePage from './pages/Home'

import { Router } from './Router'

const appRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {/* <Router routes={routes} defaultComponent /> */}
      <Router routes={appRoutes} defaultComponent={NotFoundPage} />
    </main>
  )
}

export default App
