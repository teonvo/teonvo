const techs = [
  { cat: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { cat: 'Backend', items: ['Node.js', 'Python', 'Express'] },
  { cat: 'AI & ML', items: ['LLM Integrations', 'AI Agents', 'Automation', 'Computer Vision'] },
  { cat: '3D & Motion', items: ['Three.js', 'React Three Fiber', 'GSAP', 'Lenis'] },
  { cat: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { cat: 'Infrastructure', items: ['Vercel', 'Cloud Hosting', 'API Integrations'] }
]
export default function TechStack() {
  return (
    <section className="tech-stack section-shell">
      <div className="section-kicker">04 / TECHNOLOGY</div><h2 style={{ margin: '20px 0 60px' }}>Powered by modern<br/><em>technology.</em></h2>
      <div className="tech-grid">
        {techs.map(t => (
          <div key={t.cat} className="tech-category"><h4>{t.cat}</h4><div className="tech-items">{t.items.map(i => <span key={i} className="tech-pill">{i}</span>)}</div></div>
        ))}
      </div>
    </section>
  )
}


