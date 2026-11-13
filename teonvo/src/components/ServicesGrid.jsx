const services = [
  { num: '01', title: 'Website Design & Development', desc: 'High-performance websites and web applications built to create exceptional digital experiences and deliver real business value.', visual: 'browser' },
  { num: '02', title: 'AI Solutions & Automation', desc: 'Intelligent AI agents and automated workflows that simplify operations, improve efficiency and help businesses work smarter.', visual: 'ai' },
  { num: '03', title: 'SaaS & Software Development', desc: 'From product ideas to scalable digital platforms, we architect secure, future-ready technology solutions.', visual: 'dashboard' },
  { num: '04', title: 'UI/UX & Product Design', desc: 'Intuitive and visually compelling digital experiences that connect user needs with business objectives.', visual: 'ui' },
  { num: '05', title: 'Digital Consultancy', desc: 'Smart technology decisions and clear digital roadmaps to guide your business through transformation.', visual: 'roadmap' },
  { num: '06', title: 'Digital Growth & SEO', desc: 'Strengthen your online presence, improve discoverability, and build sustainable digital growth.', visual: 'growth' }
]
export default function ServicesGrid() {
  return (
    <section id="expertise" className="services-grid-section section-shell">
      <div className="section-heading"><div><div className="section-kicker">01 / EXPERTISE</div><h2>Our expertise.<br/><em>Your next advantage.</em></h2></div></div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-card-v2">
            <div className="service-card-top"><span className="service-num">{s.num}</span><span className="service-icon">↗</span></div>
            <div className={`service-visual-v2 vis-${s.visual}`}>
              {s.visual === 'browser' && <div className="mock-browser"><div className="mock-bar"></div><div className="mock-body"></div></div>}
              {s.visual === 'ai' && <div className="mock-ai"><div className="ring"></div></div>}
              {s.visual === 'dashboard' && <div className="mock-dash"><div className="dash-side"></div><div className="dash-main"></div></div>}
              {s.visual === 'ui' && <div className="mock-ui"><div className="ui-layer"></div><div className="ui-layer back"></div></div>}
              {s.visual === 'roadmap' && <div className="mock-road"><div className="road-node"></div></div>}
              {s.visual === 'growth' && <div className="mock-growth"><div className="bar b1"></div><div className="bar b2"></div><div className="bar b3"></div></div>}
            </div>
            <h3>{s.title}</h3><p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


