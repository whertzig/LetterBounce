// Letter Bounce – Hintergrundbild FAHRRAD
//
// Malfunktion, aufgerufen von backgroundTexture() in index.html auf einer 640×480-Leinwand.
//   D  Zeichenhilfen: rect, circ, ring, ell, poly, line, curve, sky, ground, stars (n = Grauwert 0–255)
//   g  Canvas-2D-Kontext (für Sonderfälle), v  Grauwert -> CSS-Farbe
// Das Bild wird anschließend sepia getönt, abgedunkelt und mit Vignette versehen.
(window.SBALL_BACKGROUNDS = window.SBALL_BACKGROUNDS || {}).FAHRRAD = function (D) {
  D.sky(195, 240); D.ground(395, 140); D.circ(110, 90, 35, 250);
  const A = [190, 315], B = [315, 320], C = [285, 200], Dp = [430, 200], E = [455, 315];
  for (const w of [A, E]) {
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6;
      D.line([w, [w[0] + Math.cos(a) * 78, w[1] + Math.sin(a) * 78]], 120, 2);
    }
    D.ring(w[0], w[1], 80, 40, 10); D.circ(w[0], w[1], 7, 60);
  }
  D.line([A, B, C, A], 70, 8); D.line([C, Dp, B], 70, 8); D.line([Dp, E], 70, 8);
  D.line([C, [280, 180]], 50, 6); D.ell(272, 175, 32, 9, 40);       // Sattel
  D.line([Dp, [425, 170], [455, 165]], 50, 6);                     // Lenker
  D.circ(B[0], B[1], 16, 60); D.line([[300, 345], [330, 295]], 50, 6);
};
