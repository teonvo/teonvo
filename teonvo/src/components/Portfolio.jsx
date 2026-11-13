import useReveal from '../hooks/useReveal'

const projects = [
  {
    tag: 'AI · SaaS',
    title: 'Nimbus — AI support copilot',
    text: 'A RAG-powered copilot that cut first-response time by 68% for a 40-seat support team.',
  },
  {
    tag: 'Web · E-commerce',
    title: 'Atlas — headless storefront',
    text: 'Rebuilt storefront on a headless stack. 2.3s → 0.6s LCP, +34% conversion.',
  },
  {
    tag: 'AI · Fintech',
    title: 'Meridian — underwriting agent',
    text: 'Document-grounded underwriting assistant that processes 1,200 applications a day.',
  },
]

export default function Portfolio() {
  const ref = useReveal()
  return (
    <section id="work" className="section reveal" ref={ref}>
      <div className="container">
        <header className="section__head">
          <p className="eyebrow"><span className="dot" /> Selected work</p>
          <h2>Recent builds</h2>
        </header>

        <div className="work">
          {projects.map((p) => (
            <article key={p.title} className="work__item">
              <p className="work__tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <a href="#contact" className="link">Read case study →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


