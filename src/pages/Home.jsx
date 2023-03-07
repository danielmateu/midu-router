import React from 'react'
import { Link } from '../Link'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Esta es la home</p>
      <Link to='/about'>Ir a la about</Link>
    </div>
  )
}

export default HomePage
