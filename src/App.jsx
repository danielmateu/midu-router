
import NotFoundPage from './pages/404'
import AboutPage from './pages/About'
import HomePage from './pages/Home'
import SearchPage from './pages/Search'

import { Router } from './Router'

const appRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/search/:query',
    component: SearchPage
  }
]

function App () {
  return (
    <main>
      {/* <Router routes={routes} defaultComponent /> */}
      <Router routes={appRoutes} defaultComponent={NotFoundPage} />
    </main>
  )
}

export default App
