import useReveal from '../hooks/useReveal'

const steps = [
  { n: '01', t: 'Discover', d: 'We map the problem, the users, and the metrics that matter.' },
  { n: '02', t: 'Design', d: 'Sketches, prototypes, and a system you can build on.' },
  { n: '03', t: 'Build', d: 'Weekly demos. Real code in a real repo. No black boxes.' },
  { n: '04', t: 'Ship & scale', d: 'Launch, instrument, iterate — with you or without us.' },
]

export default function Process() {
  const ref = useReveal()
  return (
    <section id="process" className="section reveal" ref={ref}>
      <div className="container">
        <header className="section__head">
          <p className="eyebrow"><span className="dot" /> Process</p>
          <h2>How we work</h2>
        </header>

        <ol className="process">
          {steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step__n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}


