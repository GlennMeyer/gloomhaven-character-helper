import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-discard',
  templateUrl: './discard.component.html',
  styleUrls: ['./discard.component.scss']
})
export class DiscardComponent implements OnInit {
  @Input() value: Array<Object>;
  @Output() card = new EventEmitter<object>();
  
  type: string = 'discardPile';

  sendCard(obj, src, dest) {
    this.card.emit({obj, from: src, to: dest});
  }

  constructor() { }

  ngOnInit() {
  }

}
