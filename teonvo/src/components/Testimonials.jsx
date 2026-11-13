import useReveal from '../hooks/useReveal'

const quotes = [
  {
    quote:
      'TEONVO shipped a working AI product in eight weeks. Most agencies were still scoping at that point.',
    name: 'Priya N.',
    role: 'VP Product, Nimbus',
  },
  {
    quote:
      'The web rebuild paid for itself in one quarter. Performance and conversion both went up.',
    name: 'Marcus R.',
    role: 'Founder, Atlas',
  },
]

export default function Testimonials() {
  const ref = useReveal()
  return (
    <section className="section reveal" ref={ref}>
      <div className="container">
        <header className="section__head">
          <p className="eyebrow"><span className="dot" /> Signal</p>
          <h2>What partners say</h2>
        </header>

        <div className="quotes">
          {quotes.map((q) => (
            <figure key={q.name} className="quote">
              <blockquote>“{q.quote}”</blockquote>
              <figcaption>
                <strong>{q.name}</strong>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}


