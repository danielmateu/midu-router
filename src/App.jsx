import { useEffect, useState } from 'react'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navigationEvent = new Event('pushstate')
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Esta es la home</p>
      <button onClick={() => navigate('/about')}>Ir a la about</button>
    </div>
  )
}

function AboutPage () {
  return (
    <div>
      <h1>About Page</h1>
      <img src='https://media.licdn.com/dms/image/C4D03AQGRZXth0rFoxw/profile-displayphoto-shrink_800_800/0/1616685560578?e=1683763200&v=beta&t=4-e5K_NfNVKSlDpDUqG-3cHSM7M2XnDP_RuVASWj61E' alt='foto de dani' width={200} />
      <p>Hola, me llamo Dani y vamos a crear un clon de React Router</p>
      <button onClick={() => navigate('/')}>Ir a la home</button>
    </div>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
