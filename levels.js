// levels.js
export const LEVELS = {
  1: {
    index: 1, name: 'Il Risveglio Rosa', file: '1.html', next: '2.html',
    seed: 12345, leaves: 4, enemies: 1, baseI: 950, startAmmo: 3,
    style: 'standard',
    types: ['hunter'],
    story: 'Raccogli tutte le foglie magiche per aprire la porta del labirinto.'
  },
  2: {
    index: 2, name: 'Ombre nel Giardino', file: '2.html', next: '3.html',
    seed: 45678, leaves: 5, enemies: 2, baseI: 800, startAmmo: 3,
    style: 'braided',
    types: ['hunter', 'wanderer'],
    story: 'I fantasmi si avvicinano. Cerca i forzieri e conserva le munizioni.'
  },
  3: {
    index: 3, name: 'La Notte delle Rose', file: '3.html', next: '4.html',
    seed: 78901, leaves: 6, enemies: 3, baseI: 680, startAmmo: 4,
    style: 'sparse',
    types: ['hunter', 'wanderer', 'armored'],
    story: 'Le rose nascondono il sentiero. Ogni fantasma è più veloce di prima.'
  },
  4: {
    index: 4, name: 'Il Cuore Oscuro', file: '4.html', next: '5.html',
    seed: 24680, leaves: 7, enemies: 4, baseI: 580, startAmmo: 4,
    style: 'standard',
    types: ['hunter', 'wanderer', 'armored', 'wanderer'],
    story: 'Sei vicino al centro del labirinto. Muoviti con attenzione e non sprecare munizioni.'
  },
  5: {
    index: 5, name: 'La Vittoria di Gip', file: '5.html', next: '6.html',
    seed: 97531, leaves: 8, enemies: 5, baseI: 500, startAmmo: 5,
    style: 'braided',
    types: ['hunter', 'wanderer', 'armored', 'wanderer', 'armored'],
    story: 'Ultima sfida: raccogli tutte le foglie, supera i fantasmi e libera Gip dal Labirinto.'
  },
  6: {
    index: 6, name: "L'Eco dei Passi", file: '6.html', next: '7.html',
    seed: 11111, leaves: 9, enemies: 6, baseI: 460, startAmmo: 5,
    style: 'sparse',
    types: ['hunter', 'wanderer', 'armored', 'hunter', 'wanderer', 'hunter'],
    story: 'Il labirinto si allunga. I tuoi passi riecheggiano tra le mura antiche.'
  },
  7: {
    index: 7, name: 'Il Cerchio di Spine', file: '7.html', next: '8.html',
    seed: 22222, leaves: 9, enemies: 7, baseI: 440, startAmmo: 5,
    style: 'chaotic',
    types: ['hunter', 'wanderer', 'armored', 'hunter', 'wanderer', 'armored', 'hunter'],
    story: 'Un anello di spine circonda il labirinto. Attento: le ombre si stringono.'
  },
  8: {
    index: 8, name: 'Il Fuoco delle Ombre', file: '8.html', next: '9.html',
    seed: 33333, leaves: 10, enemies: 7, baseI: 420, startAmmo: 5,
    style: 'braided',
    types: ['hunter', 'wanderer', 'armored', 'hunter', 'wanderer', 'armored', 'hunter'],
    story: 'Le ombre hanno imparato a colpire a distanza. Non restare allo scoperto!'
  },
  9: {
    index: 9, name: 'La Furia del Labirinto', file: '9.html', next: '10.html',
    seed: 44444, leaves: 10, enemies: 8, baseI: 400, startAmmo: 5,
    style: 'dense',
    types: ['hunter', 'hunter', 'wanderer', 'wanderer', 'armored', 'armored', 'hunter', 'armored'],
    story: 'Il labirinto è furioso. I fantasmi ti bersagliano senza tregua.'
  },
  10: {
    index: 10, name: "Il Canto dell'Abisso", file: '10.html', next: '11.html',
    seed: 55555, leaves: 11, enemies: 8, baseI: 380, startAmmo: 6,
    style: 'chaotic',
    types: ['hunter', 'hunter', 'wanderer', 'wanderer', 'armored', 'armored', 'armored', 'hunter'],
    story: "Un canto cupo risuona dall'abisso. Le ombre armate sono ovunque."
  },
  11: {
    index: 11, name: 'La Torre del Silenzio', file: '11.html', next: '12.html',
    seed: 66666, leaves: 11, enemies: 9, baseI: 360, startAmmo: 6,
    style: 'sparse',
    types: ['hunter', 'hunter', 'wanderer', 'wanderer', 'armored', 'armored', 'armored', 'wanderer', 'armored'],
    story: 'La torre non fa rumore, ma le ombre sì. Sali verso la cima.'
  },
  12: {
    index: 12, name: 'Il Cuore Ghiacciato', file: '12.html', next: '13.html',
    seed: 77777, leaves: 12, enemies: 9, baseI: 340, startAmmo: 6,
    style: 'dense',
    types: ['hunter', 'hunter', 'hunter', 'wanderer', 'wanderer', 'armored', 'armored', 'armored', 'hunter'],
    story: 'Il cuore del labirinto è di ghiaccio. Ogni passo è una sfida.'
  },
  13: {
    index: 13, name: 'La Danza delle Fiamme', file: '13.html', next: '14.html',
    seed: 88888, leaves: 12, enemies: 10, baseI: 320, startAmmo: 6,
    style: 'chaotic',
    types: ['hunter', 'hunter', 'hunter', 'wanderer', 'wanderer', 'armored', 'armored', 'armored', 'wanderer', 'hunter'],
    story: 'Le fiamme danzano. Non fermarti o sarai circondato.'
  },
  14: {
    index: 14, name: "L'Ultimo Respiro", file: '14.html', next: '15.html',
    seed: 12121, leaves: 13, enemies: 10, baseI: 300, startAmmo: 7,
    style: 'dense',
    types: ['hunter', 'hunter', 'hunter', 'wanderer', 'wanderer', 'wanderer', 'armored', 'armored', 'armored', 'hunter'],
    story: "L'ultimo respiro prima della fine. Tutto si fa più rapido."
  },
  15: {
    index: 15, name: 'La Fine del Labirinto', file: '15.html', next: 'vittoria.html',
    seed: 99999, leaves: 14, enemies: 10, baseI: 280, startAmmo: 7,
    style: 'chaotic',
    types: ['hunter', 'hunter', 'hunter', 'wanderer', 'wanderer', 'wanderer', 'armored', 'armored', 'armored', 'armored'],
    story: "Sei giunto alla fine. Le ombre ti attendono per l'ultimo assalto."
  }
};