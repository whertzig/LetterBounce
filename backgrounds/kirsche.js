// Letter Bounce – Hintergrundbild KIRSCHE
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).KIRSCHE = function (D) {
  D.sky(200, 150);
  D.ell(325, 405, 170, 18, 120);                                    // Schatten
  D.curve(260, 300, 270, 180, 340, 110, 60, 6); D.curve(390, 280, 380, 170, 340, 110, 60, 6);
  D.ell(385, 110, 50, 20, 90, -0.3); D.line([[340, 110], [425, 98]], 60, 2);
  D.circ(260, 320, 62, 85); D.circ(390, 300, 62, 80);
  D.ell(240, 295, 12, 20, 190, -0.5); D.ell(370, 275, 12, 20, 190, -0.5);
};
