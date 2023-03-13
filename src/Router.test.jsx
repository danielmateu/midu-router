import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Router } from './Router'
import { getCurrentPath } from './utils'

vi.mock('./utils', () => ({
  getCurrentPath: vi.fn()
})
)

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should work', () => {
    render(<Router routes={[]} />)
    expect(true).toBe(true)
  })

  it('should render 404 when no route matches', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    // console.log(screen.debug())
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  //   it('should navigate using Links', async () => {
  //     getCurrentPath.mockReturnValueOnce('/')

  //     render(
  //       <Router>
  //         <Route
  //           path='/' Component={() => {
  //             return (
  //               <>
  //                 <h1>Home</h1>
  //                 <Link to='/about'>Go to About</Link>
  //               </>
  //             )
  //           }}
  //         />
  //         <Route path='/about' Component={() => <h1>About</h1>} />
  //       </Router>
  //     )
  //     // Click on the Link
  //     const button = screen.getByText(/Go to About/)
  //     fireEvent.click(button)

//     const aboutTitle = await screen.findByText('About')
//     console.log(screen.debug)
//     // Check new route is rendered
//     expect(aboutTitle).toBeTruthy()
  //   })
})
