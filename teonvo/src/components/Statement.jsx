import ScrollKnot from './ScrollKnot'
export default function Statement() {
  return (
    <section className="statement section-shell" style={{ position: 'relative', overflow: 'hidden' }}>
      <ScrollKnot />
      <div className="statement-grid" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-kicker">A BETTER WAY FORWARD</span>
        <h2>Less noise.<br/><span>More meaningful</span><br/>progress.</h2>
        <div className="statement-side"><div className="mini-cross">✳</div><p>We bring strategy, creative thinking and engineering together — so every part of your digital presence works harder.</p></div>
      </div>
    </section>
  )
}


