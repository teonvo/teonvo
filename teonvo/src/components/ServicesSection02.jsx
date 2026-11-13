import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const services = [
  { id: '01', title: 'Design & Development', desc: 'High-performance websites...', link: '#' },
  { id: '02', title: 'AI & Automation', desc: 'Intelligent AI agents...', link: '#' },
  { id: '03', title: 'SaaS & Strategy', desc: 'From product ideas to...', link: '#' }
]
export default function ServicesSection02() {
  const containerRef = useRef(null)
  useEffect(() => { const ctx = gsap.context(() => { gsap.from('.rj-headline-line', { y: '100%', opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }); gsap.from('.rj-service-row', { y: 50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.rj-services-list', start: 'top 85%' } }) }, containerRef); return () => ctx.revert() }, [])
  return (
    <section className="rj-expertise-section" ref={containerRef}>
      <div className="rj-bg-glow"></div>
      <div className="rj-container section-shell">
        <div className="rj-left-col">
          <div className="rj-label"><span className="line"></span> 02 / OUR EXPERTISE</div>
          <h2 className="rj-headline">
            <span className="rj-headline-mask"><span className="rj-headline-line">We turn ideas</span></span>
            <span className="rj-headline-mask"><span className="rj-headline-line">into <em>digital</em></span></span>
            <span className="rj-headline-mask"><span className="rj-headline-line"><em>advantages.</em></span></span>
          </h2>
          <p className="rj-desc">Technology should do more than look impressive. It should solve real problems, create meaningful experiences and move businesses forward.</p>
        </div>
        <div className="rj-right-col">
          <div className="rj-services-list">
            {services.map((s) => (
              <a href={s.link} key={s.id} className="rj-service-row">
                <div className="rj-sr-content">
                  <span className="rj-sr-num">{s.id}</span><h3 className="rj-sr-title">{s.title}</h3><span className="rj-sr-desc">{s.desc}</span><span className="rj-sr-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


