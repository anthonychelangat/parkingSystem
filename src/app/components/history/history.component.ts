import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  numberPlate: string;
  location: string;
  time: number;
  entryTime: string;
  exitTime: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, numberPlate: 'AD345', location: 'Faculty of Science', time: 1, entryTime: '9:00 am',exitTime: '10:00 am'},
  {position: 2, numberPlate: 'AD345', location: 'Faculty of Education', time: 1, entryTime: '9:00 am',exitTime: '10:00 am'},
  {position: 3, numberPlate: 'BD345', location: 'Senate', time: 1, entryTime: '9:00 am',exitTime: '10:00 am'},
  {position: 4, numberPlate: 'TD345', location: 'Senate', time: 4, entryTime: '9:00 am',exitTime: '1:00 am'},
  {position: 5, numberPlate: 'BG5345t', location: 'CTF', time: 1, entryTime: '11:00 am',exitTime: '12:00 am'},
  {position: 6, numberPlate: 'adc67', location: 'TTF', time: 2, entryTime: '9:00 am',exitTime: '11:00 am'},
  {position: 7, numberPlate: 'ERD89', location: 'CTF', time: 1, entryTime: '9:00 am',exitTime: '10:00 am'},
  {position: 8, numberPlate: 'DR780', location: 'Faculty of Science', time: 1, entryTime: '9:00 am',exitTime: '10:00 am'},
  {position: 9, numberPlate: 'KIO98', location: 'ICT Center', time: 5, entryTime: '9:00 am',exitTime: '2:00 am'},
  {position: 10, numberPlate: 'ert45', location: 'Faculty of Science', time: 1, entryTime: '9:00 am',exitTime: '10:00 am'},
];


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['demo-position', 'demo-numberPlate', 'demo-location', 'demo-time', 'demo-entryTime', 'demo-exitTime'];
  dataSource = ELEMENT_DATA;

}
