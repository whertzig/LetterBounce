// Letter Bounce – Hintergrundbild PILZ
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).PILZ = function (D, g, v) {
  D.sky(120, 200);
  for (const x of [40, 140, 520, 600]) D.rect(x, 0, 26, 395, 110);  // Bäume im Hintergrund
  D.ground(390, 95);
  D.poly([[290, 400], [350, 400], [340, 260], [300, 260]], 215);    // Stiel
  g.fillStyle = v(65); g.beginPath(); g.ellipse(320, 268, 150, 120, 0, Math.PI, 0); g.closePath(); g.fill();
  for (const [x, y, r] of [[260, 215, 18], [330, 190, 22], [390, 225, 16], [300, 245, 12],
    [215, 250, 10], [420, 255, 11], [360, 240, 9], [280, 175, 9]]) D.circ(x, y, r, 230);
  D.rect(472, 360, 16, 35, 200);                                    // kleiner Pilz
  g.fillStyle = v(80); g.beginPath(); g.ellipse(480, 362, 34, 28, 0, Math.PI, 0); g.closePath(); g.fill();
  D.circ(470, 348, 5, 230); D.circ(492, 352, 4, 230);
};
