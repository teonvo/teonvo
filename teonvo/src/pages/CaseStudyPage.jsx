import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudies'
import useSEO from '../hooks/useSEO'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = caseStudies.find((p) => p.slug === slug)
  const containerRef = useRef(null)

  useSEO({
    title: project ? `${project.title} Case Study | TEONVO` : 'Case Study | TEONVO',
    description: project ? project.intro : 'TEONVO Case Studies',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    
    if (!project) return;

    const ctx = gsap.context(() => {
      // Hero Image Parallax
      gsap.to('.cs-hero-image', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.cs-hero-image-wrap',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // Text Reveal on Scroll
      gsap.utils.toArray('.cs-reveal').forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        })
      })

      // Gallery Stagger
      gsap.from('.cs-gallery-img', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cs-gallery',
          start: 'top 80%',
          once: true
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [slug, project])

  if (!project) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '64px', color: '#fff' }}>Project Not Found</h1>
          <Link to="/work" className="button button-light" style={{ marginTop: '30px' }}>Back to Work</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '88px' }} ref={containerRef}>
        
        {/* Cinematic Hero */}
        <section className="cs-hero section-shell">
          <div className="section-kicker cs-reveal">{project.category}</div>
          <h1 className="cs-reveal">{project.title}</h1>
          <p className="cs-intro cs-reveal">{project.intro}</p>
        </section>

        {/* Parallax Image */}
        <section className="cs-hero-image-wrap">
          <img src={project.heroImage} alt={project.title} className="cs-hero-image" />
        </section>

        {/* Editorial Layout: Sticky Details + Narrative */}
        <section className="cs-editorial section-shell">
          
          {/* Sticky Metadata Sidebar */}
          <aside className="cs-sidebar">
            <div className="cs-meta-block">
              <h4>Client</h4>
              <p>{project.client}</p>
            </div>
            <div className="cs-meta-block">
              <h4>Year</h4>
              <p>{project.year}</p>
            </div>
            <div className="cs-meta-block">
              <h4>Services</h4>
              <ul>{project.services.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div className="cs-meta-block">
              <h4>Website</h4>
              <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="cs-link">{project.url} ↗</a>
            </div>
          </aside>

          {/* Narrative Content */}
          <div className="cs-narrative">
            <div className="cs-text-block cs-reveal">
              <h2>The Challenge</h2>
              <p>{project.challenge}</p>
            </div>
            <div className="cs-text-block cs-reveal">
              <h2>The Solution</h2>
              <p>{project.solution}</p>
            </div>
            <div className="cs-text-block cs-reveal">
              <h2>The Result</h2>
              <p>{project.result}</p>
            </div>
          </div>
        </section>

        {/* Full-Bleed Gallery */}
        <section className="cs-gallery section-shell">
          {project.gallery.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} gallery ${i}`} className="cs-gallery-img" />
          ))}
        </section>

        {/* Next Project CTA */}
        <section className="cs-next section-shell">
          <p>Ready to start your own project?</p>
          <Link to="/contact" className="cs-next-btn">Let's talk ↗</Link>
        </section>

      </main>
      <Footer />
    </>
  )
}
