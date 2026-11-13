import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useSEO from '../hooks/useSEO'

const articles = [
  { id: '01', title: 'The Future of AI in Web Design', category: 'AI & Automation', date: 'Oct 24, 2024', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop' },
  { id: '02', title: 'Why 3D Websites Convert Better', category: 'Web Design', date: 'Oct 12, 2024', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop' },
  { id: '03', title: 'Scaling SaaS Architecture with Node.js', category: 'Engineering', date: 'Sep 28, 2024', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop' }
]

export default function InsightsPage() {
  useSEO({ title: 'Insights | TEONVO', description: 'Read our latest thoughts.' })
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '88px' }}>
        <section className="ins-hero section-shell">
          <div className="section-kicker">TEONVO INSIGHTS</div>
          <h1>Thoughts on digital,<br/><em>design & AI.</em></h1>
        </section>

        <section className="ins-grid-section section-shell">
          <div className="ins-grid">
            {articles.map((a) => (
              <a href="#" key={a.id} className="ins-card">
                <div className="ins-img-wrap">
                  <img src={a.image} alt={a.title} className="ins-img" loading="lazy" />
                </div>
                <div className="ins-info">
                  <div className="ins-meta">
                    <span>{a.category}</span> <span>{a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <span className="ins-read">Read Article ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
