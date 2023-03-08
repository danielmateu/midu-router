import React, { useEffect } from 'react'

const SearchPage = ({ routeParams }) => {
  useEffect(() => {
    // console.log(routeParams)
    document.title = `Estás en la página de ${routeParams.query}`
  }, [])

  return (
  // <div>SearchPage</div>
    <h1>{routeParams.query.toUpperCase()}</h1>
  )
}

export default SearchPage
