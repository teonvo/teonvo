import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: '01', title: 'BOOTS ON HYGHT', desc: 'Premium immersive travel and trekking digital experience.', image: './public/WhatsApp Image 2026-11-03 at 2.27.56 AM.jpeg' },
  { id: '02', title: 'MAKHANAM', desc: 'Digital presence for a raw makhana manufacturing brand.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop' },
  { id: '03', title: 'COSMIC HIMALAYA', desc: 'Premium Nepal trekking and travel website.', image: '/WhatsApp Image 2026-11-13 at 8.57.09 PMm.jpeg' },
  { id: '04', title: 'KUMAON HERBAL', desc: 'Digital commerce and online brand experience.', image: '/WhatsApp Image 2026-11-13 at 8.57.10 PMe.jpeg' },
  { id: '05', title: 'PRECIOUS MOMENTS SAFARIS', desc: 'Premium safari booking and travel experience.', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop' },
  { id: '06', title: 'TEONVO PLATFORM', desc: 'Internal tools and digital infrastructure.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop' }
]

export default function ServicesWork() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sw-header-anim', { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } })
      gsap.from('.sw-card', { y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.sw-grid', start: 'top 85%' } })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sw-section" ref={containerRef} id="work">
      <div className="section-shell">
        <div className="sw-header">
          <div className="sw-header-left">
            <div className="section-kicker sw-header-anim">03 / SELECTED WORK</div>
            <h2 className="sw-header-anim">Our work speaks<br/><em>through experience.</em></h2>
          </div>
          <div className="sw-header-right sw-header-anim">
            <p>We design, build and scale digital solutions that solve real problems, create meaningful experiences and move businesses forward.</p>
          </div>
        </div>

        <div className="sw-grid">
          {projects.map((p) => (
            <a href="#contact" key={p.id} className="sw-card">
              <div className="sw-card-img-wrap">
                <img src={p.image} alt={p.title} className="sw-card-img" loading="lazy" />
              </div>
              <div className="sw-card-content">
                <div className="sw-card-top">
                  <span className="sw-card-num">{p.id}</span>
                  <span className="sw-card-arrow">↗</span>
                </div>
                <h3 className="sw-card-title">{p.title}</h3>
                <p className="sw-card-desc">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


