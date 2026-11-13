import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useSEO from '../hooks/useSEO'
import { caseStudies } from '../data/caseStudies'

gsap.registerPlugin(ScrollTrigger)

export default function WorkPage() {
  const containerRef = useRef(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useSEO({
    title: 'Selected Work | TEONVO Digital Agency',
    description: 'Explore TEONVO’s portfolio of premium websites, AI solutions, and digital experiences for travel, e-commerce, and SaaS brands.',
    keywords: 'Teonvo portfolio, digital agency work, website design, AI solutions, travel tech'
  })

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.from('.wp-header h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      
      gsap.utils.toArray('.wp-card').forEach((card) => {
        const img = card.querySelector('.wp-img')
        gsap.fromTo(img, { yPercent: -10, scale: 1.05 }, {
          yPercent: 10, scale: 1, ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Navbar />
      
      <div className={`custom-cursor ${isHovering ? 'hovering' : ''}`} style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}>
        <span>View</span>
      </div>

      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--bg)' }} ref={containerRef}>
        
        <header className="wp-header section-shell">
          <div className="section-kicker">01 / SELECTED WORK</div>
          <div className="wp-h1-mask">
            <h1>Our work speaks<br/><em>through experience.</em></h1>
          </div>
          <p className="wp-sub">A selection of digital products, immersive websites, and intelligent platforms we have crafted for ambitious brands.</p>
        </header>

        <section className="wp-grid section-shell" aria-label="Portfolio Projects">
          {caseStudies.map((p, i) => (
            <article key={p.slug} className="wp-card" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <div className="wp-img-wrap">
                <img src={p.heroImage} alt={`${p.title} - ${p.category} project by Teonvo`} className="wp-img" loading="lazy" />
                <div className="wp-overlay"></div>
              </div>
              <div className="wp-info">
                <div className="wp-info-top">
                  <span className="wp-cat">{p.category}</span>
                  <span className="wp-num">0{i + 1}</span>
                </div>
                <h2 className="wp-title">{p.title}</h2>
                <p className="wp-desc">{p.intro}</p>
                <Link to={`/work/${p.slug}`} className="wp-link">View Case Study <span>↗</span></Link>
              </div>
            </article>
          ))}
        </section>

        <div className="marquee-container">
          <div className="marquee-content">
            <span>DIGITAL EXPERIENCES</span> <span className="dot">✳</span>
            <span>INTELLIGENT SYSTEMS</span> <span className="dot">✳</span>
            <span>STRATEGY & DESIGN</span> <span className="dot">✳</span>
            <span>DIGITAL EXPERIENCES</span> <span className="dot">✳</span>
            <span>INTELLIGENT SYSTEMS</span> <span className="dot">✳</span>
            <span>STRATEGY & DESIGN</span> <span className="dot">✳</span>
          </div>
        </div>

        <section className="wp-cta section-shell">
          <div className="wp-cta-content">
            <div className="section-kicker">READY TO START?</div>
            <h2>Have a project<br/><em>in mind?</em></h2>
            <p>Let's build something extraordinary together. Reach out to our team to discuss your next digital advantage.</p>
            <div className="wp-cta-actions">
              <a href="mailto:teonvo@gmail.com" className="button button-light">teonvo@gmail.com <span>↗</span></a>
              <Link to="/contact" className="text-link">Or fill out the contact form <span>→</span></Link>
            </div>
          </div>
          <div className="wp-cta-orb"></div>
        </section>

      </main>
      <Footer />
    </>
  )
}
