import { createContext, useContext, useState, useRef } from 'react';
import { speakText, stopSpeaking, startListening } from '../services/voice/speech';
import { askAI, initAI } from '../services/ai/webllm';

const AssistantContext = createContext();

export function AssistantProvider({ children }) {
  const [isIntro, setIsIntro] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [status, setStatus] = useState('idle'); 
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! Welcome to Teonvo. Click 'Enable Voice Experience' to start." }
  ]);
  const [aiStatus, setAiStatus] = useState('uninitialized');
  const recognitionRef = useRef(null);

  const initVoiceExperience = async () => {
    setAiStatus('loading');
    
    // Try to load WebLLM in background, but don't wait for it
    initAI((progress) => {
      console.log("AI Loading:", progress);
    }).then(() => {
      setAiStatus('ready');
    }).catch(() => {
      setAiStatus('fallback');
    });
    
    // Immediately allow interaction
    setAiStatus('ready');
    
    const welcome = "Hey! Welcome to Teonvo. I'm your virtual assistant. At Teonvo, we build powerful digital experiences and intelligent AI solutions. Feel free to ask me anything, or click Explore Website to see our work.";
    
    setMessages([{ role: 'assistant', content: welcome }]);
    handleSpeak(welcome);
  };

  const handleSpeak = (text) => {
    setStatus('speaking');
    speakText(text, () => {
      setStatus('idle');
    });
  };

  const handleListen = () => {
    if (status === 'speaking') {
      stopSpeaking();
      setStatus('idle');
      return;
    }

    setStatus('listening');
    
    recognitionRef.current = startListening(
      async (text) => {
        processQuery(text);
      },
      () => {
        if (status === 'listening') setStatus('idle');
      },
      (err) => {
        console.error(err);
        setStatus('idle');
        setMessages(prev => [...prev, { role: 'assistant', content: `Microphone error: ${err}` }]);
      }
    );
  };

  const handleTextSubmit = (text) => {
    if (!text.trim()) return;
    processQuery(text);
  };

  const processQuery = async (text) => {
    setStatus('thinking');
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    
    const response = await askAI(newMessages);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    handleSpeak(response);
  };

  const enterWebsite = () => {
    setIsIntro(false);
    stopSpeaking();
    setStatus('idle');
  };

  return (
    <AssistantContext.Provider value={{
      isIntro, enterWebsite,
      isMinimized, setIsMinimized,
      status, handleListen, handleTextSubmit,
      messages, aiStatus, initVoiceExperience
    }}>
      {children}
    </AssistantContext.Provider>
  );
}

export const useAssistant = () => useContext(AssistantContext);

