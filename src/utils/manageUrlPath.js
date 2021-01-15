import { isLanguageBR } from "./isLanguageBr";

export function getAllPath() {
  return window.location.pathname;
}

export function pathByLanguage() {
  return isLanguageBR() ? "/br/artigos" : "/en/articles"
}
