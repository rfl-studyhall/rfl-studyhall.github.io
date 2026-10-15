import { InfoScreen } from './InfoScreen.jsx';

// Everyone thanked on the first screen.
// TODO: the sender's cc line was cut off in the screenshot -- add the rest when
// known.
const CREDIT_NAMES = [
  'Ariadne Astrild Flores Rubio',
  'Alexa Angelica Corral Montero',
  'Valeria González Cepeda',
  'Evelyn Khare',
  'Lilikoi Majewski',
  'Suhey Romo Ferracin',
  'Bailey Williams',
  'Stephen S Fong',
  'Eloísa del Carmen García Canseco',
];

// Translators of the Spanish version, spelled as on the setup screen's credit.
const TRANSLATOR_NAMES = ['Mariana González-Cepeda', 'Jose Alberto Nevarez'];

// Names run together in a sentence rather than one per line.
const join = (names) => names.join(', ');

// The first screen, ahead of the language and mode choice, so it is English
// only. "A special thanks" sits in the body's own type rather than the pixel
// heading, and the way on is a single Start Game-style button instead of the
// Back / Next footer.
export function CreditsScreen({ onNext }) {
  return (
    <InfoScreen
      label="WELCOME"
      top
      fit
      heading={['WELCOME TO', 'STUDY HALL']}
      paragraphs={[
        'A special thanks, for design co-creation, translations, and playtesting:',
        `Students at VCU: ${join(CREDIT_NAMES)}`,
        `Students at UABC (Mexico): ${join(TRANSLATOR_NAMES)}`,
      ]}
      art={
        <button
          type="button"
          className="restart-btn restart-btn--big setup-start-btn"
          onClick={onNext}
        >
          Get started
        </button>
      }
    />
  );
}
