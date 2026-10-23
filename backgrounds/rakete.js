// Letter Bounce – Hintergrundbild RAKETE
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).RAKETE = function (D, g) {
  D.sky(10, 60); D.stars(140, 480);
  D.circ(110, 380, 70, 120);                                        // Planet
  g.save(); g.translate(110, 380); g.rotate(-0.3);
  g.strokeStyle = 'rgb(200,200,200)'; g.lineWidth = 6; g.beginPath(); g.ellipse(0, 0, 115, 22, 0, 0, Math.PI * 2); g.stroke();
  g.restore();
  g.save(); g.translate(340, 230); g.rotate(0.45);
  D.poly([[-30, 110], [0, 220], [30, 110]], 250);                   // Flamme
  D.poly([[-16, 110], [0, 170], [16, 110]], 200);
  D.poly([[-35, 40], [-75, 120], [-35, 100]], 110);                 // Flossen
  D.poly([[35, 40], [75, 120], [35, 100]], 110);
  D.rect(-35, -80, 70, 190, 225);                                   // Rumpf
  D.poly([[-35, -80], [0, -170], [35, -80]], 120);                  // Spitze
  D.circ(0, -20, 24, 90); D.circ(0, -20, 16, 40); D.circ(-6, -26, 5, 200);
  D.rect(-35, 60, 70, 10, 140);
  g.restore();
};
