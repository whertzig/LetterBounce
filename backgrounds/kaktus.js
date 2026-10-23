// Letter Bounce – Hintergrundbild KAKTUS
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).KAKTUS = function (D) {
  D.sky(215, 245); D.circ(510, 100, 55, 252);
  D.rect(0, 380, 640, 100, 195); D.ell(480, 385, 260, 30, 180);
  const k = 95;
  D.rect(230, 250, 70, 30, k); D.rect(230, 180, 30, 100, k); D.circ(245, 180, 15, k);
  D.rect(340, 220, 70, 30, k); D.rect(380, 150, 30, 100, k); D.circ(395, 150, 15, k);
  D.rect(290, 140, 60, 250, k); D.circ(320, 140, 30, k);
  D.line([[320, 120], [320, 385]], 70, 3); D.line([[304, 135], [304, 385]], 120, 2); D.line([[336, 135], [336, 385]], 70, 2);
  D.line([[245, 175], [245, 265]], 70, 2); D.line([[395, 145], [395, 235]], 70, 2);
  for (const [x, y] of [[290, 170], [350, 200], [290, 240], [350, 280], [290, 320], [350, 350], [230, 200], [260, 230], [380, 180], [410, 210]]) {
    D.line([[x, y], [x - 6, y - 4]], 230, 2); D.line([[x, y], [x + 6, y - 4]], 230, 2);
  }
  D.circ(320, 108, 12, 230);
  D.ell(150, 395, 30, 14, 120); D.ell(560, 400, 22, 10, 130);
};
