import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  const isActive = (path) => location.pathname === path ? { color: '#fff' } : {}

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">T<span>.</span></span><span className="brand-name">teonvo</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link to="/services" style={isActive('/services')}>Services</Link>
          <Link to="/work" style={isActive('/work')}>Work</Link>
          <Link to="/about" style={isActive('/about')}>About</Link>
          <Link to="/travel-ai" style={{ ...isActive('/travel-ai'), color: isActive('/travel-ai').color ? '#fff' : '#d4af37' }}>AI Demo ✨</Link>
        </nav>
        
        <Link className="header-cta desktop-cta" to="/contact">Let's talk ↗</Link>
        
        {/* Mobile Hamburger Toggle */}
        <button 
          className={`menu-toggle ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/work" onClick={() => setIsOpen(false)}>Work</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/travel-ai" onClick={() => setIsOpen(false)} style={{ color: '#d4af37' }}>AI Demo ✨</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Let's talk ↗</Link>
        </div>
      </div>
      
      {/* Backdrop for mobile menu */}
      {isOpen && <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>}
    </>
  )
}
