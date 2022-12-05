import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, map, tap , filter} from 'rxjs';
import { Schedule } from '../models/schedule.interface';
import { EveningEvent } from '../models/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient : HttpClient) { }

  search(term: string) : Observable<EveningEvent> {
    const termLowerCase = term.toLocaleLowerCase();
    return this.httpClient
      .get<Schedule>('assets/schedules.json')
      .pipe(
        tap(res => console.log ("avant",res)),
        map((res : any) => res.events.filter((evt : any) => evt.title.toLocaleLowerCase().indexOf(term) > -1 || evt.description.toLocaleLowerCase().indexOf(term) > -1)),
        tap(res => console.log ("apres",res)),






      )
  }



}
