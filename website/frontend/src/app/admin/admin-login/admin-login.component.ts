import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage'

interface User {
  username:string;
  password:string;
}

declare var $:any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  usernameInput:string;
  passwordInput:string;

  errorMessage:string;

  admin:boolean;

  userServer:User;

  constructor(private loginService:LoginService, private router:Router, private sessionStorage:SessionStorageService) { }

  ngOnInit() {

    this.errorMessage = this.sessionStorage.retrieve('login');
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

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('full-screen');
    body.classList.add('login');
    var navbar = document.getElementsByTagName('nav')[0];
    if (navbar.classList.contains('nav-up')) {
        navbar.classList.remove('nav-up');
    }
    navbar.classList.remove('navbar-transparent');
    navbar.setAttribute('style','padding-top: 25px;');

    $(".angular-logo2:eq(0)").removeClass("show2");
    $(".angular-logo2:eq(0)").addClass("hidden");
    $(".angular-logo2:eq(1)").removeClass("hidden");   
    $(".angular-logo2:eq(1)").addClass("show2"); 

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

      navbar.classList.add('navbar-transparent');

      $(".angular-logo2:eq(0)").addClass("show2");
      $(".angular-logo2:eq(0)").removeClass("hidden");
      $(".angular-logo2:eq(1)").addClass("hidden");   
      $(".angular-logo2:eq(1)").removeClass("show2"); 

      this.sessionStorage.store("login","true");
  }

  getUsername(event:any) {
    this.usernameInput = event.target.value;
  }

  getPassword(event:any) {
    this.passwordInput = event.target.value;
  }

  login() {
    this.loginService.login(this.usernameInput)
    .subscribe(res => {
      this.userServer = res;

      if(this.userServer.hasOwnProperty("username")) {
        if(this.userServer.username === "catamu" && this.userServer.password === this.passwordInput) {
          this.sessionStorage.store("admin","true");
          this.sessionStorage.store("login","true");
          this.router.navigate(['admin/dashboard']);
          window.location.reload();
        }
        else {
          this.sessionStorage.store("login","false");
          window.location.reload();
        }
      }
      else {
        this.sessionStorage.store("login","false");
        window.location.reload();
      }
    });
  }
}
