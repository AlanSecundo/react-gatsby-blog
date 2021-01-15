
export function isLanguageBR() {
  if (typeof window === "undefined") {
    return true
  }
  return !(window.location.pathname.split("/").indexOf("en") > -1)
}
