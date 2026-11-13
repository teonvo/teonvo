import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// EXACT SAME SCRAMBLE FUNCTION FROM HOME PAGE
const scrambleText = (element) => {
  const originalText = element.innerText
  const chars = '!<>-_\\\\/[]{}—=+*^?#________'
  let frame = 0
  const totalFrames = 30
  
  const update = () => {
    let newText = ''
    for (let i = 0; i < originalText.length; i++) {
      if (originalText[i] === ' ' || originalText[i] === '\\n') {
        newText += originalText[i]
      } else if (frame / totalFrames > i / originalText.length) {
        newText += originalText[i]
      } else {
        newText += chars[Math.floor(Math.random() * chars.length)]
      }
    }
    element.innerText = newText
    frame++
    if (frame <= totalFrames) requestAnimationFrame(update)
    else element.innerText = originalText
  }
  update()
}

export default function ServicesIntro() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Replicate exact Home page reveal logic
    const reveals = sectionRef.current.querySelectorAll('.intro-headline, .intro-col')
    
    reveals.forEach((el) => {
      el.classList.add('reveal')
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          el.classList.add('visible')
          // Apply scramble effect only to the main H1 and H2
          if (el.tagName === 'H1' || el.tagName === 'H2') {
            scrambleText(el)
          }
        },
        once: true
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="services-intro-section" ref={sectionRef}>
      <div className="section-shell">
        
        <div className="intro-header">
          <h1 className="intro-headline">
            We turn ideas into <em>digital advantages.</em>
          </h1>
          
          <h2 className="intro-headline intro-sub">
            Technology should do more than look impressive. It should move businesses forward.
          </h2>
        </div>

        <div className="intro-grid">
          <div className="intro-col">
            <h3>Design & Development</h3>
            <p className="intro-paragraph">
              We craft high-performance, visually stunning websites and web applications. From immersive 3D experiences to scalable e-commerce platforms, our engineering is built to convert and scale with your business.
            </p>
          </div>
          
          <div className="intro-col">
            <h3>AI & Automation</h3>
            <p className="intro-paragraph">
              We integrate intelligent AI agents and automated workflows directly into your operations. We build systems that learn, adapt, and eliminate repetitive tasks so your team can focus on high-impact growth.
            </p>
          </div>

          <div className="intro-col">
            <h3>SaaS & Strategy</h3>
            <p className="intro-paragraph">
              From transforming napkin sketches into scalable SaaS products to guiding your digital transformation, we architect secure, future-proof technology that delivers a tangible return on investment.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}


