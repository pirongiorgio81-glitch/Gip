// save.js
import { pulseSaveIndicator } from './ui.js';
import { CS } from './constants.js';

export function saveState(level, player, state, coins, leaves, chests, enemies, hearts) {
  try {
    const coinsTaken = [], leavesTaken = [], chestsOpened = [], enemiesState = [], heartsTaken = [];
    for (const co of coins) if (co.taken) coinsTaken.push(co.r + ',' + co.c);
    for (const lf of leaves) if (lf.taken) leavesTaken.push(lf.r + ',' + lf.c);
    for (const ch of chests) if (ch.opened) chestsOpened.push(ch.r + ',' + ch.c);
    for (const e of enemies) enemiesState.push({ r: e.r, c: e.c, alive: !!e.alive && !e.dying });
    for (const hc of hearts) if (hc.taken) heartsTaken.push(hc.r + ',' + hc.c);

    const obj = {
      level: level.index, r: player.r, c: player.c, moves: state.moves, elapsed: state.elapsed,
      hp: player.hp, shields: player.shields, ammo: player.ammo, lCol: state.lCol, coinsLevel: state.coinsLevel,
      coinsTaken, leavesTaken, chestsOpened, enemiesState, heartsTaken, playerDir: player.fDir,
      doorOpen: !!state.doorOpen, gameover: !!state.gameover
    };
    localStorage.setItem('labirinto_state', JSON.stringify(obj));
    localStorage.setItem('labirinto_hp', String(player.hp));
    localStorage.setItem('labirinto_shields', String(player.shields));
    localStorage.setItem('labirinto_ammo', String(player.ammo));
    localStorage.setItem('labirinto_coins', String(state.coinsTotal));
  } catch (e) {}
  pulseSaveIndicator();
}

export function loadState(level, player, state, coins, leaves, chests, enemies, hearts) {
  try {
    const raw = localStorage.getItem('labirinto_state');
    if (!raw) return false;
    const s = JSON.parse(raw);
    if (!s || s.level !== level.index) return false;

    player.r = s.r; player.c = s.c;
    player.x = s.c * CS; player.z = s.r * CS;
    player.fDir = s.playerDir || 'down';
    player.hp = Math.max(1, Math.min(99, s.hp));
    player.shields = Math.max(0, Math.min(99, s.shields));
    player.ammo = Math.max(0, Math.min(99, s.ammo));

    state.moves = s.moves || 0;
    state.elapsed = s.elapsed || 0;
    state.lCol = s.lCol || 0;
    state.coinsLevel = s.coinsLevel || 0;
    state.coinToastShown = state.coinsLevel > 0;
    state.doorOpen = !!s.doorOpen;

    const takenCoins = new Set(s.coinsTaken || []);
    for (const co of coins) { if (takenCoins.has(co.r + ',' + co.c) && !co.taken) { co.taken = true; co.sprite.parent?.remove(co.sprite); } }
    
    const takenLeaves = new Set(s.leavesTaken || []);
    for (const lf of leaves) { if (takenLeaves.has(lf.r + ',' + lf.c) && !lf.taken) { lf.taken = true; lf.sprite.parent?.remove(lf.sprite); } }

    const takenHearts = new Set(s.heartsTaken || []);
    for (const hc of hearts) { if (takenHearts.has(hc.r + ',' + hc.c) && !hc.taken) { hc.taken = true; hc.sprite.parent?.remove(hc.sprite); } }

    const openedChests = new Set(s.chestsOpened || []);
    for (const ch of chests) { if (openedChests.has(ch.r + ',' + ch.c) && !ch.opened) { ch.opened = true; ch.group.parent?.remove(ch.group); } }

    if (Array.isArray(s.enemiesState)) {
      for (let i = 0; i < enemies.length && i < s.enemiesState.length; i++) {
        const es = s.enemiesState[i]; const e = enemies[i];
        e.r = es.r; e.c = es.c;
        e.sprite.position.set(e.c * CS, 1.05, e.r * CS);
        if (es.alive === false) { e.alive = false; e.dying = 0; e.sprite.parent?.remove(e.sprite); }
      }
    }
    return true;
  } catch (e) { return false; }
}