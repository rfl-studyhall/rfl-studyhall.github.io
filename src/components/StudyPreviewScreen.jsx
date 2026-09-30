import { InfoScreen } from './InfoScreen.jsx';
import { useT, useTDeep } from '../i18n.js';
import { PixelCardsGuide } from '../pixels.jsx';

// Second beat of the Study Mode intro: what waits at the end of the pass.
const PREVIEW_PARAGRAPHS = [
  'Finally, after you are done you will be able to download the cards and a facilitators guide, as well as apply to be part of our Study Hall Facilitators’ Program!',
  'We wish you a great learning experience!',
];

export function StudyPreviewScreen({ onBack, onNext }) {
  const t = useT();
  const T = useTDeep();
  return (
    <InfoScreen
      label={t('S.02. A FINAL GIFT')}
      heading={T(['A FINAL', 'GIFT'])}
      paragraphs={T(PREVIEW_PARAGRAPHS)}
      art={<PixelCardsGuide className="final-gift-cards" />}
      onBack={onBack}
      onNext={onNext}
    />
  );
}
