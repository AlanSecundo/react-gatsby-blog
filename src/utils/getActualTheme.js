import { lightTheme, darkTheme } from "../styles/theme"

export function getActualTheme() {
  let theme =
    typeof window === "undefined"
      ? "light"
      : window.localStorage.getItem("theme")
  return theme === "dark" ? darkTheme.body : lightTheme.body
}
