// Letter Bounce – gemeinsame Pixelgrafik der Spielsteine (wird vom Spiel und vom Level-Editor genutzt).
// Alle Funktionen liefern ein 2D-Canvas; das Spiel macht daraus Three.js-Texturen.

function rng(seed) {
  return () => {
    seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function bevel(g, s, light, dark, w) {
  g.fillStyle = light; g.fillRect(0, 0, s, w); g.fillRect(0, 0, w, s);
  g.fillStyle = dark;  g.fillRect(0, s - w, s, w); g.fillRect(s - w, 0, w, s);
}

// crack: 0 = normale Mauer, 1 = dicker Riss (Brüchiger Mauerstein 1), 2 = dünnerer Riss (Brüchiger Mauerstein 2),
//        3 = kleiner, dünner Riss (Brüchiger Mauerstein 3), 4 = noch kleinerer, dünnerer Riss (Brüchiger Mauerstein 4)
function wallCanvas(crack = 0) {
  const s = 32, c = makeCanvas(s, s), g = c.getContext('2d'), rnd = rng(42);
  g.fillStyle = '#7d7d82'; g.fillRect(0, 0, s, s);
  for (let i = 0; i < 260; i++) {
    const v = 95 + Math.floor(rnd() * 70);
    g.fillStyle = `rgb(${v},${v},${v + 4})`;
    g.fillRect(Math.floor(rnd() * s), Math.floor(rnd() * s), 1 + Math.floor(rnd() * 2), 1);
  }
  if (crack) {
    const main = [[5, 1], [11, 8], [9, 13], [16, 17], [13, 23], [19, 31]];
    const branch = [[16, 17], [24, 14], [30, 19]];
    const stroke = (pts, color, w, dx = 0, dy = 0) => {
      g.strokeStyle = color; g.lineWidth = w; g.lineJoin = 'miter';
      g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x + dx, y + dy) : g.moveTo(x + dx, y + dy)); g.stroke();
    };
    const w = crack === 1 ? 3.5 : crack === 2 ? 1.5 : crack === 3 ? 1 : 0.7;
    const parts = crack === 4 ? [main.slice(0, 3)] : crack === 3 ? [main.slice(0, 4)] : [main, branch];
    for (const pts of parts) {
      stroke(pts, '#c4c4ca', w, 1, 1);   // heller Bruchrand
      stroke(pts, '#1e1e22', w);
    }
  } else {
    g.fillStyle = '#55555a';  // feiner Haarriss
    [[9, 6], [10, 7], [10, 8], [11, 9], [12, 9], [13, 10], [13, 11], [20, 22], [21, 23], [22, 23]]
      .forEach(([x, y]) => g.fillRect(x, y, 1, 1));
  }
  bevel(g, s, '#b4b4ba', '#3e3e44', 2);
  sepiaTint(g, s, s);
  return c;
}

// Grautöne leicht in Richtung Sepia einfärben (Helligkeit bleibt erhalten)
function sepiaTint(g, w, h, amount = 0.35) {
  const img = g.getImageData(0, 0, w, h), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const l = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    d[i]     += (Math.min(255, l * 1.12) - d[i]) * amount;
    d[i + 1] += (l * 0.98 - d[i + 1]) * amount;
    d[i + 2] += (l * 0.78 - d[i + 2]) * amount;
  }
  g.putImageData(img, 0, 0);
}

// Diamant (Symbol für den Level-Editor; im Spiel ist er ein 3D-Edelstein)
function diamondCanvas() {
  const s = 32, c = makeCanvas(s, s), g = c.getContext('2d');
  g.fillStyle = '#16120b'; g.fillRect(0, 0, s, s);
  const poly = (pts, color) => {
    g.fillStyle = color; g.beginPath();
    pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y));
    g.closePath(); g.fill();
  };
  poly([[10, 7], [22, 7], [28, 13], [4, 13]], '#bff3ff');              // Krone
  poly([[10, 7], [16, 7], [13, 13]], '#ffffff');
  poly([[22, 7], [28, 13], [19, 13]], '#7fd8f0');
  poly([[4, 13], [28, 13], [16, 28]], '#5cc4e6');                      // Unterteil
  poly([[4, 13], [13, 13], [16, 28]], '#9fe6fa');
  poly([[19, 13], [28, 13], [16, 28]], '#2f8fb8');
  g.fillStyle = '#ffffff'; g.fillRect(8, 9, 2, 2);                      // Glanzpunkt
  return c;
}

// Münzen: verschwinden bei Berührung wie der Diamant und bringen Bonuspunkte
const COINS = {
  m: { name: 'Blechmünze',  points: 5,  main: '#8e8e94', light: '#d2d2d8', dark: '#46464c', hex: 0x9c968a },
  n: { name: 'Bronzemünze', points: 25, main: '#a8662e', light: '#e0a066', dark: '#52300f', hex: 0xb07034 },
};

