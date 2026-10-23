// Letter Bounce – Hintergrundbild HAUS
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).HAUS = function (D) {
  D.sky(190, 240); D.circ(110, 90, 35, 250); D.ground(385, 135);
  D.rect(390, 110, 32, 90, 80);                                     // Schornstein
  D.circ(408, 85, 16, 215); D.circ(425, 62, 20, 225); D.circ(448, 36, 24, 235);
  D.rect(195, 225, 250, 165, 175);                                  // Wände
  D.poly([[170, 232], [320, 105], [470, 232]], 80);                 // Dach
  D.line([[170, 232], [320, 105], [470, 232]], 60, 6);
  D.rect(292, 295, 56, 95, 70); D.circ(336, 345, 4, 220);           // Tür
  for (const wx of [225, 375]) {                                     // Fenster
    D.rect(wx, 255, 52, 48, 235);
    D.line([[wx + 26, 255], [wx + 26, 303]], 90, 4);
    D.line([[wx, 279], [wx + 52, 279]], 90, 4);
    D.line([[wx, 255], [wx + 52, 255], [wx + 52, 303], [wx, 303], [wx, 255]], 90, 4);
  }
  D.poly([[300, 390], [340, 390], [380, 480], [260, 480]], 185);    // Weg
  D.rect(524, 340, 14, 50, 70); D.circ(530, 320, 45, 95);           // Busch
};
