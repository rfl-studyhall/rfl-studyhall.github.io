import { useRef } from 'react';
import { useFitToViewport } from '../useFitToViewport.js';
import { TitleBar } from './TitleBar.jsx';

const DASHBOARD_URL = 'https://datacenterimpactdashboard.com/?introTutorial=skip&country=mex';

const LEADS = [
  ['Program Lead and concept development', 'Felipe Almeida, Ph.D.'],
  ['Design lead and development', 'Parul Sharma'],
  ['Original cards designed by', 'Carmela Wilkins and Sylvie Bartusek'],
];

// Study Hall facilitators, grouped by university.
const FACILITATORS = [
  {
    school: 'Universidad Autónoma de Baja California, Mexico',
    names: [
      'Alexa Angelica Corral Montero',
      'Ariadne Astrild Flores Rubio',
      'Jose Alberto Loaiza Nevarez',
      'Mariana Gonzáles Cepeda',
      'Suhey Romo Ferracin',
      'Valeria Gonzáles Cepeda',
    ],
  },
  {
    school: 'Virginia Commonwealth University - United States',
    names: ['Bailey Williams', 'Benjamin Uttenweiler', 'Evelyn Khare', 'Lilikoi Majewski'],
  },
];

const DASHBOARD = (
  <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
    Data Centers and Environmental Justice
  </a>
);

const TEAM = [
  ['Sanjana Paul', 'Executive Director and Co-Founder'],
  ['Anke de Boer', 'Chief Operating Officer'],
  ['Charles Knoble, Ph.D.', 'Advisor, MYLE'],
  ['Arpan Somani', 'Advisor, MYLE'],
  ['Chris Cameron', <>Program Manager, {DASHBOARD}</>],
  ['Peter Polack', <>Developer, {DASHBOARD}</>],
];

// Reached from the title menu, so it is English only. The way out is a single
// Start Game-style button back to the menu rather than the Back / Next footer.
// Laid out in columns and zoomed to the viewport, so the list never scrolls.
export function CreditsScreen({ onNext }) {
  const cardRef = useRef(null);
  useFitToViewport(cardRef);
  return (
    <div className="setup-screen">
      <div className="setup-card setup-card--info setup-card--top credits-card" ref={cardRef}>
        <TitleBar label="CREDITS" />
        <div className="setup-body">
          <div className="setup-inner credits-inner">
            <h1 className="pixel">CREDITS</h1>

            <div className="credits-leads">
              {LEADS.map(([role, name]) => (
                <p key={role}>
                  {role}: <strong>{name}</strong>
                </p>
              ))}
            </div>

            <h2 className="credits-heading">Co-designed with Study Hall facilitators:</h2>
            <div className="credits-cols">
              {FACILITATORS.map(({ school, names }) => (
                <section key={school}>
                  <h3>{school}</h3>
                  <ul>
                    {names.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <h2 className="credits-heading">Rooted Futures Lab Team &amp; Other Programs</h2>
            <ul className="credits-team">
              {TEAM.map(([name, role]) => (
                <li key={name}>
                  <strong>{name}</strong> - {role}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="restart-btn restart-btn--big setup-start-btn"
              onClick={onNext}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
