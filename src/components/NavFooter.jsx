import { useT } from '../i18n.js';

// Black footer strip with green BACK / NEXT controls. Either side can be
// omitted; the other stays pinned to its edge.
export function NavFooter({ onBack, onNext, backLabel = 'Back', nextLabel = 'Next' }) {
  const t = useT();
  return (
    <div className="nav-footer">
      {onBack ? (
        <button type="button" className="nav-btn" onClick={onBack}>
          <span className="nav-chevron">&lsaquo;</span>
          {t(backLabel)}
        </button>
      ) : (
        <span />
      )}
      {onNext ? (
        <button type="button" className="nav-btn" onClick={onNext}>
          {t(nextLabel)}
          <span className="nav-chevron">&rsaquo;</span>
        </button>
      ) : (
        <span />
      )}
    </div>
  );
}
