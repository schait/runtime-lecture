window.addEventListener('DOMContentLoaded', () => {
  // Since macOS is STUPID and hides scrollbars by default, it's not clear
  // when you should scroll down on example code. This isn't a huge problem except when
  // there are emphasized/highlighted lines hidden below the fold.
  //
  // This script will scroll example code to the first highlighted line for the current
  // slide.

  const findClosestHighlightParent = (el) => {
    let curr = el;
    while (
      curr?.parentElement &&
      curr.tagName !== 'SECTION' &&
      !curr.classList.contains('highlight')
    ) {
      curr = curr.parentElement;
    }
    return curr?.classList.contains('highlight') ? curr : undefined;
  };

  const scrollToEmphasizedLine = (el) => {
    const emphasizedLine = el.querySelector('.hll');
    const container = findClosestHighlightParent(emphasizedLine);
    container?.scroll({ top: emphasizedLine.offsetTop, behavior: 'smooth' });
  };

  Reveal?.on('slidechanged', (e) => {
    scrollToEmphasizedLine(e.currentSlide);
  });
});
