import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap, switchMap } from "rxjs/operators"; // tap remplace do
import { EveningEvent } from '../models/evening-event.interface';

import { ScheduleService } from '../services/schedule.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl();
  searchTerms$ : Observable<string> = this.searchTerm.valueChanges;
  result : EveningEvent[] = [];

  constructor( private ScheduleService : ScheduleService) { }

  ngOnInit(): void {
    this.searchTerms$
      .pipe(
        debounceTime(3000),
        switchMap( word => this.ScheduleService.search(word)),
        tap(x => console.log(x))
      )
      .subscribe(data => this.result.push(data));
  }

}
