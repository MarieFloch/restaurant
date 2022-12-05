import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  numberToDisplay ='';

  constructor() { }

  standard = {
    firstname : "Benjamin",
    lastname :"Glouton",
    role : "Acceuil",
    award : "",
    phone : "02-15-78-56-23"
  }

  sommelier = {
    firstname : "David",
    lastname :"Biraud",
    role : "Sommelier",
    award : "Meilleur ouvrier de france",
    phone : "02-11-48-59-23"
  }

  boucher = {
    firstname : "Sébastien",
    lastname :"Coirier",
    role : "Boucher",
    award : " Meilleur ouvrier de france",
    phone : "02-00-87-11-33"
  }

  ngOnInit(): void {
  }

  displayBig(telephoneNumber: any) {
    console.log(telephoneNumber);
    this.numberToDisplay = telephoneNumber;

  }

}
