import { useState } from 'react'
const faqs = [
  { q: 'What services does Teonvo provide?', a: 'We provide website design and development, AI solutions, SaaS development, UI/UX design, digital consultancy, and SEO optimization.' },
  { q: 'Can Teonvo build custom websites?', a: 'Yes, every website we build is custom-coded from scratch to ensure maximum performance, unique design, and exact alignment with your business goals.' },
  { q: 'Does Teonvo develop AI agents?', a: 'Absolutely. We build custom AI agents for customer support, sales automation, and internal business workflows using the latest LLMs and automation frameworks.' },
  { q: 'Can Teonvo build SaaS applications?', a: 'Yes, we transform ideas into fully scalable SaaS platforms, handling everything from database architecture to frontend user interfaces.' },
  { q: 'How does the project development process work?', a: 'We follow a four-step process: Discover, Strategize, Build, and Evolve. We work collaboratively with you at every stage.' }
]
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section className="faq-section section-shell">
      <div className="section-kicker">05 / FAQ</div><h2 style={{ margin: '20px 0 60px' }}>Frequently asked<br/><em>questions.</em></h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}><span>{f.q}</span><span className="faq-icon">{openIndex === i ? '−' : '+'}</span></button>
            <div className="faq-a" style={{ maxHeight: openIndex === i ? '200px' : '0', opacity: openIndex === i ? 1 : 0 }}><p>{f.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}


