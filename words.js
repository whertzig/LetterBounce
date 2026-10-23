// Letter Bounce – Wortliste (wird vom Spiel und vom Level-Editor genutzt).
//
// Französische Substantive, gruppiert nach Länge (= Anzahl Buchstabensteine im Level).
// [Artikel, Wort, Hintergrundbild, deutsche Übersetzung mit Artikel]. Nur Wörter mit le/la, damit das
// Geschlecht sichtbar ist (kein l'). Die Übersetzung zieht das Flugzeug als Buchstabenkette hinter sich her.
// Hintergrundbilder: MOND, KATZE, SONNE, BLUME, HUND, APFEL, BAUM, SPINNE, HAUS, BOOT, KAKTUS,
// SCHIFF, KIRSCHE, FISCH, GITARRE (sowie ungenutzt: PILZ, VOGEL, RAKETE, FAHRRAD, ELEFANT).
const WORDS = {
  4: [['LA', 'LUNE', 'MOND', 'DER MOND'], ['LE', 'CHAT', 'KATZE', 'DIE KATZE'], ['LE', 'CIEL', 'SONNE', 'DER HIMMEL'],
      ['LA', 'ROSE', 'BLUME', 'DIE ROSE']],
  5: [['LE', 'CHIEN', 'HUND', 'DER HUND'], ['LA', 'FLEUR', 'BLUME', 'DIE BLUME'], ['LA', 'POMME', 'APFEL', 'DER APFEL'],
      ['LE', 'SAPIN', 'BAUM', 'DIE TANNE'], ['LA', 'TOILE', 'SPINNE', 'DAS SPINNENNETZ']],
  6: [['LA', 'MAISON', 'HAUS', 'DAS HAUS'], ['LE', 'BATEAU', 'BOOT', 'DAS BOOT'], ['LE', 'SOLEIL', 'SONNE', 'DIE SONNE'],
      ['LE', 'CACTUS', 'KAKTUS', 'DER KAKTUS'], ['LE', 'NAVIRE', 'SCHIFF', 'DAS SCHIFF'],
      ['LA', 'CERISE', 'KIRSCHE', 'DIE KIRSCHE']],
  7: [['LE', 'POISSON', 'FISCH', 'DER FISCH'], ['LA', 'GUITARE', 'GITARRE', 'DIE GITARRE'],
      ['LE', 'VOILIER', 'BOOT', 'DAS SEGELBOOT']],
};
