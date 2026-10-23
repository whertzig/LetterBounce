// Letter Bounce – Hintergrundbild KATZE
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).KATZE = function (D) {
  D.sky(60, 120); D.stars(40, 250); D.circ(510, 100, 50, 230);
  D.rect(0, 400, 640, 80, 55);                                      // Mauer
  for (let y = 400; y < 480; y += 20) D.line([[0, y], [640, y]], 35, 2);
  D.curve(390, 380, 500, 330, 450, 220, 150, 18);                   // Schwanz
  D.ell(320, 320, 85, 90, 150);                                     // Körper
  D.ell(290, 405, 25, 12, 170); D.ell(350, 405, 25, 12, 170);       // Pfoten
  D.poly([[270, 170], [262, 105], [305, 145]], 160);                // Ohren
  D.poly([[370, 170], [378, 105], [335, 145]], 160);
  D.poly([[274, 160], [268, 122], [296, 147]], 120);
  D.poly([[366, 160], [372, 122], [344, 147]], 120);
  D.circ(320, 200, 62, 160);                                        // Kopf
  D.ell(295, 195, 13, 9, 240); D.ell(345, 195, 13, 9, 240);
  D.ell(295, 195, 3, 8, 20); D.ell(345, 195, 3, 8, 20);
  D.poly([[312, 218], [328, 218], [320, 228]], 80);
  D.line([[320, 228], [320, 236]], 80, 2);
  D.curve(308, 240, 314, 245, 320, 236, 80, 2); D.curve(320, 236, 326, 245, 332, 240, 80, 2);
  for (const [a, b] of [[[300, 225], [240, 215]], [[300, 230], [240, 238]], [[340, 225], [400, 215]], [[340, 230], [400, 238]]])
    D.line([a, b], 230, 2);
};
