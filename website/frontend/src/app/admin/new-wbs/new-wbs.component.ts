import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {WbsService } from '../../wbs.service'
import { SessionStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-new-wbs',
  templateUrl: './new-wbs.component.html',
  styleUrls: ['./new-wbs.component.scss']
})
export class NewWbsComponent implements OnInit {

  date:string;
  location:string;
  topic:string;
  download:string;

  admin:boolean;
  
  constructor(private wbsService:WbsService, private router:Router, private sessionStorage:SessionStorageService) { }

  ngOnInit() {
    this.admin = this.sessionStorage.retrieve('admin');

    if(!this.admin) {
      this.router.navigate(['admin/login']);
    }

    const Button = document.getElementsByTagName('button')[1];
    const exbutton = document.getElementsByTagName('button')[0];
    exbutton.classList.add('hidden');
    exbutton.classList.remove('show');
    Button.classList.add('show');
    Button.classList.remove('hidden');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('no-top');
  }

  getDate(event:any) {
    this.date = event.target.value;
  }

  getLocation(event:any) {
    this.location = event.target.value;
  }

  getTopic(event:any) {
    this.topic = event.target.value;
  }

  getDownload(event:any) {
    this.download = event.target.value;
  }

  newWbs() {

    if(this.date === undefined || this.date === "") {
      this.date = "N/A";
    }
    if(this.location === undefined || this.location === "") {
      this.location = "N/A"
    }
    if(this.topic === undefined || this.topic === "") {
      this.topic = "N/A";
    }
    if(this.download === undefined || this.download === "") {
      this.download = "N/A";
    }

    this.wbsService.newWbs(this.date, this.location, this.topic, this.download).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.router.navigate(['admin/dashboard']);
      }
    );
    this.router.navigate(['admin/dashboard']);
  }

}
