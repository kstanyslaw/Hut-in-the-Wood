import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teammates',
  templateUrl: './teammates.component.html',
  styleUrls: ['./teammates.component.css']
})
export class TeammatesComponent implements OnInit {

  @Output() onChooseTeammate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  teammates = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  onSelect (teammates) {
    this.onChooseTeammate.emit(teammates);
  }
}
