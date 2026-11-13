import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: 'calc(100vh - 88px)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '88px' }}>
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <div className="section-kicker" style={{ marginBottom: '20px' }}>ERROR 404</div>
          <h1 style={{ fontSize: 'clamp(80px, 15vw, 200px)', lineHeight: 1, margin: 0, color: '#fff', fontWeight: 600 }}>Lost?</h1>
          <p style={{ color: '#888', fontSize: '18px', margin: '30px 0 40px' }}>The page you are looking for doesn't exist or has been moved.</p>
          <Link to="/" className="button button-light">Return to Home <span>↗</span></Link>
        </div>
      </main>
      <Footer />
    </>
  )
}


