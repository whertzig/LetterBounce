// Letter Bounce – Hintergrundbild Standard (für Bildnamen ohne eigene Malfunktion)
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {})['_'] = function (D) {
  D.sky(120, 220);
  for (let i = 0; i < 8; i++) D.ell(80 * i, 400 - (i % 3) * 30, 120, 60, 80 + i * 10);
};
