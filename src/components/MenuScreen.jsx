import { TitleBar } from './TitleBar.jsx';
import { useFitToViewport } from '../useFitToViewport.js';
import { useEffect, useRef, useState } from 'react';
import { PixelStudyHamsters } from '../pixels.jsx';

const STRINGS = {
  title: 'STUDY HALL',
  newGame: 'New Game',
  credits: 'Credits',
  learnMore: 'Learn More',
};

// The title screen: a pixel title above a short vertical menu, the arrow
// resting on New Game and following whichever entry is hovered or focused. Credits and the setup
// screen are separate phases -- this screen only chooses between them.
export function MenuScreen({ onNewGame, onCredits }) {
  const cardRef = useRef(null);
  useFitToViewport(cardRef);
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);
  const items = [
    { key: 'new', label: STRINGS.newGame, onClick: onNewGame },
    { key: 'credits', label: STRINGS.credits, onClick: onCredits },
    { key: 'more', label: STRINGS.learnMore, href: 'about.html' },
  ];

  // Up/Down move the arrow (wrapping) and focus that entry, so Enter or Space
  // then activates it the way a click would. Focus starts on New Game so the
  // keys work before the mouse has been touched.
  useEffect(() => {
    itemRefs.current[0]?.focus({ preventScroll: true });
    function onKey(e) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      setActive((cur) => {
        const next = (cur + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length;
        itemRefs.current[next]?.focus({ preventScroll: true });
        return next;
      });
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="setup-screen">
      <div className="setup-card menu-card" ref={cardRef}>
        <TitleBar label="Version 0.1 - Study Hall" />
        <div className="setup-body menu-body">
          <h1 className="pixel menu-title">{STRINGS.title}</h1>
          <nav className="menu-list" aria-label="Main menu">
            {items.map((item, i) => {
              const props = {
                ref: (el) => { itemRefs.current[i] = el; },
                className: 'menu-item' + (active === i ? ' is-active' : ''),
                onMouseEnter: () => setActive(i),
                onFocus: () => setActive(i),
              };
              return (
              item.href ? (
                <a key={item.key} {...props} href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="menu-arrow" aria-hidden="true">&#x25B6;</span>
                  {item.label}
                </a>
              ) : (
                <button key={item.key} type="button" {...props} onClick={item.onClick}>
                  <span className="menu-arrow" aria-hidden="true">&#x25B6;</span>
                  {item.label}
                </button>
              )
              );
            })}
          </nav>
          <PixelStudyHamsters className="menu-hamsters" />
        </div>
      </div>
    </div>
  );
}
