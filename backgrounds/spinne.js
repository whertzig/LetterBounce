// Letter Bounce – Hintergrundbild SPINNE
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).SPINNE = function (D) {
  D.sky(40, 90);
  const cx = 320, cy = 220, N = 12, ang = [];
  for (let i = 0; i < N; i++) {
    const a = i * Math.PI * 2 / N + 0.1; ang.push(a);
    D.line([[cx, cy], [cx + Math.cos(a) * 500, cy + Math.sin(a) * 500]], 190, 2);
  }
  for (let k = 1; k <= 10; k++) {
    const r = k * 28;
    for (let i = 0; i < N; i++) {
      const a0 = ang[i], a1 = ang[(i + 1) % N], am = a0 + Math.PI / N;
      D.curve(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, cx + Math.cos(am) * r * 0.88, cy + Math.sin(am) * r * 0.88,
        cx + Math.cos(a1) * r, cy + Math.sin(a1) * r, 175, 1.5);
    }
  }
  D.line([[320, 0], [320, 250]], 200, 1.5);                         // Faden
  for (const s of [-1, 1]) for (let j = 0; j < 4; j++)
    D.line([[320, 265], [320 + s * (50 + j * 6), 215 + j * 28], [320 + s * (85 + j * 10), 250 + j * 35]], 25, 5);
  D.circ(320, 295, 38, 25); D.circ(320, 250, 22, 30);
  D.circ(320, 295, 10, 90);
  D.circ(312, 245, 4, 230); D.circ(328, 245, 4, 230);
};
