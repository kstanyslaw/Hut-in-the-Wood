import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Reservation } from './reservation.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm : FormGroup;

  choosenDate : Date;
  choosenTime : string;
  numberOfTeammates : number;
  minAgeTeammate: number;

  constructor() { }

  onSubmit() {
    var reservation = new Reservation (
      this.numberOfTeammates,
      this.minAgeTeammate,
      this.choosenDate,
      this.choosenTime,
      this.myForm.value.phone,
      this.myForm.value.name
    );
    console.log(reservation);
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup ({
      numberOfTeammates : new FormControl(null, Validators.required),
      minAgeTeammate : new FormControl(null, Validators.required),
      choosenDate : new FormControl(null, Validators.required),
      choosenTime : new FormControl(null, Validators.required),
      phone : new FormControl(null, Validators.required),
      name : new FormControl(null, Validators.required)
    })
  }

  onChooseDate (date: Date) {
    this.choosenDate = date;
    console.log(this.choosenDate);
  }

  onChooseTime (time: string) {
    this.choosenTime = time;
    console.log(this.choosenTime);
  }

  onChooseTeammate (teammates: number) {
    this.numberOfTeammates = teammates;
    console.log(teammates)
  }

  onChooseAge (choosenAge: number) {
    this.minAgeTeammate = choosenAge;
    console.log(choosenAge);
  }
}
