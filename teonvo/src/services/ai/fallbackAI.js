
export const getFallbackResponse = (query) => {
  const q = query.toLowerCase().trim();

  // ==========================================
  // TEONVO – COMPANY KNOWLEDGE BASE
  // ==========================================

  // Founder – Utkarsh
  if (
    q.includes("utkarsh") ||
    q.includes("founder") ||
    q.includes("who created teonvo") ||
    q.includes("who started teonvo")
  ) {
    return `Teonvo was founded by Utkarsh Bisht, a technology entrepreneur, developer, and innovator passionate about Artificial Intelligence, software engineering, and digital innovation.

Utkarsh works across AI-powered applications, SaaS product development, web technologies, computer vision, and immersive digital experiences.

He has been associated with Smart India Hackathon as a winner and has experience leading technology initiatives, developing digital products, and building solutions for businesses.

His vision is to make Teonvo a technology-driven company that combines intelligent software, creative engineering, and innovation to solve real-world business challenges.`;
  }

  // About Teonvo
  if (
    q.includes("about") ||
    q.includes("who are you") ||
    q.includes("what is teonvo") ||
    q.includes("company") ||
    q.includes("tell me about teonvo")
  ) {
    return `Teonvo is an independent digital innovation and software development studio founded by Utkarsh Bisht.

We help businesses transform their ideas into powerful digital products through technology, design, and intelligent automation.

Our expertise includes:
• Custom Website Design & Development
• AI Solutions and Intelligent Agents
• SaaS Product Engineering
• 3D and Immersive Web Experiences
• UI/UX Design
• E-commerce Development
• SEO and Digital Growth
• Backend Systems and API Integrations

We believe technology should do more than just look impressive. It should solve problems, improve business operations, and create measurable value.

Our mission is to build meaningful digital experiences that move businesses forward.`;
  }

  // Company Vision
  if (q.includes("vision") || q.includes("mission") || q.includes("future")) {
    return `Our vision at Teonvo is to become a technology innovation company building intelligent digital ecosystems.

We aim to bring together Artificial Intelligence, automation, SaaS, immersive web experiences, and modern software engineering to create solutions that make businesses smarter, faster, and more scalable.`;
  }

  // Achievements
  if (
    q.includes("achievement") ||
    q.includes("award") ||
    q.includes("hackathon") ||
    q.includes("sih")
  ) {
    return `Teonvo's founder, Utkarsh Bisht, has been associated with Smart India Hackathon as a winner.

His technical interests and project experience include Artificial Intelligence, Machine Learning, Computer Vision, intelligent traffic management, and software development.

At Teonvo, we bring this problem-solving mindset into real-world digital products and business solutions.`;
  }

  // ==========================================
  // SERVICES
  // ==========================================

  if (q.includes("service") || q.includes("do you do") || q.includes("offer")) {
    return `Teonvo provides end-to-end digital and technology solutions:

1. Website Design & Development
2. AI Solutions & Intelligent Automation
3. SaaS Development
4. UI/UX Design
5. 3D Interactive Websites
6. E-commerce Development
7. Search Engine Optimization
8. Backend Development & API Integrations
9. Digital Marketing and Growth

We take projects from concept and design to development and deployment.

Would you like to explore our Services page?`;
  }

  // AI Services
  if (
    q.includes("ai") ||
    q.includes("artificial intelligence") ||
    q.includes("automation") ||
    q.includes("agent") ||
    q.includes("chatbot")
  ) {
    return `We develop intelligent AI-powered solutions that help businesses automate operations and improve customer experiences.

Our AI capabilities include:
• Custom AI Agents
• AI Customer Support Assistants
• Voice-enabled AI Assistants
• Business Process Automation
• AI-powered Travel Companions
• Computer Vision Applications
• Intelligent Workflow Integrations

Our goal is to make AI practical, accessible, and useful for everyday business operations.`;
  }

  // SaaS & Software
  if (
    q.includes("saas") ||
    q.includes("software") ||
    q.includes("application") ||
    q.includes("app")
  ) {
    return `We design and develop scalable SaaS platforms and custom software applications.

Our development capabilities include:
• Product Architecture
• Frontend and Backend Engineering
• Database Design
• API Development
• Authentication Systems
• Payment Gateway Integration
• Cloud Deployment
• Software Optimization

From MVP development to full-scale digital products, we help turn ideas into working software.`;
  }

  // Website Development
  if (q.includes("website") || q.includes("web development") || q.includes("web design")) {
    return `We create high-performance, custom-coded websites designed around your brand and business goals.

Our capabilities include:
• Corporate Websites
• E-commerce Platforms
• Travel and Tourism Websites
• 3D Interactive Websites
• React and Modern JavaScript Applications
• Responsive UI/UX
• GSAP Animations
• Three.js Experiences
• SEO-friendly Development

We focus on performance, visual quality, usability, and conversion.`;
  }

  // 3D Websites
  if (q.includes("3d") || q.includes("three.js") || q.includes("immersive")) {
    return `Teonvo creates immersive digital experiences using modern web technologies.

Our capabilities include:
• Three.js and WebGL
• Interactive 3D Environments
• Scroll-driven Animations
• GSAP and ScrollTrigger
• React Three Fiber
• Interactive Product Experiences
• Immersive Brand Storytelling

We combine visual storytelling with performance-focused engineering to create memorable websites.`;
  }

  // SEO
  if (q.includes("seo") || q.includes("ranking") || q.includes("google")) {
    return `Our digital growth services help businesses improve their online visibility and attract qualified customers.

We work on:
• Technical SEO
• On-page SEO
• Keyword Research
• Website Performance
• Search Engine Optimization
• Metadata and Structured Data
• Content Strategy
• Conversion Optimization`;
  }

  // ==========================================
  // TECHNOLOGY STACK
  // ==========================================

  if (
    q.includes("technology") ||
    q.includes("tech stack") ||
    q.includes("tools") ||
    q.includes("programming")
  ) {
    return `Our technology ecosystem includes modern tools and frameworks:

Frontend:
React, JavaScript, HTML5, CSS3, Vite

3D & Animation:
Three.js, React Three Fiber, GSAP, ScrollTrigger

Backend:
Node.js, REST APIs, Database Integrations

AI & Machine Learning:
Python, OpenCV, YOLO, PyTorch, Computer Vision

Infrastructure:
Vercel, Cloud Hosting, API Integrations, Deployment and Optimization

We select technologies based on each project's requirements rather than forcing one stack on every project.`;
  }

  // ==========================================
  // PORTFOLIO & PROJECTS
  // ==========================================

  if (
    q.includes("work") ||
    q.includes("portfolio") ||
    q.includes("project") ||
    q.includes("case study") ||
    q.includes("clients")
  ) {
    return `We've worked on digital experiences and technology projects across multiple industries.

Some projects include:

• Boots on Hyght – An immersive trekking and travel platform.
• Makhanam – A digital presence and e-commerce platform for a makhana brand and manufacturer.
• Cosmic Himalaya – A Himalayan trekking and travel platform.
• Precious Moments Safaris – A safari and tourism website.
• Kumaon Herbal – E-commerce and digital brand development.
• DMRC Montessori School – Educational website development.
• Corbett Phoenix Resort – Brand and digital design work.

Our portfolio reflects our work across travel, tourism, education, e-commerce, and digital experiences.

Explore the Work section to see our projects.`;
  }

  // ==========================================
  // TEAM
  // ==========================================

  if (
    q.includes("team") ||
    q.includes("people") ||
    q.includes("employees") ||
    q.includes("members")
  ) {
    return `Teonvo brings together creative and technical talent working across digital experiences, development, and business growth.

Our team includes:

• Utkarsh Bisht – Founder, Technology and Product Vision.
• Rituraj – Frontend Engineer, building high-performance and interactive interfaces.
• Elara – Social Media Manager, handling social media strategy and digital communication.

We believe great digital products are built through collaboration between technology, creativity, and strategy.`;
  }

  // ==========================================
  // CONTACT & BUSINESS
  // ==========================================

  if (
    q.includes("contact") ||
    q.includes("talk") ||
    q.includes("hire") ||
    q.includes("email") ||
    q.includes("phone")
  ) {
    return `We'd love to hear about your project!

Contact our team:
Email: teonvo@gmail.com

You can also click the Let's Talk button on our website to discuss your requirements, project scope, and ideas.

Let's build something meaningful together!`;
  }

  // Pricing
  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("budget")
  ) {
    return `Every Teonvo project is different, so pricing depends on its requirements, complexity, features, and timeline.

We offer custom quotations for:
• Website Development
• SaaS Platforms
• AI Applications
• 3D Interactive Websites
• E-commerce Solutions
• Digital Growth Services

Contact us at teonvo@gmail.com to discuss your project and receive a tailored proposal.`;
  }

  // Careers
  if (
    q.includes("career") ||
    q.includes("job") ||
    q.includes("internship") ||
    q.includes("join")
  ) {
    return `Interested in working with Teonvo?

We appreciate people who are passionate about technology, creativity, AI, design, and building meaningful digital products.

Reach out at teonvo@gmail.com with your portfolio, experience, and area of interest.`;
  }

  // ==========================================
  // GREETINGS
  // ==========================================

  if (
    q === "hi" ||
    q === "hello" ||
    q === "hey" ||
    q.includes("good morning") ||
    q.includes("good evening")
  ) {
    return `Hello! Welcome to Teonvo.

I'm your Teonvo digital assistant. I can tell you about our company, founder Utkarsh, services, technologies, projects, and how we can help your business.

What would you like to explore today?`;
  }

  // ==========================================
  // DEFAULT RESPONSE
  // ==========================================

  return `That's an interesting question!

I'm Teonvo's digital assistant. I can help you explore:

• About Teonvo and our founder, Utkarsh Bisht
• Our services and technology expertise
• AI and SaaS development
• Our projects and portfolio
• Our team and company vision
• Project pricing and collaboration

For specific project enquiries, contact us at teonvo@gmail.com.

What would you like to know about Teonvo?`;
};
