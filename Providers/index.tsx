import { ReactNode } from "react"
import { ThemeProvider } from "./ThemeProviders"


interface ProviderProps {
  children : ReactNode
}

export default function Providers({children} : ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}