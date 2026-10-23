// Letter Bounce – Hintergrundbild ELEFANT
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).ELEFANT = function (D) {
  D.sky(200, 240); D.ground(395, 150); D.circ(540, 80, 40, 250);
  D.line([[520, 260], [545, 320]], 110, 5);                         // Schwanz
  D.rect(300, 320, 45, 85, 105); D.rect(455, 320, 45, 85, 105);     // hintere Beine
  D.ell(390, 270, 140, 90, 135);                                    // Körper
  D.rect(330, 330, 45, 75, 125); D.rect(410, 330, 45, 75, 125);     // vordere Beine
  D.circ(240, 230, 72, 140);                                        // Kopf
  D.curve(195, 260, 150, 330, 180, 400, 140, 32);                   // Rüssel
  D.curve(180, 400, 195, 412, 205, 395, 140, 22);
  D.poly([[205, 275], [175, 310], [195, 300], [220, 280]], 240);    // Stoßzahn
  D.ell(285, 235, 55, 78, 120); D.ell(290, 235, 42, 62, 105);       // Ohr
  D.circ(215, 210, 7, 25);
};
