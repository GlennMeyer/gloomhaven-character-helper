import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})

export class CountersComponent implements OnInit {
  @Input() type: string;
  
  value: number = 26;

  adjustValue(type: string): void {
    switch(type) {
      case 'add':
        this.value += 1;
        break;
      case 'sub':
        this.value -= 1;
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
