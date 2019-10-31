import { Component } from '@angular/core';
import { Payload } from './payload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gloomhaven-character-helper';

  cardPool: Array<Object> = [
    {
      level: 'x',
      name: 'crushing-hammer',
      initiative: 17,
    },
    {
      level: 'x',
      name: 'reserved-energy',
      initiative: 88,
    },
    {
      level: '1',
      name: 'restock',
      initiative: 73,
    },
    {
      level: '1',
      name: 'proficiency',
      initiative: 62,
    },
    {
      level: '1',
      name: 'cleaving-axe',
      initiative: 52,
    },
    {
      level: '1',
      name: 'oversized-pack',
      initiative: 81,
    },
    {
      level: '1',
      name: 'impaling-spear',
      initiative: 48,
    },
    {
      level: '1',
      name: 'crippling-bow',
      initiative: 44,
    },
    {
      level: '6',
      name: 'catastrophic-bomb',
      initiative: 46,
    },
    {
      level: '7',
      name: 'scroll-of-blizzards',
      initiative: 46,
    },
    {
      level: '9',
      name: 'scroll-of-annihilation',
      initiative: 56,
    },
  ];

  playerHand: Array<Object> = [
    {
      level: 'x',
      name: 'scroll-of-recall',
      initiative: 98,
    },
    {
      level: '1',
      name: 'iron-bulwark',
      initiative: 19,
    },
    {
      level: '1',
      name: 'sharpening-kit',
      initiative: 23,
    },
    {
      level: '1',
      name: 'hastened-step',
      initiative: 26,
    },
    {
      level: '2',
      name: 'bladed-boomerang',
      initiative: 40,
    },
    {
      level: '3',
      name: 'scroll-of-lightning',
      initiative: 77,
    },
    {
      level: '4',
      name: 'giant-club',
      initiative: 61,
    },
    {
      level: '5',
      name: 'reinforced-steel',
      initiative: 12,
    },
    {
      level: '8',
      name: 'portable-ballista',
      initiative: 41,
    },
  ];

  inventory: Array<Object> = [
    {name: 'eagle-eye-goggles', maxCharges: 0, charges: null, removable: false, spent: false, consumed: null},
    {name: 'minor-healing-potion', maxCharges: 0, charges: null, removable: false, spent: null, consumed: false},
    {name: 'jagged-sword', maxCharges: 0, charges: null, removable: false, spent: false, consumed: null},
    {name: 'major-healing-potion', maxCharges: 0, charges: null, removable: false, spent: null, consumed: false},
    {name: 'tower-shield', maxCharges: 0, charges: null, removable: false, spent: false, consumed: null},
    {name: 'major-stamina-potion', maxCharges: 0, charges: null, removable: false, spent: null, consumed: false},
    {name: 'rocket-boots', maxCharges: 0, charges: null, removable: false, spent: false, consumed: null},
    {name: 'steam-armor', maxCharges: 5, charges: 0, removable: false, spent: null, consumed: false},
    {name: 'resonant-crystal', maxCharges: 0, charges: null, removable: false, spent: null, consumed: false},
    {name: 'utility-belt', maxCharges: 0, charges: null, removable: true, spent: null, consumed: null},
  ];

  activeArea: Array<Object> = [];

  discardPile: Array<Object> = [];

  lostPile: Array<Object> = [];

  moveCard(payload: Payload): void {
    console.log(payload);
    let from = payload.from;
    let to = payload.to;
    let card = payload.obj;
    let idx = this[from].indexOf(card);

    if(to === 'activeArea' && this.activeArea.length === 2) {
      return;
    }

    this[from].splice(idx, 1);
    this[to].push(card);
  }
}
