// Letter Bounce – Hintergrundbild APFEL
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).APFEL = function (D) {
  D.sky(180, 215, 360); D.rect(0, 360, 640, 120, 110); D.line([[0, 360], [640, 360]], 80, 4);
  D.ell(320, 372, 160, 20, 80);                                     // Schatten
  D.circ(280, 260, 100, 125); D.circ(360, 260, 100, 125); D.circ(320, 280, 95, 125);
  D.ell(320, 168, 22, 8, 95);
  D.ell(265, 215, 22, 40, 200, -0.4);                               // Glanz
  D.curve(320, 175, 315, 140, 330, 110, 50, 9);                     // Stiel
  D.ell(370, 125, 42, 16, 80, -0.4); D.line([[332, 140], [405, 112]], 55, 2);
};
