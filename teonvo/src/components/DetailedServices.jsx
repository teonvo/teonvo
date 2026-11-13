export default function DetailedServices() {
  const details = [
    { 
      num: '01', 
      title: 'Your website is your digital first impression.', 
      desc: 'We create custom websites that combine aesthetics, performance, accessibility and business functionality.', 
      reverse: false, 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      num: '02', 
      title: 'Make intelligence part of your business.', 
      desc: 'Custom AI agents and automation can improve business operations, customer interactions and internal workflows.', 
      reverse: true, 
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      num: '03', 
      title: 'Turn your product idea into reality.', 
      desc: 'Teonvo builds custom digital products and scalable software platforms. From concept to deployment.', 
      reverse: false, 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      num: '04', 
      title: 'Designed for people. Engineered for purpose.', 
      desc: 'User research, interaction design, interface systems and user-focused development.', 
      reverse: true, 
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      num: '05', 
      title: 'The right technology starts with the right strategy.', 
      desc: 'We guide businesses through digital transformation and technology decisions.', 
      reverse: false, 
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      num: '06', 
      title: 'Build visibility. Create momentum.', 
      desc: 'SEO, technical optimization, performance and conversion improvements.', 
      reverse: true, 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop' 
    }
  ]

  return (
    <section className="detailed-services section-shell">
      {details.map((d) => (
        <div key={d.num} className={`detail-row ${d.reverse ? 'reverse' : ''}`}>
          <div className="detail-content">
            <span className="detail-num">{d.num}</span>
            <h2>{d.title}</h2>
            <p>{d.desc}</p>
            <a href="#contact-services" className="button button-light" style={{ marginTop: '30px' }}>Discuss this service <span>↗</span></a>
          </div>
          
          {/* Replaced the placeholder with the image */}
          <div className="detail-visual">
            <img src={d.image} alt={d.title} className="detail-img" loading="lazy" />
          </div>
          
        </div>
      ))}
    </section>
  )
}
