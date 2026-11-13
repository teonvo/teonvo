import { useEffect, useRef, useState } from 'react'
import ServicesHero3D from './ServicesHero3D'
import Magnetic from './Magnetic'
import gsap from 'gsap'

export default function ServicesHero() {
  const titleRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => { 
    setIsMobile(window.innerWidth <= 768)
    const ctx = gsap.context(() => { 
      gsap.from('.sh-anim', { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }) 
    }, titleRef)
    return () => ctx.revert() 
  }, [])

  return (
    <section className="services-hero section-shell" ref={titleRef}>
      <div className="services-hero-copy">
        <div className="eyebrow sh-anim"><span className="status-dot"></span> WHAT WE DO / TEONVO SERVICES</div>
        <h1 className="sh-anim">We turn ideas<br/>into digital<br/><em>advantages.</em></h1>
        <p className="hero-sub sh-anim">From exceptional websites to intelligent AI systems, we combine design, technology and strategy to help ambitious businesses move forward.</p>
        <div className="hero-actions sh-anim">
          <Magnetic strength={30}><a href="#contact-services" className="button button-light">Discuss Your Project <span>↗</span></a></Magnetic>
          <Magnetic strength={20}><a href="#expertise" className="text-link">Explore Services <span>↓</span></a></Magnetic>
        </div>
      </div>
      {!isMobile && (
        <div className="services-hero-visual">
          <ServicesHero3D />
        </div>
      )}
    </section>
  )
}
