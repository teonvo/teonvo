import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesHero from '../components/ServicesHero'
import ServicesSection02 from '../components/ServicesSection02'
import ServicesGrid from '../components/ServicesGrid'
import DetailedServices from '../components/DetailedServices'
import ServicesProcess from '../components/ServicesProcess'
import TechStack from '../components/TechStack'
import FAQ from '../components/FAQ'
import ServicesCTA from '../components/ServicesCTA'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.fromTo('.process-line', { height: 0 }, { height: '100%', ease: 'none', scrollTrigger: { trigger: '.process-timeline', start: 'top 70%', end: 'bottom 50%', scrub: true } })
    const reveals = document.querySelectorAll('.service-card-v2, .detail-content, .p-step, .tech-category, .faq-item')
    reveals.forEach(el => { ScrollTrigger.create({ trigger: el, start: 'top 85%', onEnter: () => el.classList.add('visible'), once: true }); el.classList.add('reveal') })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])
  return (<><Navbar /><main><ServicesHero /><ServicesSection02 /><ServicesGrid /><DetailedServices /><ServicesProcess /><TechStack /><FAQ /><ServicesCTA /></main><Footer /></>)
}


