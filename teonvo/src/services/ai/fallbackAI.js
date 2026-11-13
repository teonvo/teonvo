export const getFallbackResponse = (query) => {
  const q = query.toLowerCase();
  
  // Navigation
  if (q.includes('service') || q.includes('do you do') || q.includes('offer')) {
    return "We specialize in Website Design & Development, AI Solutions & Automation, SaaS Development, UI/UX Design, and Digital Growth. Would you like me to take you to our Services page?";
  }
  if (q.includes('work') || q.includes('portfolio') || q.includes('project') || q.includes('case study')) {
    return "We have built premium platforms for brands like Boots on Hght, Makhanam, and Cosmic Himalaya. You can view them by clicking 'Work' in the menu.";
  }
  if (q.includes('contact') || q.includes('talk') || q.includes('hire') || q.includes('email')) {
    return "You can reach our team directly at teonvo@gmail.com, or by clicking the 'Let's talk' button in the navigation bar.";
  }
  if (q.includes('about') || q.includes('who are you')) {
    return "Teonvo is an independent digital studio. We build digital experiences and intelligent solutions that move businesses forward.";
  }
  
  // Specific Services
  if (q.includes('ai') || q.includes('automation') || q.includes('agent')) {
    return "We build custom AI agents, customer support bots, and automated workflows that integrate directly into your business operations to save time and scale.";
  }
  if (q.includes('saas') || q.includes('software') || q.includes('app')) {
    return "We architect secure, scalable SaaS platforms and custom software from the ground up, handling everything from database design to frontend development.";
  }
  if (q.includes('website') || q.includes('web')) {
    return "We build high-performance, custom-coded websites. From immersive 3D experiences to e-commerce storefronts, we engineer sites that convert.";
  }
  if (q.includes('seo') || q.includes('growth')) {
    return "Our digital growth services include technical SEO, performance optimization, and conversion rate optimization to ensure you rank higher and sell more.";
  }

  // Greetings & Defaults
  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return "Hello! I'm your Teonvo digital assistant. How can I help you today?";
  }
  
  return "I'm not sure I caught that. Teonvo builds premium websites, AI solutions, and SaaS platforms. Please visit our Services page or email teonvo@gmail.com to learn more.";
};

