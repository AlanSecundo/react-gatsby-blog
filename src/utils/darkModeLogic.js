import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window === "undefined"
      ? "defaultTheme"
      : window.localStorage.getItem("theme") || "light"
  )

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  useEffect(() => {
    const localTheme =
      typeof window === "undefined"
        ? "defaultTheme"
        : window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, toggleTheme]
}
