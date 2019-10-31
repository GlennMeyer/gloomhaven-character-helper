import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  @Input() value: Array<Object>;
  @Output() card = new EventEmitter<object>();

  type: string = 'activeArea';

  sendCard(obj, src, dest) {
    this.card.emit({obj, from: src, to: dest});
  }

  constructor() { }

  ngOnInit() {
  }

}
