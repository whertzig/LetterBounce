// Letter Bounce – Hintergrundbild SCHIFF
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).SCHIFF = function (D) {
  D.sky(190, 235, 320); D.rect(0, 320, 640, 160, 100);
  D.circ(300, 120, 22, 215); D.circ(320, 95, 28, 225); D.circ(350, 70, 32, 232);
  D.circ(375, 120, 22, 215); D.circ(395, 95, 28, 225); D.circ(425, 70, 32, 232);
  D.rect(255, 140, 38, 70, 70); D.rect(330, 140, 38, 70, 70);       // Schornsteine
  D.rect(255, 155, 38, 12, 215); D.rect(330, 155, 38, 12, 215);
  D.rect(225, 200, 190, 45, 215); D.rect(180, 240, 290, 55, 200);   // Aufbauten
  for (let x = 195; x < 455; x += 25) D.rect(x, 255, 14, 14, 80);
  D.poly([[100, 290], [545, 290], [500, 370], [150, 370]], 55);     // Rumpf
  for (let x = 170; x < 480; x += 40) D.circ(x, 325, 8, 230);
  for (let k = 0, y = 385; y < 480; k++, y += 24)
    for (let x = (k % 2) * 30; x < 640; x += 60) D.curve(x, y, x + 15, y - 8, x + 30, y, 145, 3);
};
