import { EVENTS } from './consts'

export default function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0 // Primary click
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(to) // Navegacion con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
