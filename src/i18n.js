import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { ES_UI } from './i18n.es.js';

// The few strings that are built from a number need real keys (i18next picks
// the singular or plural form by count), so English has entries for those.
const EN_PLURALS = {
  wordsSelected_one: '{{count}} word selected.',
  wordsSelected_other: '{{count}} words selected.',
  selectedLetter: 'Selected {{letter}}',
  submitLetter: 'Submit {{letter}}',
  scenarioTitle: 'Scenario {{n}}: {{title}}',
  scenarioN: 'Scenario {{n}}',
  scoreRange: '{{name}} {{from}} to {{to}}',
  everyone: 'Everyone: {{avg}}/{{max}}',
  wordCloudLabel: 'Word cloud of what players picked, for {{scope}}',
  shareSubject: '{{game}} — I got {{label}}',
  playLink: 'Play: {{url}}',
};

// i18next does the work: language switching, lookup, fallback, interpolation
// and plurals. The English wording itself is the key, so English screens need
// no dictionary and a string with no Spanish entry falls back to its English.
// That means keys contain '.', ':' and spaces, so both separators are off.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: EN_PLURALS },
    es: { translation: ES_UI },
  },
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  nsSeparator: false,
  returnNull: false,
  interpolation: { escapeValue: false }, // React already escapes
});

// The game names its languages 'english' / 'spanish'; i18next wants codes.
const CODES = { english: 'en', spanish: 'es' };
export function setGameLanguage(language) {
  return i18n.changeLanguage(CODES[language] ?? 'en');
}

export function useT() {
  return useTranslation().t;
}

export function useIsSpanish() {
  return useTranslation().i18n.language === 'es';
}

// The copy that lives in module-level constants (arrays and plain objects of
// strings) is translated a value at a time with the same `t`.
export function useTDeep() {
  const { t } = useTranslation();
  const walk = (v) =>
    typeof v === 'string'
      ? t(v)
      : Array.isArray(v)
        ? v.map(walk)
        : v && Object.getPrototypeOf(v) === Object.prototype
          ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]))
          : v;
  return walk;
}

export default i18n;
