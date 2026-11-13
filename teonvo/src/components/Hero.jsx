import { useEffect, useState } from 'react'
import Hero3D from './Hero3D'
import Magnetic from './Magnetic'

export default function Hero() {
  return (
    <section className="hero">
      <Hero3D />
      <div className="hero-overlay"></div>
      
      <div className="hero-container section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"></span> DIGITAL PARTNER FOR WHAT'S NEXT</div>
          <h1>We make<br/><em>ambition</em> work.</h1>
          <p className="hero-sub">Websites, intelligent systems and digital strategy — engineered to move your business forward.</p>
          <div className="hero-actions">
            <Magnetic strength={30}><a href="/contact" className="button button-light">Start a project <span>↗</span></a></Magnetic>
            <Magnetic strength={20}><a href="/work" className="text-link">Explore our work <span>↓</span></a></Magnetic>
          </div>
          <div className="hero-footnote"><span>INDEPENDENT DIGITAL STUDIO</span><span>STRATEGY · DESIGN · TECHNOLOGY</span></div>
        </div>
      </div>
      <div className="hero-scroll"><span></span> SCROLL TO EXPLORE</div>
    </section>
  )
}
