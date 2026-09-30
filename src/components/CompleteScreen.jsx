import { useState } from 'react';
import { useT } from '../i18n.js';
import {
  captureResultsShared,
  captureSharePreviewOpened,
} from '../telemetry.js';
import { Gauge } from './Gauge.jsx';
import {
  MiniHamster,
  PixelCardsGuide,
  PixelClassroom,
  PixelMoney,
  PixelReload,
  SippingHamster,
  SodaCup,
  ThoughtBubble,
  WheelHamster,
} from '../pixels.jsx';
import { ScoreBreakdown } from './ResultsCharts.jsx';
import { EndingArt } from './EndingArt.jsx';
import { ENDING_ALIGN, ENDING_CAPTIONS, endingFor } from '../endings.js';
import { ShareSheet } from './ShareSheet.jsx';
import { SupportSheet } from './SupportSheet.jsx';
import { ALIGN_LABELS, CARDS_DOWNLOAD_URL, FACILITATOR_FORM_URL } from '../scenarios.js';

export function CompleteScreen({
  gaugeAngle,
  needleColor,
  totalScore,
  scoreMax,
  vision,
  simulation,
  answers,
  onRestart,
  onStartStudy,
}) {
  // Which of the four endings the needle earned. One derivation, shared with
  // the share preview so the two can never disagree.
  const t = useT();
  const ending = endingFor(gaugeAngle);
  const band = { align: ENDING_ALIGN[ending], label: t(ALIGN_LABELS[ENDING_ALIGN[ending]]) };
  // Real play only ever sums integers; the debug band jump parks the needle on
  // a fraction, so round before it is shown or shared.
  const shownScore = Math.round(totalScore);
  const [shareOpen, setShareOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  // Share opens a preview rather than firing straight into a share sheet:
  // the result is the thing being sent, so it is worth seeing first. Opening
  // is reported separately from sending, so the two can be compared.
  function openShare() {
    captureSharePreviewOpened({ ending });
    setShareOpen(true);
  }

  return (
    <div className={'screen-complete' + (simulation ? ' screen-complete--sim' : '')}>
      <div className="card card--options card--standalone results-card">
        <div className="body">
          <h1 className="pixel">{t('STUDY HALL COMPLETE')}</h1>
          {/* What Study Mode leads to, above the endings rather than under
              them: each is a card carrying its own picture. */}
          {!simulation && (
            <div className="study-offers">
              {/* `download` rather than a plain link, so the file is saved
                  rather than handed to whatever the browser does with the type
                  -- the point of the card is to come away with the deck. */}
              <a className="study-offer" href={CARDS_DOWNLOAD_URL} download>
                <PixelCardsGuide className="study-offer-art" />
                <span className="study-offer-label">{t('Cards & Guide')}</span>
              </a>
              {/* A real anchor rather than window.open: a popup blocker can
                  swallow window.open silently, leaving the card looking dead. */}
              <a
                className="study-offer"
                href={FACILITATOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PixelClassroom className="study-offer-art" />
                <span className="study-offer-label">{t('Become a Facilitator')}</span>
              </a>
            </div>
          )}
          <div className="results-visuals">
            <div className="results-scene">
              {/* Study Mode has no single ending to land on -- it shows the
                  whole arc at once, worst to best, so the four are read side
                  by side. Simulation Mode still lands on the one the needle
                  earned. */}
              {simulation ? (
                <>
                  {/* One fixed-height stage for all four endings. Their art is
                      different sizes, so without it the chip and caption below
                      sat at a different height on every result. */}
                  <div className="results-art">
                    <EndingArt ending={ending} />
                  </div>
                  <div className="results-score">
                    <div className="chip" data-align={band.align}>
                      {band.label}{' '}
                      <b className="chip-score">{shownScore}</b>
                    </div>
                  </div>
                  <div className="rat-caption">{t(ENDING_CAPTIONS[ending])}</div>
                </>
              ) : (
                <div className="ending-strip">
                  <figure className="ending-strip-item">
                    <div className="ending-strip-art">
                      <div className="rat-wheel">
                        <WheelHamster />
                      </div>
                    </div>
                    <figcaption>{t('You are trapped in the capitalism rat race')}</figcaption>
                  </figure>
                  <figure className="ending-strip-item">
                    <div className="ending-strip-art">
                      <div className="hamster-showcase-box hamster-showcase-box--sip">
                        <SippingHamster className="sip-hamster" />
                        <SodaCup className="drink-cup" />
                      </div>
                    </div>
                    <figcaption>{t('Looks like you are drinking the cool aide')}</figcaption>
                  </figure>
                  <figure className="ending-strip-item">
                    <div className="ending-strip-art">
                      <div className="hamster-showcase-box hamster-showcase-box--pause">
                        <div className="rat-wheel rat-wheel--still">
                          <WheelHamster />
                        </div>
                        <div className="thought-hamster">
                          <ThoughtBubble className="thought-bubble" aria-hidden="true" />
                          <MiniHamster className="mini-hamster-big" />
                        </div>
                      </div>
                    </div>
                    <figcaption>{t("You're starting to come out of it. Keep going")}</figcaption>
                  </figure>
                  <figure className="ending-strip-item">
                    <div className="ending-strip-art">
                      <div className="hamster-showcase-box">
                        <MiniHamster className="mini-hamster-big" />
                        <MiniHamster className="mini-hamster-big mini-hamster-big--2" />
                        <MiniHamster className="mini-hamster-big mini-hamster-big--3" />
                      </div>
                    </div>
                    <figcaption>
                      {t('Your freedom is a direct result of just and inclusive relationships with others')}
                    </figcaption>
                  </figure>
                </div>
              )}

              {/* Share and the dial are Simulation Mode's ending furniture.
                  Study Mode ends on the scene alone. */}
              {simulation && (
                <div className="scene-actions">
                  <button type="button" className="btn" onClick={openShare}>
                    {t('Share')}
                  </button>
                </div>
              )}

              {/* The dial is a footnote-sized icon in the scene's corner --
                  no scale labels, no hamsters, just the needle's reading. */}
              {simulation && (
                <div className="gauge-wrap gauge-wrap--results gauge-pin">
                  <Gauge angle={gaugeAngle} needleColor={needleColor} />
                </div>
              )}
            </div>

            {/* Sits alongside the scene, sharing its blue, so the route into
                Study Mode reads as part of the ending rather than a footnote.
                Study Mode has its own end actions, so it only shows here. */}
            {simulation && (
              <aside className="facilitator-panel">
                <p className="facilitator-lead">{t('Interested in becoming a facilitator?')}</p>
                <p className="facilitator-step">
                  <span>{t('First step:')}</span> {t('complete the game in Study Mode.')}
                </p>
                <button type="button" className="btn facilitator-cta" onClick={onStartStudy}>
                  {t('Start Study Mode')}
                </button>
              </aside>
            )}
          </div>

          {/* What they wrote on the closing card, shown in both modes. Kept
              out of the simulation-only block on purpose: a Study Mode run
              started in the same session opens on the same vision. Absent when
              nothing was written -- the card is optional. */}
          {vision?.trim() && (
            <section className="vision-recap">
              <h2 className="vision-recap-title">{t('Your vision for the future')}</h2>
              <blockquote className="vision-recap-text">{vision}</blockquote>
            </section>
          )}

          {/* Below the row rather than inside the scene: in there it stretched
              the facilitator panel beside it to match its height, and was
              capped at the scene's column width.

              Always open -- it used to sit behind a See/Hide toggle, but the
              breakdown is the substance of the results, not an extra.

              Both modes now. Study Mode gets the same web, but the card beside
              it lists every suggestion for the quadrant rather than the one a
              score earned -- there is no verdict to deliver there. */}
          <ScoreBreakdown answers={answers} study={!simulation} />

          {shareOpen && (
            <ShareSheet
              ending={ending}
              score={shownScore}
              max={scoreMax}
              onClose={() => setShareOpen(false)}
              onShared={(method) => captureResultsShared({ method })}
            />
          )}

          {supportOpen && <SupportSheet onClose={() => setSupportOpen(false)} />}

          {/* Restarting and supporting both step back into the corner as a
              stacked pair of square tiles, clear of the ending art. */}
          <div className="corner-actions">
            <button type="button" className="corner-btn" onClick={onRestart}>
              <PixelReload className="corner-btn-icon" />
              <span>{t('Play Again')}</span>
            </button>
            <button type="button" className="corner-btn" onClick={() => setSupportOpen(true)}>
              <PixelMoney className="corner-btn-icon" />
              <span>{t('Support')}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
