import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { AnnouncementsService } from '../announcements.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  announcements = {}
  httpError:boolean = false;

  constructor(private httpClient:HttpClient, private announcementsService:AnnouncementsService) { }

  ngOnInit() {

    this.announcements = this.announcementsService.getAnnouncements()
      .subscribe(res => {
      this.announcements = res;
    },
      error => {
        this.httpError = true;
      });

    let len = Object.keys(this.announcements).length;
    if(len === 0){
      this.announcements = null;
    }

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    const Button = document.getElementsByTagName('button')[1];
    const exbutton = document.getElementsByTagName('button')[0];
    exbutton.classList.add('hidden');
    exbutton.classList.remove('show');
    Button.classList.add('show');
    Button.classList.remove('hidden');

  }
}
