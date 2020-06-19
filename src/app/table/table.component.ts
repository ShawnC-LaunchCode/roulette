import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selectedTable:string;
  constructor( ) { 
    this.selectedTable="assets/img/table0.jpg";
  }

  ngOnInit(): void {
  }

 

}
