import { useEffect } from 'react'

export default function useGlobalTextAnimation(dependencies = []) {
  // We are disabling this hook entirely.
  // It was causing pages to turn blank when ScrollTrigger failed to fire.
  useEffect(() => {
    // Force everything to be visible
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, dependencies)
}
