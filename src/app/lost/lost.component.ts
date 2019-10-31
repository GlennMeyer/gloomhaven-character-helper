import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {
  @Input() value: Array<Object>;
  @Output() card = new EventEmitter<object>();

  type: string = 'lostPile';
  
  sendCard(obj, src, dest) {
    this.card.emit({obj, from: src, to: dest});
  }  

  constructor() { }

  ngOnInit() {
  }

}
