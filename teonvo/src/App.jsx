import { Routes, Route } from 'react-router-dom'
import { AssistantProvider } from './context/AssistantContext'
import TeonvoAssistant from './components/TeonvoAI/TeonvoAssistant'
import useGlobalTextAnimation from './hooks/useGlobalTextAnimation'

import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import TravelAIPage from './pages/TravelAIPage'
import FounderPage from './pages/FounderPage'
import CareersPage from './pages/CareersPage'
import InsightsPage from './pages/InsightsPage'
import NotFoundPage from './pages/NotFoundPage'
import CaseStudyPage from './pages/CaseStudyPage'

export default function App() {
  useGlobalTextAnimation([])

  return (
    <AssistantProvider>
      <div className="noise"></div>
      <div className="cursor-glow"></div>
      <TeonvoAssistant />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/travel-ai" element={<TravelAIPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AssistantProvider>
  )
}
