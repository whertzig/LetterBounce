// Letter Bounce – Hintergrundbild BAUM
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).BAUM = function (D) {
  D.sky(195, 240); D.ground(395, 130);
  D.poly([[295, 400], [345, 400], [335, 250], [305, 250]], 70);     // Stamm
  D.line([[320, 280], [260, 220]], 70, 14); D.line([[322, 270], [390, 210]], 70, 14);
  for (const [x, y, r, n] of [[320, 170, 95, 105], [230, 215, 70, 95], [410, 215, 70, 95],
    [270, 130, 65, 120], [375, 130, 65, 120], [320, 90, 60, 130], [320, 230, 70, 110]]) D.circ(x, y, r, n);
  for (const [x, y] of [[260, 180], [350, 140], [390, 230], [300, 240], [230, 240], [330, 95]]) D.circ(x, y, 9, 210);
};
