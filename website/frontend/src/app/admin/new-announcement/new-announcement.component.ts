import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../announcements.service'; 
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage'

declare var $:any;

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss']
})
export class NewAnnouncementComponent implements OnInit {

  title: string;
  subtitle: string;
  link: string;
  picLink: string;

  admin:boolean;

  constructor(private announcementsService:AnnouncementsService, private router:Router, private sessionStorage:SessionStorageService) { }

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

    var footer = document.getElementsByTagName('footer')[0];
    footer.classList.remove('hidden');
    footer.classList.add('show');

    var navbar = document.getElementsByTagName('nav')[0];
    //navbar.classList.remove('no-top');
  }

  getTitle(event:any) {
    this.title = event.target.value;
  }

  getSubtitle(event:any) {
    this.subtitle = event.target.value;
  }

  getLink(event:any) {
    this.link = event.target.value;
  }

  getPicLink(event:any) {
    this.picLink = event.target.value;
  }

  newAnnouncement() {

    if(this.title === undefined || this.title === "") {
      this.title = "N/A";
    }
    if(this.subtitle === undefined || this.subtitle === "") {
      this.subtitle = "N/A";
    }
    if(this.link === undefined || this.link === "") {
      this.link = "N/A";
    }
    if(this.picLink === undefined || this.picLink === "") {
      this.picLink = "N/A";
    }

    this.announcementsService.newAnnouncement(this.title, this.subtitle, this.link, this.picLink).subscribe(
      data => {
        this.router.navigate(['admin/dashboard']);
      }
    );
  }
}
