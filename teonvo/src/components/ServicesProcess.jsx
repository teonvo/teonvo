export default function ServicesProcess() {
  return (
    <section className="process-section section-shell">
      <div className="section-heading" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-kicker">03 / HOW WE WORK</div><h2 style={{ marginTop: '20px' }}>From challenge<br/>to <em>solution.</em></h2>
      </div>
      <div className="process-timeline">
        <div className="process-line"></div>
        <div className="process-steps">
          <div className="p-step"><div className="p-dot"></div><span>01</span><h3>Discover</h3><p>Understand the business, users, challenges and objectives.</p></div>
          <div className="p-step"><div className="p-dot"></div><span>02</span><h3>Strategize</h3><p>Develop the right solution, technology and implementation plan.</p></div>
          <div className="p-step"><div className="p-dot"></div><span>03</span><h3>Build</h3><p>Design, engineer, integrate and test the solution.</p></div>
          <div className="p-step"><div className="p-dot"></div><span>04</span><h3>Evolve</h3><p>Launch, optimize and continue improving.</p></div>
        </div>
      </div>
    </section>
  )
}


