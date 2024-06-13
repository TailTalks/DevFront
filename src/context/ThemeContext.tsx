import React, { createContext, useState, useContext, ReactNode } from 'react'

interface ThemeContextType {
  theme: boolean
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode // ReactNode is a type that is used to define all possible metrics that can be passed as a children component.
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined) // here it shows that the value either exists or it doesn’t, and if not, undefined is passed as default

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
