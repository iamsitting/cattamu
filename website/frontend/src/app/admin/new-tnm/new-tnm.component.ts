import { Component, OnInit } from '@angular/core';
import {TnmService } from '../../tnm.service'
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-new-tnm',
  templateUrl: './new-tnm.component.html',
  styleUrls: ['./new-tnm.component.scss']
})
export class NewTnmComponent implements OnInit {

  date:string;
  topic:string;
  download:string;

  admin:boolean;
  
  constructor(private tnmService:TnmService, private router:Router, private sessionStorage:SessionStorageService) { }

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

    var footer = document.getElementsByTagName('footer')[0];
    footer.classList.remove('show');
    footer.classList.add('hidden');
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('full-screen');
    body.classList.remove('login');
    var navbar = document.getElementsByTagName('nav')[0];

    var footer = document.getElementsByTagName('footer')[0];
    footer.classList.remove('hidden');
    footer.classList.add('show');

    //navbar.classList.remove('no-top');
  }

  getDate(event:any) {
    this.date = event.target.value;
  }

  getTopic(event:any) {
    this.topic = event.target.value;
  }

  getDownload(event:any) {
    this.download = event.target.value;
  }

  newTnm() {

    if(this.date === undefined || this.date === "") {
      this.date = "N/A";
    }
    if(this.topic === undefined || this.topic === "") {
      this.topic = "N/A";
    }
    if(this.download === undefined || this.download === "") {
      this.download = "N/A";
    }

    this.tnmService.newTnm(this.date, this.topic, this.download).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      }
    );
    this.router.navigate(['admin/dashboard']);
  }

}
