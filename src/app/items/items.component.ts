import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() value: Array<Object>;

  tap(item: Item): void {
    console.log(item);
    if(item.maxCharges > 0 && item.charges < item.maxCharges - 1 && item.consumed === false) {
      item.charges++;
    } else if(item.spent !== null) {
      item.spent = !item.spent;
    } else if(item.consumed !== null) {
      if(item.charges) item.charges = 0;
      item.consumed = !item.consumed;
    } else if(item.removable === true) {
      let idx = this.value.indexOf(item);
      this.value.splice(idx, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
