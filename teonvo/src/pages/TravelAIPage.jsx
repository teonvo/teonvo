import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TravelAvatar from '../components/TravelAI/TravelAvatar'
import { useTravelAI } from '../components/TravelAI/useTravelAI'
import '../components/TravelAI/TravelAI.css'

const SUGGESTED_PROMPTS = [
  "Plan a 5-day Everest trek",
  "What is the budget for beginners?",
  "How hard is Island Peak?",
  "I want to book a trip"
]

export default function TravelAIPage() {
  const { state, messages, sendMessage, startListening, isTyping, resetChat } = useTravelAI()
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage(input)
    setInput('')
  }

  const handleChipClick = (prompt) => {
    sendMessage(prompt)
  }

  return (
    <div className="travel-app">
      <Navbar />
      
      <div className="travel-hero">
        
        {/* LEFT: Pitch & Value Proposition */}
        <div className="travel-copy">
          <div className="section-kicker" style={{ color: '#d4af37' }}>CLIENT PREVIEW — AI TRAVEL COMPANION</div>
          <h1>Turn visitors into <em>bookings.</em></h1>
          <p>
            This is a live prototype of the AI assistant we build for trekking and tourism brands. It acts as a 24/7 digital guide, instantly answering questions, generating itineraries, and capturing leads.
          </p>

          <ul className="travel-features">
            <li>Instant itinerary generation</li>
            <li>Smart budget estimation</li>
            <li>Trek difficulty & prep advice</li>
            <li>24/7 lead capture & booking assistance</li>
          </ul>

          <div className="travel-trust">
            <p style={{ fontSize: '13px', color: '#8ea899', marginTop: '20px' }}>
              ✦ Fully customizable to your brand<br/>
              ✦ Connects to your CRM or email<br/>
              ✦ No hidden API costs
            </p>
          </div>
        </div>

        {/* RIGHT: 3D Avatar & Chat Interface */}
        <div className="travel-interface">
          
          <div className="avatar-wrapper">
            <TravelAvatar />
            <div className="avatar-state-indicator">
              {state === 'speaking' ? '🗣️ Speaking' : state === 'listening' ? '🎤 Listening' : state === 'thinking' ? '🧠 Thinking' : '🟢 Online'}
            </div>
          </div>

          <div className="travel-chat-panel">
            <div className="chat-header">
              <span>Alpine Explorer Assistant</span>
              <button onClick={resetChat} className="reset-btn">Reset</button>
            </div>

            <div className="chat-history">
              {messages.map((m, i) => (
                <div key={i} className={`chat-msg ${m.role}`}>
                  {m.content}
                </div>
              ))}
              {isTyping && (
                <div className="chat-msg assistant typing-indicator">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="quick-prompts">
              {SUGGESTED_PROMPTS.map((p, i) => (
                <button key={i} onClick={() => handleChipClick(p)} className="prompt-chip">
                  {p}
                </button>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="chat-input-row">
              <input 
                type="text" 
                className="travel-chat-input" 
                placeholder="Ask about itineraries, budget, or difficulty..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="travel-btn">Send</button>
            </form>
            
            <button 
              onClick={startListening}
              className={`travel-btn voice-btn ${state === 'listening' ? 'listening' : ''}`}
            >
              {state === 'listening' ? 'Listening...' : '🎤 Speak to Guide'}
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}


