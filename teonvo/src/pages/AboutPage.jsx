import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useSEO from '../hooks/useSEO'

gsap.registerPlugin(ScrollTrigger)

// UPDATED TEAM DATA
const team = [
  { name: 'Utkarsh Bisht', role: 'Founder', bio: 'Drives the vision and creative direction, ensuring every project pushes the boundaries of digital design.', image: './WhatsApp Image 2026-11-13 at 3.58.04 AM.jpeg' },
  { name: 'Udit Kandari', role: 'COO', bio: 'Oversees operations and strategy, ensuring seamless delivery and exceptional client experiences.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Rituraj', role: 'Frontend Engineer', bio: 'Builds high-performance, interactive interfaces and architectures that bring complex designs to life.', image: './WhatsApp Image 2026-11-13 at 3.58.03 AM.jpeg' },
  { name: 'Elara', role: 'Social Media Manager', bio: 'Creates engaging digital experiences, builds brand presence, and drives audience engagement through creative social media strategies.', image: './1000289431.jpg'}
]

const values = [
  { num: '01', title: 'Strategy First', desc: 'We don\'t just write code. We understand your business, your users, and your goals before we build.' },
  { num: '02', title: 'Creative Engineering', desc: 'Combining stunning aesthetics with robust, scalable architecture to create digital experiences that perform.' },
  { num: '03', title: 'Intelligent Automation', desc: 'Integrating AI and automation to reduce friction, scale operations, and unlock new business efficiencies.' }
]

export default function AboutPage() {
  const containerRef = useRef(null)

  useSEO({
    title: 'About Us | TEONVO Digital Agency',
    description: 'Meet the team behind TEONVO. We are a premium digital agency combining strategy, design, and engineering to build digital advantages.',
    keywords: 'Teonvo team, digital agency team, AI engineers, web developers, UI UX designers'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    // Force the text to be visible immediately, ignoring the global animation
    document.querySelectorAll('.ab-hero-text-content h1, .ab-hero-text-content p, .ab-hero-text-content .section-kicker').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });

    const ctx = gsap.context(() => {
      gsap.to('.gallery-img-1', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '.ab-gallery', start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.to('.gallery-img-2', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.ab-gallery', start: 'top bottom', end: 'bottom top', scrub: true } })
      gsap.to('.gallery-img-3', { yPercent: -5, ease: 'none', scrollTrigger: { trigger: '.ab-gallery', start: 'top bottom', end: 'bottom top', scrub: true } })
    }, containerRef)

    setTimeout(() => ScrollTrigger.refresh(), 800)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }} ref={containerRef}>
        
        <section className="ab-hero-section">
          <div className="ab-hero-video-block">
            <video autoPlay loop muted playsInline className="ab-hero-video-element" poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop">
              <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
            <div className="ab-hero-video-overlay"></div>
          </div>

          <div className="section-shell ab-hero-text-content">
            <div className="section-kicker">01 / ABOUT TEONVO</div>
            <h1>Not just building digital.<br/><em>Building what's next.</em></h1>
            <p className="ab-sub">We are an independent digital studio combining strategy, creative thinking, and advanced engineering to move ambitious businesses forward.</p>
          </div>
        </section>

        <section className="ab-gallery section-shell">
          <div className="gallery-grid">
            <div className="gallery-item tall"><img src="/WhatsApp Image 2026-11-13 at 8.57.08 PMh.jpeg" alt="Team Meeting" className="gallery-img-1" /></div>
            <div className="gallery-item wide"><img src="/WhatsApp Image 2026-11-13 at 8.57.10 PMa.jpeg" alt="Strategy Session" className="gallery-img-2" /></div>
            <div className="gallery-item tall"><img src="/WhatsApp Image 2026-11-13 at 8.57.08 PM.jpeg" alt="Coding" className="gallery-img-3" /></div>
          </div>
        </section>

        <section className="ab-story section-shell">
          <div className="ab-story-grid">
            <div className="ab-story-left"><h2>We believe technology should do more than <span>look impressive.</span></h2></div>
            <div className="ab-story-right">
              <p className="ab-story-text">At Teonvo, we believe technology should solve real problems, create meaningful experiences, and unlock new possibilities. We don't just write code; we understand your business, your users, and your goals.</p>
              <p className="ab-story-text">From immersive 3D websites to complex AI automation and scalable SaaS platforms, we combine modern engineering with premium design to help you build, evolve, and grow. Every pixel and every line of code is engineered for performance and conversion.</p>
            </div>
          </div>
        </section>

        <section className="ab-values section-shell">
          <div className="section-kicker">02 / OUR PHILOSOPHY</div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.num} className="value-card">
                <span className="value-num">{v.num}</span><h3>{v.title}</h3><p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section section-shell">
          <div className="team-header">
            <div>
              <div className="section-kicker">03 / THE TEAM</div>
              <h2>The minds behind<br/><em>the work.</em></h2>
            </div>
            <p>A collective of engineers, designers, and strategists dedicated to building exceptional digital products.</p>
          </div>

          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-img-wrap"><img src={member.image} alt={member.name} className="team-img" loading="lazy" /></div>
                <div className="team-info">
                  <div className="team-top"><h3>{member.name}</h3><span className="team-role">{member.role}</span></div>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Twitter">x</a></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="founder-cta" style={{ marginTop: '80px', textAlign: 'center' }}>
            <Link to="/founder" className="button button-light">Read a letter from our Founder <span>↗</span></Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
