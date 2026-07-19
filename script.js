// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------
// Cursor-following project preview
// Each project row gets a placeholder duotone gradient (cobalt -> lime)
// generated from its data-hue attribute, so every project reads as a
// distinct "thumbnail" even before real project images are added.
// Replace the gradient logic with real <img> thumbnails once you have them
// (see README.md for instructions).
// ---------------------------------------------
const peek = document.getElementById('cursorPeek');
const rows = document.querySelectorAll('.project-row');
const isTouch = window.matchMedia('(hover: none)').matches;

if (peek && !isTouch) {
  const angles = { 1: 25, 2: 95, 3: 155, 4: 215, 5: 275 };

  rows.forEach(row => {
    const hue = row.dataset.hue || '1';
    const angle = angles[hue] || 25;
    row.addEventListener('mouseenter', () => {
      peek.style.background =
        `linear-gradient(${angle}deg, var(--accent), var(--accent-2))`;
      peek.classList.add('is-visible');
    });
    row.addEventListener('mousemove', e => {
      peek.style.left = e.clientX + 'px';
      peek.style.top = e.clientY + 'px';
    });
    row.addEventListener('mouseleave', () => {
      peek.classList.remove('is-visible');
    });
  });
}
