// Letter Bounce – Hintergrundbild MOND
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).MOND = function (D, g) {
  const sky = D.sky(15, 70); D.stars(110, 330);
  D.circ(400, 190, 105, 235);
  g.fillStyle = sky; g.beginPath(); g.arc(350, 160, 100, 0, Math.PI * 2); g.fill();  // Sichel
  D.circ(480, 200, 10, 205); D.circ(455, 260, 8, 210);
  D.ell(150, 500, 320, 140, 30); D.ell(520, 520, 300, 150, 40);
};
