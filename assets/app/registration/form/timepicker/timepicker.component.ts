import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {

  @Output() onChooseTime = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  times = [
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
    '24:00',
    '02:00'
  ]

  onSelect (time) {
    this.onChooseTime.emit(time);
  }
}
