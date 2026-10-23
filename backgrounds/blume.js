// Letter Bounce – Hintergrundbild BLUME
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).BLUME = function (D) {
  D.sky(195, 240); D.ground(400, 120);
  D.curve(320, 410, 300, 320, 320, 230, 60, 12);                    // Stiel
  D.ell(275, 330, 40, 14, 80, -0.5); D.ell(360, 300, 40, 14, 80, 0.5);
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    D.ell(320 + Math.cos(a) * 55, 200 + Math.sin(a) * 55, 42, 22, 225, a);
  }
  D.circ(320, 200, 36, 90);
  for (const [x, y] of [[310, 190], [330, 195], [318, 212], [304, 206], [332, 182]]) D.circ(x, y, 4, 50);
  for (const [x, y] of [[80, 430], [150, 450], [500, 440], [580, 425]]) { D.circ(x, y, 9, 230); D.circ(x, y, 4, 90); }
};
