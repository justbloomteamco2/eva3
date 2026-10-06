import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { companyInfo } from '../data/company'

const desktop = [
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Company', '/about'],
  ['Careers', '/careers'],
]
const mobile = [['Home', '/'], ...desktop, ['Training', '/training'], ['Contact', '/contact']]

export default function Navbar() {
  const [openPath, setOpenPath] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const open = openPath === pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenPath(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="brand">
            <span className="brand-mark">SF</span>
            <span>{companyInfo.name}</span>
          </Link>
          <div className="nav-links">
            {desktop.map(([name, path]) => (
              <Link
                className={pathname === path || pathname.startsWith(`${path}/`) ? 'active' : ''}
                to={path}
                key={path}
              >
                {name}
              </Link>
            ))}
          </div>
          <Link className="nav-contact" to="/contact">Contact</Link>
          <Link className="btn btn-primary hidden md:inline-flex ml-5" to="/request-quote">
            Request a Quote
          </Link>
          <button
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <div
        id="mobile-navigation"
        className={`mobile-menu ${open ? 'open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
      >
        {mobile.map(([name, path]) => (
          <Link to={path} onClick={() => setOpenPath(null)} key={path}>
            {name}
          </Link>
        ))}
        <Link className="btn btn-primary" to="/request-quote" onClick={() => setOpenPath(null)}>
          Request a Quote
        </Link>
      </div>
    </>
  )
}
