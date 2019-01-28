import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SessionStorageService } from 'ngx-webstorage';

declare var $:any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    loggedIn:boolean;
    admin:boolean;

    constructor(public location: Location, private element : ElementRef, private sessionStorage:SessionStorageService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {

        this.admin = this.sessionStorage.retrieve('admin');

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        var nav = document.getElementsByTagName('nav')[0];
        
        $(document).scroll(function() {
            var y = window.scrollY;
            if (y > 150) {
                $(".angular-logo2:eq(0)").removeClass("show2");
                $(".angular-logo2:eq(0)").addClass("hidden");
                $(".angular-logo2:eq(1)").removeClass("hidden");   
                $(".angular-logo2:eq(1)").addClass("show2");
                nav.setAttribute('style','padding-top: 0px;'); 
            } else {
              $(".angular-logo2:eq(0)").removeClass("hidden");  
              $(".angular-logo2:eq(0)").addClass("show2");  
              $(".angular-logo2:eq(1)").removeClass("show2"); 
              $(".angular-logo2:eq(1)").addClass("hidden");  
              nav.setAttribute('style','padding-top: 25px;');
              //$(".angular-logo2:eq(1)").addClass("hidden");  
            }
        });
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            const Button = document.getElementsByTagName('button')[1];
            const exbutton = document.getElementsByTagName('button')[0];
            exbutton.classList.add('show');
            exbutton.classList.remove('hidden');
            Button.classList.add('hidden');
            Button.classList.remove('show');
            
            this.sidebarOpen();
        } else {
            const Button = document.getElementsByTagName('button')[1];
            const exbutton = document.getElementsByTagName('button')[0];
            exbutton.classList.add('hidden');
            exbutton.classList.remove('show');
            Button.classList.add('show');
            Button.classList.remove('hidden');
            
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
