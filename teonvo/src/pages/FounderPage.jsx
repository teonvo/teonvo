import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useSEO from '../hooks/useSEO'

gsap.registerPlugin(ScrollTrigger)

export default function FounderPage() {
  const containerRef = useRef(null)

  useSEO({
    title: 'A Letter from the Founder | TEONVO',
    description: 'Read the vision and philosophy behind TEONVO from our Founder, Utkarsh Bisht.',
    keywords: 'Teonvo founder, Utkarsh Bisht, digital agency founder, tech entrepreneur'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Force text visibility to bypass global animation conflicts
    document.querySelectorAll('.fd-hero-copy h1, .fd-hero-copy p, .fd-letter p, .fd-quote').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });

    const ctx = gsap.context(() => {
      gsap.from('.fd-image', { scale: 1.05, opacity: 0, duration: 1.5, ease: 'power4.out', delay: 0.2 })
      gsap.from('.fd-title', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 })
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '88px' }} ref={containerRef}>
        
        {/* HERO SECTION */}
        <section className="fd-hero section-shell">
          <div className="fd-hero-grid">
            <div className="fd-image-wrap">
              <img src="/WhatsApp Image 2026-11-13 at 3.58.04 AM.jpeg" alt="Utkarsh Bisht, Founder" className="fd-image" />
            </div>
            <div className="fd-hero-copy">
              <div className="section-kicker">FOUNDER'S LETTER</div>
              <h1 className="fd-title">Building the <em>future</em><br/>of digital.</h1>
              <p className="fd-role">Utkarsh Bisht<br/><span>Founder</span></p>
            </div>
          </div>
        </section>

        {/* LETTER SECTION */}
        <section className="fd-letter section-shell">
          <div className="fd-letter-content">
            <p className="fd-text fd-dropcap">
              When I started Teonvo, the digital landscape was crowded with noise. Agencies were churning out cookie-cutter websites and calling it "digital transformation." I knew we had to do things differently.
            </p>
            <p className="fd-text">
              We didn't want to be just another web development shop. We wanted to be a true digital partner—a studio that combined the precision of modern engineering with the boldness of high-end creative design.
            </p>
            
            <blockquote className="fd-quote">
              "Technology should do more than look impressive. It should move businesses forward."
            </blockquote>

            <p className="fd-text">
              Today, we build AI agents that automate the repetitive. We architect SaaS platforms that scale to millions. We craft immersive 3D web experiences that captivate audiences. But no matter how complex the technology gets, our focus remains exactly the same: <strong>Solving real problems.</strong>
            </p>
            <p className="fd-text">
              We don't just take orders. We challenge assumptions, we push boundaries, and we obsess over the details that most people miss. If you're looking for a vendor, we might not be the right fit. But if you're looking for a partner to build your next digital advantage, we should talk.
            </p>
            
            {/* CUSTOM TYPOGRAPHY SIGNATURE (No broken images) */}
            <div className="fd-signature">
              <h2 style={{ fontFamily: 'cursive', fontSize: '48px', color: '#fff', opacity: 0.8, margin: 0, fontStyle: 'italic', letterSpacing: '2px' }}>
                Utkarsh Bisht
              </h2>
              <p>Founder, TEONVO</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
