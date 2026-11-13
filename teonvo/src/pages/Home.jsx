import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import HomeServices from '../components/HomeServices'
import Statement from '../components/Statement'
import HomeWork from '../components/HomeWork'
import Approach from '../components/Approach'
import AboutBand from '../components/AboutBand'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrambleText = (element) => {
  if (element.children.length > 0) return;
  if (element.dataset.scrambled) return;
  element.dataset.scrambled = "true"

  const originalText = element.innerText
  const chars = '!<>-_\\\\/[]{}—=+*^?#________'
  let frame = 0
  const totalFrames = 30
  
  const update = () => {
    let newText = ''
    for (let i = 0; i < originalText.length; i++) {
      if (originalText[i] === ' ' || originalText[i] === '\\n') { newText += originalText[i] }
      else if (frame / totalFrames > i / originalText.length) { newText += originalText[i] }
      else { newText += chars[Math.floor(Math.random() * chars.length)] }
    }
    element.innerText = newText
    frame++
    if (frame <= totalFrames) requestAnimationFrame(update)
    else element.innerText = originalText
  }
  update()
}

export default function Home() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const reveals = document.querySelectorAll('.section-kicker, .intro h2, .service-card, .statement h2, .work-card, .step, .about-band, .contact h2')
    
    reveals.forEach((el) => {
      el.classList.add('reveal')
      ScrollTrigger.create({
        trigger: el, start: 'top 85%',
        onEnter: () => {
          el.classList.add('visible')
          // ONLY apply scramble text on Desktop to prevent mobile freezing
          if (!isMobile && (el.tagName === 'H2' || el.tagName === 'H1')) {
            scrambleText(el)
          }
        }, once: true
      })
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Intro />
        <HomeServices />
        <Statement />
        <HomeWork />
        <Approach />
        <AboutBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
