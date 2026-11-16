import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useSEO from '../hooks/useSEO'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, submitting, success

  useSEO({
    title: 'Let\'s Talk | Contact TEONVO',
    description: 'Ready to build your next digital advantage? Contact TEONVO to discuss your project requirements and get a custom quote.',
    keywords: 'contact Teonvo, hire digital agency, web development quote, AI agency contact'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '88px' }}>
        
        <section className="ct-hero section-shell">
          <div className="section-kicker">START A CONVERSATION</div>
          <h1>Let's build<br/><em>something great.</em></h1>
        </section>

        <section className="ct-layout section-shell">
          
          {/* LEFT: Direct Info */}
          <div className="ct-info">
            <p className="ct-desc">
              Have an idea, a challenge, or a vision for your business? We're ready to help you turn it into something real. Fill out the form or reach out directly.
            </p>
            
            <div className="ct-details">
              <div className="ct-detail-block">
                <span className="ct-label">Email Us Directly</span>
                <a href="mailto:teonvo@gmail.com" className="ct-value">itsteonvo@gmail.com</a>
              </div>
              <div className="ct-detail-block">
                <span className="ct-label">Book a Call</span>
                <a href="#" className="ct-value" style={{ textDecoration: 'underline' }}>Schedule a 30-min discovery call ↗</a>
              </div>
              <div className="ct-detail-block">
                <span className="ct-label">Location</span>
                <span className="ct-value">Remote / Global</span>
              </div>
              <div className="ct-detail-block">
                <span className="ct-label">Availability</span>
                <span className="ct-value" style={{ color: '#4fd1ff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4fd1ff', display: 'inline-block' }}></span>
                  Accepting New Projects
                </span>
              </div>
            </div>
            
            <div className="ct-socials">
              <a href="#">LinkedIn ↗</a>
              <a href="#">Twitter ↗</a>
              <a href="#">Instagram ↗</a>
            </div>
          </div>

          {/* RIGHT: Premium Form */}
          <div className="ct-form-wrap">
            <form onSubmit={handleSubmit} className="ct-form">
              
              <div className="ct-input-row">
                <div className="ct-input-group">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="ct-input-group">
                  <label>Email Address *</label>
                  <input type="email" required placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>

              <div className="ct-input-row">
                <div className="ct-input-group">
                  <label>Company</label>
                  <input type="text" placeholder="Your Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <div className="ct-input-group">
                  <label>Project Type *</label>
                  <div className="ct-select-wrap">
                    <select required value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}>
                      <option value="" disabled>Select a service</option>
                      <option value="website">Website Design & Dev</option>
                      <option value="ai">AI Solutions & Automation</option>
                      <option value="saas">SaaS Development</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="ct-select-arrow">↓</span>
                  </div>
                </div>
              </div>

              {/* UPDATED PRICING TIERS */}
              <div className="ct-input-group">
                <label>Estimated Budget</label>
                <div className="ct-select-wrap">
                  <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
                    <option value="" disabled>Select a budget range</option>
                    <option value="600">$600 - $1,000</option>
                    <option value="1k">$1,000 - $5,000</option>
                    <option value="5k">$5,000 - $10,000</option>
                    <option value="10k">$10,000+</option>
                  </select>
                  <span className="ct-select-arrow">↓</span>
                </div>
              </div>

              <div className="ct-input-group">
                <label>Project Details *</label>
                <textarea required rows="5" placeholder="Tell us about your goals, timeline, and vision..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>

              <button type="submit" className={`ct-submit ${status === 'submitting' ? 'loading' : ''} ${status === 'success' ? 'success' : ''}`} disabled={status === 'submitting' || status === 'success'}>
                {status === 'idle' && 'Send Message ↗'}
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && 'Message Sent Successfully ✓'}
              </button>
            </form>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
