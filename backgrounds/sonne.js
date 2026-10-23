// Letter Bounce – Hintergrundbild SONNE
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).SONNE = function (D) {
  D.sky(170, 225);
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6;
    D.line([[320 + Math.cos(a) * 105, 190 + Math.sin(a) * 105], [320 + Math.cos(a) * 160, 190 + Math.sin(a) * 160]], 245, 12);
  }
  D.circ(320, 190, 85, 252);
  D.ell(110, 110, 60, 22, 235); D.ell(150, 100, 40, 25, 238); D.ell(540, 330, 70, 22, 230);
  D.ell(140, 480, 300, 130, 120); D.ell(520, 490, 300, 150, 95);
  D.line([[470, 80], [485, 70], [500, 80]], 60, 3); D.line([[510, 110], [522, 102], [534, 110]], 60, 3);
};
