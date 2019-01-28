import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../announcements.service'; 
import { WbsService } from '../../wbs.service';
import { TnmService } from '../../tnm.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage'

interface Announcement {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  picLink: string;
};

interface wbsInfo {
  id: number;
  date: string;
  location: string;
  topic: string;
  download: string;
};

interface tnmInfo {
  id: number;
  date: string;
  topic: string;
  download: string;
};

declare var $:any;

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss']
})
export class AdminHomepageComponent implements OnInit {

  announcements = {}
  wbsTable = {}
  tnmTable = {}

  admin:boolean;

  constructor(
    private announcementsService:AnnouncementsService, 
    private router:Router,
    private sessionStorage:SessionStorageService,
    private wbsService:WbsService, 
    private tnmService:TnmService) { }

  ngOnInit() {


    this.admin = this.sessionStorage.retrieve('admin');

    if(this.admin) {
      this.router.navigate(['admin/dashboard']);
    }
    else {
      this.router.navigate(['admin/login']);
    }

    const Button = document.getElementsByTagName('button')[1];
    const exbutton = document.getElementsByTagName('button')[0];
    exbutton.classList.add('hidden');
    exbutton.classList.remove('show');
    Button.classList.add('show');
    Button.classList.remove('hidden');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    navbar.classList.add('no-top');
    $(document).scroll(function() {
      var y = window.scrollY;
      if (y > 150) {
        navbar.classList.remove('no-top');
      }
  });

    this.announcements = this.announcementsService.getAnnouncements()
    .subscribe(res => {
    this.announcements = res;
    });

    this.wbsService.getWbs()    
    .subscribe(res => {
      this.wbsTable = res;
    });

    this.tnmService.getTnm()    
    .subscribe(res => {
      this.tnmTable = res;
    });
  }

  deleteAnnouncement(announcement:Announcement){
    this.announcementsService.deleteAnnouncement(announcement.id).subscribe(res => {
      window.location.reload();
    });
  }

  deleteWbs(wbsInfo:wbsInfo) {
    this.wbsService.deleteWbs(wbsInfo.id).subscribe(res => {
      window.location.reload();
    });
  }

  deleteTnm(tnmInfo:tnmInfo) {
    this.tnmService.deleteTnm(tnmInfo.id).subscribe(res => {
      window.location.reload();
    });
  }

  logout() {
    this.sessionStorage.clear("admin");
    window.location.reload();
  }

}
