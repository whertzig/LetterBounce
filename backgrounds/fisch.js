// Letter Bounce – Hintergrundbild FISCH
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).FISCH = function (D, g) {
  D.sky(160, 50);
  g.globalAlpha = 0.12;
  for (const x of [80, 260, 450]) D.poly([[x, 0], [x + 60, 0], [x + 160, 480], [x + 40, 480]], 255);
  g.globalAlpha = 1;
  D.ell(320, 530, 420, 90, 120);                                    // Sand
  for (const x of [60, 120, 520, 590]) D.curve(x, 480, x + 40, 380, x - 10, 280, 80, 10);
  D.poly([[430, 240], [530, 165], [510, 240], [530, 315]], 170);    // Schwanzflosse
  D.poly([[290, 175], [360, 130], [390, 185]], 160);                // Rückenflosse
  D.ell(320, 240, 135, 78, 205);                                    // Körper
  for (let x = 300; x < 420; x += 26) for (let y = 205; y <= 280; y += 26) D.curve(x, y - 12, x + 12, y, x, y + 12, 160, 3);
  D.curve(240, 190, 262, 240, 240, 290, 150, 4);                    // Kiemen
  D.circ(225, 220, 16, 250); D.circ(222, 220, 8, 20);               // Auge
  D.curve(188, 255, 200, 262, 214, 258, 90, 3);
  D.ring(170, 170, 10, 220, 3); D.ring(150, 120, 14, 220, 3); D.ring(175, 70, 8, 220, 3);
};
