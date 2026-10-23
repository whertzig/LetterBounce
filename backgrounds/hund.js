// Letter Bounce – Hintergrundbild HUND
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).HUND = function (D) {
  D.sky(200, 240); D.circ(540, 90, 40, 250); D.ground(370, 150);
  D.line([[425, 285], [470, 240], [495, 195]], 95, 16);           // Schwanz
  D.rect(250, 300, 26, 95, 75); D.rect(395, 300, 26, 95, 75);       // hintere Beine
  D.ell(330, 290, 115, 58, 100);                                    // Körper
  D.rect(275, 310, 26, 88, 95); D.rect(370, 310, 26, 88, 95);       // vordere Beine
  D.ell(288, 398, 20, 9, 70); D.ell(383, 398, 20, 9, 70);
  D.circ(220, 225, 58, 115);                                        // Kopf
  D.rect(235, 268, 55, 14, 45);                                     // Halsband
  D.ell(170, 248, 40, 27, 140);                                     // Schnauze
  D.circ(136, 240, 11, 25);                                         // Nase
  D.ell(258, 225, 20, 48, 65, -0.35);                               // Ohr
  D.circ(205, 205, 8, 25); D.circ(207, 203, 3, 230);                // Auge
  D.curve(150, 262, 165, 275, 185, 262, 40, 3);                     // Maul
};
