// Letter Bounce – Hintergrundbild BOOT
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).BOOT = function (D) {
  D.sky(185, 235, 340); D.circ(500, 110, 45, 250);
  D.rect(0, 330, 640, 150, 105);
  for (let k = 0, y = 350; y < 480; k++, y += 22)
    for (let x = (k % 2) * 30; x < 640; x += 60) D.curve(x, y, x + 15, y - 8, x + 30, y, 150, 3);
  D.rect(316, 140, 8, 180, 50);                                     // Mast
  D.poly([[328, 150], [328, 305], [450, 305]], 235);                // Segel
  D.poly([[312, 165], [312, 300], [230, 300]], 215);
  D.poly([[324, 140], [324, 118], [360, 129]], 60);                 // Fahne
  D.poly([[170, 315], [470, 315], [425, 375], [215, 375]], 60);     // Rumpf
  D.line([[175, 322], [465, 322]], 180, 4);
  D.line([[120, 120], [135, 110], [150, 120]], 60, 3); D.line([[160, 90], [172, 82], [184, 90]], 60, 3);
};
