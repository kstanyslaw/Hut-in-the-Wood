import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agepicker',
  templateUrl: './agepicker.component.html',
  styleUrls: ['./agepicker.component.css']
})
export class AgepickerComponent implements OnInit {
  
  @Output() onChooseAge = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ages = [
    {
      range: '10 – 13',
      answer: 1
    },
    {
      range: '14-18',
      answer: 2
    },
    {
      range: '18+',
      answer: 3
    }
  ];
  
  onSelect (choosenAge) {
    this.onChooseAge.emit(choosenAge.answer);
  }
}
