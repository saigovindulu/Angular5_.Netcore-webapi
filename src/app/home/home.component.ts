import { DatasharingService } from './../datasharing.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatDialog } from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, RequestOptions } from '@angular/http';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myValue: any;
  dataObjects: any;
  excelData: any;
  todoUpdate:boolean=false;
  displayEdit:boolean=false;
  models: {
    Technology: any;
  }


  constructor(public dialog: MatDialog, public datasharing: DatasharingService, public http: Http, public home: HomeService) { }

  model: any = { Technology: '' };
  model2: any = { Technology: '' };

  ngOnInit() {
    this.data();
  }



  todoData = [
    { Technology: "Angular" },
    { Technology: "HTML" },
    { Technology: "JavaScript" },
    { Technology: "Jquery" },
    { Technology: ".Net core" },
    { Technology: "Java" }
  ]

  addToDo() {
    this.todoData.push(this.model);
    this.model = {};
  }
  delList(i) {
    console.log(i);
    this.todoData.splice(i, 1);
  }

  updateToDo(){
this.todoUpdate=false;
let k = this.myValue;
console.log(k);
for (let i = 0; i < this.todoData.length; i++) {
  if (i == k) {
    this.todoData[i] = this.model2;
    console.log(this.todoData[i]);
    this.model2 = {};
  }
}
  }
  editToDo(i){
    this.myValue=i
    this.model2.Technology=this.todoData[i].Technology;
    this.todoUpdate=true;
  }
  editDispaly(){
    this.displayEdit=true;
  }
  data() {
    this.home.getJsonData().subscribe(data => {
      this.dataObjects=data
    })
  }
}
