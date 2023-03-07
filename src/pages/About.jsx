import React from 'react'
import { Link } from '../Link'

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <img src='https://media.licdn.com/dms/image/C4D03AQGRZXth0rFoxw/profile-displayphoto-shrink_800_800/0/1616685560578?e=1683763200&v=beta&t=4-e5K_NfNVKSlDpDUqG-3cHSM7M2XnDP_RuVASWj61E' alt='foto de dani' width={200} />
      <p>Hola, me llamo Dani y vamos a crear un clon de React Router</p>
      <Link to='/'>Ir a la home</Link>
    </div>
  )
}

export default AboutPage
