import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = currentTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setCurrentTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (currentTheme === 'light') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [currentTheme])
  
  return (
    <div className="h-7 noselect" onClick={toggleTheme}>
      <div className="toggle-switch cursor-pointer"></div>
    </div>
  )
}