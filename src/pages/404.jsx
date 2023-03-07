import React from 'react'
import { Link } from '../Link'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      {/* Image of something burning */}
      <iframe src='https://giphy.com/embed/ZxomYqy9uGtSQSSjth' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen />
      <p>Page not found</p>
      <Link to='/'>Go to home</Link>

    </div>
  )
}

export default NotFoundPage
