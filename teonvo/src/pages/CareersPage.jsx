import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useSEO from '../hooks/useSEO'

const roles = [
  { title: 'Senior React Developer', location: 'Remote / India', type: 'Full-time' },
  { title: '3D WebGL Engineer (Three.js)', location: 'Remote', type: 'Contract' },
  { title: 'AI Integration Specialist', location: 'Hybrid / Delhi', type: 'Full-time' },
  { title: 'UX/UI Product Designer', location: 'Remote', type: 'Full-time' }
]

export default function CareersPage() {
  useSEO({ title: 'Careers | TEONVO', description: 'Join the TEONVO team.' })
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '88px' }}>
        <section className="cr-hero section-shell">
          <div className="section-kicker">CAREERS AT TEONVO</div>
          <h1>Build the future<br/><em>with us.</em></h1>
          <p className="cr-sub">We are a team of builders, thinkers, and creatives. If you are obsessed with quality and want to work on cutting-edge digital products, you belong here.</p>
        </section>

        <section className="cr-roles section-shell">
          <div className="section-kicker">OPEN POSITIONS</div>
          <div className="roles-list">
            {roles.map((role, i) => (
              <div key={i} className="role-row">
                <div className="role-info">
                  <h3>{role.title}</h3>
                  <div className="role-meta">
                    <span>{role.location}</span> <span>•</span> <span>{role.type}</span>
                  </div>
                </div>
                <a href={`mailto:teonvo@gmail.com?subject=Application for ${role.title}`} className="role-apply">Apply Now ↗</a>
              </div>
            ))}
          </div>
          <div className="cr-no-role">
            <p>Don't see a role that fits? We are always looking for exceptional talent.</p>
            <a href="mailto:teonvo@gmail.com" className="button button-light">Send us your portfolio ↗</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