// Münze mit geprägtem Wert (Symbol für den Level-Editor und Textur der Münzseiten im Spiel).
// Ohne Hintergrund füllt die Münze das ganze Canvas aus, passend zum Deckel des 3D-Zylinders.
function coinCanvas(kind, bg = '#16120b') {
  const k = COINS[kind], s = 32, c = makeCanvas(s, s), g = c.getContext('2d'), m = s / 2;
  const r = bg ? 12 : 16;
  const disc = (dx, dy, rad, col) => { g.fillStyle = col; g.beginPath(); g.arc(m + dx, m + dy, rad, 0, Math.PI * 2); g.fill(); };
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, s, s); disc(1, 1, r, '#000'); }
  disc(0, 0, r, k.dark);
  disc(-0.5, -0.5, r - 1.5, k.light);
  disc(0.5, 0.5, r - 2.5, k.main);
  g.strokeStyle = k.dark; g.lineWidth = 1;
  g.beginPath(); g.arc(m, m, r - 4.5, 0, Math.PI * 2); g.stroke();
  const text = String(k.points);
  g.font = `${text.length > 1 ? 7 : 9}px "Press Start 2P", monospace`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = k.dark; g.fillText(text, m + 1, m + 2);
  g.fillStyle = k.light; g.fillText(text, m, m + 1);
  if (kind === 'm') sepiaTint(g, s, s);   // Grau mit leichtem Sepia-Ton wie die Mauer
  return c;
}

// Schlüssel und Schlösser: Schlüssel = Kleinbuchstabe, Schloss = derselbe Großbuchstabe
const KEY_COLORS = {
  y: { name: 'gelb', main: '#f2c418', light: '#ffe680', dark: '#7a5c00', hex: 0xf2c418 },
  g: { name: 'grün', main: '#3fae3a', light: '#9be894', dark: '#16501a', hex: 0x3fae3a },
  u: { name: 'blau', main: '#3a6ee8', light: '#9ab8ff', dark: '#162e6e', hex: 0x3a6ee8 },
  r: { name: 'rot',  main: '#d8352a', light: '#ff9585', dark: '#5e1210', hex: 0xd8352a },
};

// Schloss: Stahlrahmen mit farbiger Platte und Schlüsselloch
function lockCanvas(color) {
  const k = KEY_COLORS[color], s = 32, c = makeCanvas(s, s), g = c.getContext('2d');
  g.fillStyle = '#5c574e'; g.fillRect(0, 0, s, s);
  bevel(g, s, '#9a9284', '#2c2924', 2);
  g.fillStyle = k.main; g.fillRect(5, 5, 22, 22);
  g.fillStyle = k.light; g.fillRect(5, 5, 22, 2); g.fillRect(5, 5, 2, 22);
  g.fillStyle = k.dark; g.fillRect(5, 25, 22, 2); g.fillRect(25, 5, 2, 22);
  for (const [x, y] of [[8, 8], [22, 8], [8, 22], [22, 22]]) {     // Nieten
    g.fillStyle = k.dark; g.fillRect(x, y, 2, 2);
    g.fillStyle = k.light; g.fillRect(x, y, 1, 1);
  }
  g.fillStyle = '#120c06';                                          // Schlüsselloch
  g.beginPath(); g.arc(16, 13, 3.5, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.moveTo(14.5, 14); g.lineTo(17.5, 14); g.lineTo(19, 22); g.lineTo(13, 22); g.closePath(); g.fill();
  return c;
}

// Schlüssel (Symbol für Editor und Schlüsselanzeige; im Spiel ist er ein 3D-Modell)
function keyCanvas(color, bg = '#16120b') {
  const k = KEY_COLORS[color], s = 32, c = makeCanvas(s, s), g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, s, s); }
  const shape = (dx, dy, col) => {
    g.fillStyle = col; g.strokeStyle = col;
    g.lineWidth = 4; g.beginPath(); g.arc(10 + dx, 16 + dy, 5, 0, Math.PI * 2); g.stroke();   // Ring
    g.fillRect(15 + dx, 14 + dy, 14, 4);                                                     // Schaft
    g.fillRect(22 + dx, 18 + dy, 3, 5); g.fillRect(26 + dx, 18 + dy, 3, 4);                  // Bart
  };
  shape(1, 1, k.dark);
  shape(0, 0, k.main);
  g.fillStyle = k.light; g.fillRect(16, 14, 12, 1); g.fillRect(7, 12, 2, 2);
  return c;
}

const SKULL = [
  '...XXXXXX...',
  '.XXXXXXXXXX.',
  'XXXXXXXXXXXX',
  'XX...XX...XX',
  'XX...XX...XX',
  'XXX.XXXX.XXX',
  'XXXXX..XXXXX',
  '.XXXXXXXXXX.',
  '..XXXXXXXX..',
  '..X.X..X.X..',
  '..XXXXXXXX..',
];

function skullCanvas() {
  const s = 32, c = makeCanvas(s, s), g = c.getContext('2d');
  g.fillStyle = '#2f9e3a'; g.fillRect(0, 0, s, s);
  bevel(g, s, '#6fd977', '#145a1b', 2);
  SKULL.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch !== 'X') return;
    g.fillStyle = '#1b3b1d'; g.fillRect(4 + x * 2 + 1, 5 + y * 2 + 1, 2, 2);  // Schatten
    g.fillStyle = '#eef3dc'; g.fillRect(4 + x * 2, 5 + y * 2, 2, 2);
  }));
  return c;
}
