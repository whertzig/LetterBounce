// Letter Bounce – Level 2
//
// time: Zeitbegrenzung des Levels in Sekunden (z. B. 180 = 3:00 Minuten).
// map:  Jede Zeile ist eine Reihe des Spielfelds (genau 17 Zeichen, 12 Zeilen).
//   #    Mauer
//   X    Totenkopf-Stein
//   1-9  Buchstabenstein, durchnummeriert: 1 = erster Buchstabe des Worts, 2 = zweiter usw.
//        Jede Nummer genau einmal, lückenlos ab 1. Anzahl = Wortlänge (in words.js muss es
//        Wörter dieser Länge geben).
//   S    Startposition der Scheibe (genau einmal)
//   a    Brüchiger Mauerstein 1 (verschwindet beim ersten Stoß)
//   b    Brüchiger Mauerstein 2 (wird beim Stoß zu 1)
//   c    Brüchiger Mauerstein 3 (wird beim Stoß zu 2)
//   d    Brüchiger Mauerstein 4 (wird beim Stoß zu 3)
//   D    Diamant (verschwindet bei Berührung, 250 Bonuspunkte)
//   n    Bronzemünze (verschwindet bei Berührung, 25 Bonuspunkte)
//   m    Blechmünze (verschwindet bei Berührung, 5 Bonuspunkte)
//   y g u r  Schlüssel gelb, grün, blau, rot (wird bei Berührung eingesammelt)
//   Y G U R  Schloss gelb, grün, blau, rot (unzerstörbar, außer man hat den Schlüssel derselben Farbe)
//   .    frei
// Der äußere Rand sollte komplett aus Mauer (#) bestehen.

(window.SBALL_LEVELS = window.SBALL_LEVELS || [])[1] = {
  time: 180,
  map: [
    '#################',
    '#1......6......2#',
    '#...............#',
    '#...............#',
    '#...X###a###X...#',
    '#m...#.....#...m#',
    '#m...#S...X#...m#',
    '#...X#######X...#',
    '#...............#',
    '#...............#',
    '#4......5......3#',
    '#################',
  ],
};
