// Letter Bounce – Hintergrundbild VOGEL
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).VOGEL = function (D) {
  D.sky(195, 240);
  D.line([[0, 370], [200, 355], [640, 330]], 70, 22);               // Ast
  D.line([[420, 340], [500, 300], [560, 290]], 70, 10);
  D.ell(500, 280, 25, 10, 110, -0.5); D.ell(560, 300, 22, 9, 110, 0.4); D.ell(120, 350, 24, 10, 110, -0.3);
  D.line([[305, 335], [300, 350]], 50, 4); D.line([[335, 335], [335, 348]], 50, 4);
  D.poly([[370, 290], [450, 330], [440, 300]], 110);                // Schwanz
  D.ell(320, 290, 75, 55, 140);                                     // Körper
  D.ell(300, 305, 45, 30, 200);                                     // Brust
  D.circ(260, 235, 42, 145);                                        // Kopf
  D.poly([[222, 228], [185, 240], [222, 250]], 230);                // Schnabel
  D.circ(250, 225, 8, 20); D.circ(252, 222, 3, 240);
  D.ell(345, 280, 58, 28, 95, 0.35);                                // Flügel
  D.circ(160, 140, 9, 60); D.line([[168, 140], [168, 100]], 60, 3);   // Noten
  D.circ(190, 120, 9, 60); D.line([[198, 120], [198, 80]], 60, 3); D.line([[168, 100], [198, 80]], 60, 4);
};
