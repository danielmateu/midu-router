
import { Suspense, lazy } from 'react'
// import NotFoundPage from './pages/404'
// import AboutPage from './pages/About' //Import estático
// import HomePage from './pages/Home'
// import SearchPage from './pages/Search'

import { Route } from './Route'
import { Router } from './Router'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))// Import dinámico
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazySearchPage = lazy(() => import('./pages/Search.jsx'))
const LazyNotFoundPage = lazy(() => import('./pages/404.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    component: LazySearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Router routes={routes} defaultComponent /> */}
        <Router routes={appRoutes} defaultComponent={LazyNotFoundPage}>
          <Route path='/' component={LazyHomePage} />
          <Route path='/about' component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
