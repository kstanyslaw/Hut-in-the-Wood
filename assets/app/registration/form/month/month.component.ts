import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  @Output() onChooseDate = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  date = new Date();
  
  // Return nubber of * in month[*, *, *, 1, 2, ...][...]...
  EmptyDays (firstDay) {
    var eD = firstDay.getDay();
    if (eD == 0) return 6;
    return eD - 1;
  }

  Today (day : Date) {
    return (
      this.date.getFullYear() == day.getFullYear() &&
      this.date.getMonth() == day.getMonth() &&
      this.date.getDate() == day.getDate()
    )
  }

  GetMonthName(month) {
    switch (month[2][3].date.getMonth()) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
    }
  }
    
  CreateMonth (monthNumber) {
    var month = [];
    var firstDay = new Date(this.date.getFullYear(), monthNumber, 1);
    var lastDay = new Date(this.date.getFullYear(), monthNumber + 1, 0).getDate();
    var dayNotAvaliable = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()+31);
    var numberOfEmptyDays = this.EmptyDays(firstDay);

    for (let index = 0; index < lastDay + this.EmptyDays(firstDay); index++) {
      if (numberOfEmptyDays != 0) {
        month[index] = {};
        numberOfEmptyDays = numberOfEmptyDays - 1;
      }
      else {
        var newDate = new Date(this.date.getFullYear(), monthNumber, index - this.EmptyDays(firstDay)+1);
        var avaliable = ((newDate > this.date && newDate < dayNotAvaliable) || this.Today(newDate));
        month[index] = {
          date: newDate,
          day: newDate.getDate(),
          isAvaliable: avaliable
        };
      }
    }

    var matrix = [];
    for (var i = 0; i < month.length; i += 7) {
        matrix.push(month.slice(i, i + 7));
    }

    month = matrix;
    return month;
  }

  month = this.CreateMonth(this.date.getMonth());
  nextMonth = this.CreateMonth(this.date.getMonth()+1);

  onSelect (day) {
    this.onChooseDate.emit(day.date);
  }
}


