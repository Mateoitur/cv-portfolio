import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => null,
})

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const getInitialTheme = () => {
    try {
      const stored =
        typeof window !== "undefined" && localStorage.getItem(storageKey)
      return stored || defaultTheme
    } catch {
      return defaultTheme
    }
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (typeof document === "undefined") return
    const root = document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.add(systemPrefersDark ? "dark" : "light")
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (t) => {
      try {
        localStorage.setItem(storageKey, t)
      } catch {}
      setTheme(t)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeProviderContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
