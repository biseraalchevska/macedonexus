import en from "../i18n/en";
import mk from "../i18n/mk";
import tr from "../i18n/tr";

export const languages = { en, mk, tr };

export function getLang(lang) {
  return languages[lang] || languages.en;
}