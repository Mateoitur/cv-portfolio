import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { ThemeProvider } from "./components/Theme"
import { MotionConfig } from "framer-motion"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <App />
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>
)
