import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  date=new Date();
  timeOption = ["12:00","12:30","13:00","13:30","19:00","19h30","20:00","20:30","21:00","21:30"]
  peopleOption = [1,2,3,4,5,6,7,8];

  client = {firstName:"", lastName:"", email:"",phone:""};

  ReservationForm = new FormGroup({
    date: new FormControl(''),
    time: new FormControl(''),
    people: new FormControl('')
  });

  isScheduleOk = false;
  constructor(){ }

  ngOnInit() {

  }

  finelizeReservertion(f: NgForm){
    console.log(f.value);
    if (f.valid) {
      console.log("Valide");
      console.log(f)
    }
  }
  saveReservation(){
    if (this.ReservationForm.valid) {
      console.log(this.ReservationForm);
      this.isScheduleOk = true;
    }
  }

}
