// Floating Light/Dark toggle (bottom-left)
import { useTheme } from "@/components/Theme" // keep your existing hook path
import { Moon, Sun } from "lucide-react"
import { useMemo } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"
  const nextTheme = isDark ? "light" : "dark"
  const label = useMemo(
    () => (isDark ? "Switch to Light" : "Switch to Dark"),
    [isDark]
  )

  return (
    <button
      type='button'
      onClick={() => setTheme(nextTheme)}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      className={[
        "fixed right-5 bottom-5 z-50",
        "h-12 w-12 rounded-full",
        // surface + border that adapts to your tokens
        "bg-secondary-foreground text-primary-foreground",
        // motion
        "transition-transform duration-200 ease-out",
        "hover:scale-105 active:scale-90",
        // base shadow/focus
        "shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 cursor-pointer",
      ].join(" ")}
    >
      {/* Icon swap with smooth crossfade/scale */}
      <span className='relative inline-flex items-center justify-center h-full w-full'>
        <Sun
          className={[
            "absolute h-5 w-5 transition-all duration-200",
            isDark
              ? "opacity-0 scale-75 rotate-90"
              : "opacity-100 scale-100 rotate-0",
          ].join(" ")}
        />
        <Moon
          className={[
            "absolute h-5 w-5 transition-all duration-200",
            isDark
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 -rotate-90",
          ].join(" ")}
        />
      </span>
    </button>
  )
}
