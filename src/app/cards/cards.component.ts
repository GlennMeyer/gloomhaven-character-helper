import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() value: Array<Object>;
  @Input() type: String;
  @Output() card = new EventEmitter<object>();

  map: object = {
    pool: {
      from: 'cardPool',
      to(): string {
        return 'playerHand';
      }
    },
    hand: {
      from: 'playerHand',
      to(bool: boolean): string {
        return bool ? 'activeArea' : 'cardPool'
      }
    }
  }

  show: Boolean = true;

  toggle() {
    this.show = !this.show;
  }

  sendCard(obj, src, flag) {
    let from = this.map[src].from,
        to = this.map[src].to(flag);

    this.card.emit({obj, from, to});
  }

  constructor() { }

  ngOnInit() { }
}
