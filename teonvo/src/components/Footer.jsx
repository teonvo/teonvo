import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer section-shell">
      <div className="footer-top">
        <div className="brand">
          <span className="brand-mark">T<span>.</span></span>
          <span className="brand-name">teonvo</span>
        </div>
        <span className="footer-note">DIGITAL EXPERIENCES / INTELLIGENT SYSTEMS</span>
      </div>

      <div className="footer-links">
        <Link to="/insights">INSIGHTS</Link>
        <Link to="/careers">CAREERS</Link>
        <a href="mailto:teonvo@gmail.com">EMAIL ↗</a>
        <a href="#top">BACK TO TOP ↑</a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TEONVO. ALL RIGHTS RESERVED.</span>
        <span>BUILT FOR WHAT'S NEXT.</span>
      </div>
    </footer>
  )
}
