import useReveal from '../hooks/useReveal'

const items = [
  { value: '40+', label: 'Products shipped' },
  { value: '12', label: 'Industries served' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '6', label: 'Countries' },
]

export default function Stats() {
  const ref = useReveal()
  return (
    <section className="stats reveal" ref={ref}>
      <div className="container stats__grid">
        {items.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}


