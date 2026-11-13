import TiltCard from './TiltCard'
import AICard3D from './AICard3D'

export default function Services() {
  return (
    <section className="services section-shell" id="services">
      <div className="section-heading">
        <div><div className="section-kicker">02 / WHAT WE DO</div><h2>Built around<br/><em>your next move.</em></h2></div>
        <p>One connected team for the thinking, design and technology behind your next stage of growth.</p>
      </div>
      <div className="service-grid">
        <TiltCard className="service-card service-featured">
          <div className="service-top"><span>01 — DIGITAL EXPERIENCES</span><span className="service-icon">↗</span></div>
          <div className="service-visual visual-web">
            <div className="browser-window">
              <div className="browser-bar"><i></i><i></i><i></i><span>yourbrand.com</span></div>
              <div className="browser-content">
                <b>Make your<br/>first impression<br/><em>unforgettable.</em></b>
                <div className="browser-lines"><i></i><i></i><i></i></div>
                <div className="browser-pill"></div>
              </div>
            </div>
          </div>
          <h3>Websites & digital products</h3><p>High-performance websites and thoughtful digital experiences that turn attention into action.</p>
          <div className="tag-list"><span>Web design</span><span>Development</span><span>E-commerce</span><span>3D experiences</span></div>
        </TiltCard>
        
        <TiltCard className="service-card">
          <div className="service-top"><span>02 — INTELLIGENT SYSTEMS</span><span className="service-icon">↗</span></div>
          <div className="service-visual visual-ai" style={{ position: 'relative', overflow: 'hidden' }}>
            <AICard3D />
            <div className="ai-core" style={{ position: 'relative', zIndex: 2 }}>AI</div>
            <div className="ai-ring ring-a"></div><div className="ai-ring ring-b"></div>
          </div>
          <h3>AI & automation</h3><p>Practical AI agents and automations that reduce repetitive work and unlock better ways to operate.</p>
          <div className="tag-list"><span>AI agents</span><span>Workflow automation</span><span>Integrations</span></div>
        </TiltCard>

        <TiltCard className="service-card">
          <div className="service-top"><span>03 — CLARITY & DIRECTION</span><span className="service-icon">↗</span></div>
          <div className="service-visual visual-strategy">
            <div className="strategy-axis"></div>
            <div className="strategy-card card-one"><small>01 / DISCOVER</small><b>Understand<br/>the challenge.</b></div>
            <div className="strategy-card card-two"><small>02 / DEFINE</small><b>Find the<br/>opportunity.</b></div>
            <div className="strategy-card card-three"><small>03 / DELIVER</small><b>Make it<br/>happen.</b></div>
          </div>
          <h3>Digital consultancy</h3><p>Clear, actionable guidance on technology, product direction and digital transformation.</p>
          <div className="tag-list"><span>Digital strategy</span><span>Product thinking</span><span>Tech consulting</span></div>
        </TiltCard>
      </div>
    </section>
  )
}


