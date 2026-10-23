// Letter Bounce – Hintergrundbild GITARRE
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).GITARRE = function (D, g) {
  D.sky(175, 215); D.rect(0, 400, 640, 80, 120);
  g.save(); g.translate(330, 250); g.rotate(-0.5); g.scale(0.8, 0.8);
  D.rect(-14, -260, 28, 200, 70);                                   // Hals
  D.rect(-22, -330, 44, 75, 50);                                    // Kopf
  for (const y of [-310, -290, -270]) { D.circ(-28, y, 6, 200); D.circ(28, y, 6, 200); }
  for (let y = -250; y < -70; y += 22) D.line([[-14, y], [14, y]], 180, 2);
  D.circ(0, -30, 78, 140); D.circ(0, 80, 100, 140);                 // Korpus
  D.ring(0, 10, 34, 190, 4); D.circ(0, 10, 30, 30);                 // Schallloch
  D.rect(-35, 105, 70, 14, 60);                                     // Steg
  for (let k = 0; k < 6; k++) D.line([[-10 + k * 4, -325], [-10 + k * 4, 110]], 230, 1);
  g.restore();
};
