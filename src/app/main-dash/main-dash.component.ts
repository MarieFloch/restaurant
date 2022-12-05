import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {QuickLunchService} from '../services/quick-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [
    { title: 'Burgers', cols: 1, rows: 1, id:'brg'},
    { title: 'Galettes/crêpes', cols: 1, rows: 1,id:'glt' },
    { title: 'Pizza', cols: 1, rows: 1 , id:'pzz'}
  ];

  burgers: Food[] = [];
  pizzas: Food[] = [];
  galettes: Food[] = [];

  constructor(private qls:QuickLunchService){};
  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas();
    this.galettes = this.qls.getGalettes();
  }
}
