import React, { useEffect, useState, Children } from 'react'
import { match } from 'path-to-regexp'
import { EVENTS } from './consts'
import { getCurrentPath } from './utils'
// import { Children } from 'react'

export const Router = ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) => {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  // console.log(children)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    // const { props, type } = children
    console.log(props)
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  // const Page = routes.find(route => route.path === currentPath)?.component || DefaultComponent
  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true
    // hemos usado path-to-regex para poder usar los parametros de la ruta
    // /search/:query <- query es un parametro
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // guardar los parametros de la url que eran dinamicos y que hemos extraido con path-to-regex
    // Si la ruta es /search/:query, el parametro query sera guardado en routeParams
    // matched.params.query === 'valor de query'
    routeParams = matched.params // { query: 'valor de query' } /search/javascript
    return true
  })?.component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
