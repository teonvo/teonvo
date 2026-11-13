import { useState, useRef, useEffect } from 'react'

const initialMessages = [
  { 
    role: 'assistant', 
    content: "Welcome to Alpine Explorer! I'm your AI travel guide. I can help you plan itineraries, estimate budgets, or find the perfect trek for your experience level. How can I help you today?" 
  }
]

export function useTravelAI() {
  const [state, setState] = useState('idle') // idle, listening, thinking, speaking
  const [messages, setMessages] = useState(initialMessages)
  const [isTyping, setIsTyping] = useState(false)
  
  const sendMessage = async (text) => {
    setMessages(prev => [...prev, { role: 'user', content: text }])
    setState('thinking')
    setIsTyping(true)

    // Simulate AI thinking/network delay
    setTimeout(() => {
      const q = text.toLowerCase()
      let response = "That sounds exciting! To give you the best recommendation, are you looking for a beginner-friendly trek or a challenging high-altitude expedition?"

      // Intent: Itinerary
      if (q.includes('everest') || q.includes('ebc')) {
        response = "Everest Base Camp (EBC) is our most iconic trek. Here is a standard 12-day itinerary:\n\n• Days 1-2: Kathmandu to Lukla flight & trek to Phakding\n• Days 3-6: Trek through Namche Bazaar to Dingboche (Acclimatization)\n• Days 7-9: Lobuche to Gorak Shep & Everest Base Camp\n• Days 10-12: Descend to Lukla & fly back\n\nWould you like me to connect you with our human experts to get a detailed quote?"
      } else if (q.includes('itinerary') || q.includes('plan')) {
        response = "Here is a sample 5-day Himalayan trek itinerary:\n\n• Day 1: Arrival & Briefing\n• Day 2: Acclimatization Trek (4 hours)\n• Day 3: Summit Push\n• Day 4: Descend & Cultural Tour\n• Day 5: Departure\n\nWould you like to proceed with booking this?"
      } 
      // Intent: Budget
      else if (q.includes('budget') || q.includes('cost') || q.includes('price')) {
        response = "Our Himalayan treks typically range from $800 to $1,500 per person. This covers permits, guides, porters, and accommodation. International flights are separate. Would you like a breakdown for a specific trek?"
      } 
      // Intent: Difficulty
      else if (q.includes('difficult') || q.includes('hard') || q.includes('beginner')) {
        response = "We have treks for all levels! For beginners, I highly recommend the Ghorepani Poon Hill trek (easy, 4 days). For experienced hikers, we have Island Peak (challenging, 14 days). What is your fitness level?"
      } 
      // Intent: Booking / Lead Gen
      else if (q.includes('book') || q.includes('enquiry') || q.includes('contact') || q.includes('talk') || q.includes('quote')) {
        response = "I'd love to get you booked! Could you please share your name and email address, and I'll have our human travel experts reach out within 24 hours?"
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsTyping(false)
      setState('speaking')
      
      // Stop speaking animation after 4 seconds
      setTimeout(() => setState('idle'), 4000)
    }, 1800) // 1.8s delay for realism
  }

  const startListening = () => {
    if (state === 'listening') {
      setState('idle')
      return
    }
    
    setState('listening')
    // Simulate voice recognition
    setTimeout(() => {
      setState('idle')
      sendMessage("Tell me about the Everest Base Camp trek")
    }, 2500)
  }

  const resetChat = () => {
    setMessages(initialMessages)
    setState('idle')
  }

  return { state, messages, sendMessage, startListening, isTyping, resetChat }
}

