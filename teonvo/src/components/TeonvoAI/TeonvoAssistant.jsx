import { useAssistant } from '../../context/AssistantContext'
import Avatar3D from './Avatar3D'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Assistant.css'

export default function TeonvoAssistant() {
  const { isIntro, enterWebsite, isMinimized, setIsMinimized, status, handleListen, handleTextSubmit, messages, aiStatus, initVoiceExperience } = useAssistant()
  const [inputText, setInputText] = useState('')

  // FULLSCREEN INTRO
  if (isIntro) {
    return (
      <div className="ai-fullscreen">
        <div className="ai-3d-container">
          <Avatar3D />
        </div>
        <div className="ai-intro-content">
          <div className="ai-kicker">TEONVO AI — DIGITAL AMBASSADOR</div>
          <h1>Meet your <em>virtual guide.</em></h1>
          
          {/* Description of what the AI does */}
          <div className="ai-features-list">
            <div className="ai-feature-item"><span>✦</span> Navigate the website for you</div>
            <div className="ai-feature-item"><span>✦</span> Explain our services & work</div>
            <div className="ai-feature-item"><span>✦</span> Answer questions in real-time</div>
          </div>

          <p className="ai-intro-sub">Experience the future of digital agency interaction with our local, privacy-first AI assistant.</p>
          
          {aiStatus === 'uninitialized' ? (
            <button className="ai-btn-primary" onClick={initVoiceExperience}>
              Enable Voice Experience
            </button>
          ) : aiStatus === 'loading' ? (
            <button className="ai-btn-primary loading" disabled>
              Loading AI Engine...
            </button>
          ) : (
            <button className="ai-btn-primary" onClick={enterWebsite}>
              Explore Website <span>↗</span>
            </button>
          )}
        </div>
      </div>
    )
  }

  // FLOATING WIDGET
  return (
    <motion.div 
      className={`ai-widget ${isMinimized ? 'minimized' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isMinimized ? (
        <button className="ai-restore-btn" onClick={() => setIsMinimized(false)}>
          <Avatar3D />
        </button>
      ) : (
        <>
          <div className="ai-widget-header">
            <div className="ai-widget-title">
              <span className="status-dot"></span> TEONVO AI
            </div>
            <div className="ai-widget-controls">
              <button onClick={() => setIsMinimized(true)}>−</button>
            </div>
          </div>
          
          <div className="ai-widget-visual">
            <Avatar3D />
            {status === 'thinking' && <div className="ai-thinking-text">Processing...</div>}
          </div>
          
          <div className="ai-widget-chat">
            {messages.slice(-3).map((m, i) => (
              <div key={i} className={`ai-msg ${m.role}`}>
                {m.content}
              </div>
            ))}
          </div>
          
          <div className="ai-widget-controls-bottom">
            <form 
              className="ai-input-row"
              onSubmit={(e) => {
                e.preventDefault();
                handleTextSubmit(inputText);
                setInputText('');
              }}
            >
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button type="submit" className="ai-send-btn">↑</button>
            </form>
            
            <button 
              className={`ai-mic-btn ${status === 'listening' ? 'active' : ''}`} 
              onClick={handleListen}
            >
              {status === 'speaking' ? 'Stop Speaking' : status === 'listening' ? 'Listening...' : '🎤 Talk to AI'}
            </button>
          </div>
        </>
      )}
    </motion.div>
  )
}


