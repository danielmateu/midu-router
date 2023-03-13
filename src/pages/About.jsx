import React from 'react'
import { Link } from '../Link'

const i18n = {
  en: {
    about: 'About',
    title: 'About us',
    description: 'We are a team of developers that love React',
    goHome: 'Go to home'
  },
  es: {
    about: 'Sobre mi',
    title: 'Sobre nosotros',
    description: 'Somos un equipo de desarrolladores que amamos React',
    goHome: 'Ir a la home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

const AboutPage = ({ routeParams }) => {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <div>
      <h1>{i18n.title}</h1>
      <img src='https://media.licdn.com/dms/image/C4D03AQGRZXth0rFoxw/profile-displayphoto-shrink_800_800/0/1616685560578?e=1683763200&v=beta&t=4-e5K_NfNVKSlDpDUqG-3cHSM7M2XnDP_RuVASWj61E' alt='foto de dani' width={200} />
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.goHome}</Link>
    </div>
  )
}

export default AboutPage
