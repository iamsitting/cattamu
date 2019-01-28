import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AnnouncementsService } from './announcements.service';
import { WbsService } from './wbs.service';
import { TnmService } from './tnm.service';
import { LoginService } from './login.service'
import { Ng2Webstorage } from 'ngx-webstorage'


import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OurFaithComponent } from './our-faith/our-faith.component';
import { TuesdayBsComponent } from './tuesday-bs/tuesday-bs.component';
import { WednesdayBsComponent } from './wednesday-bs/wednesday-bs.component';
import { BiblestudyinfoComponent } from './biblestudyinfo/biblestudyinfo.component';
import { HowdyweekeventsComponent } from './howdyweekevents/howdyweekevents.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { NewAnnouncementComponent } from './admin/new-announcement/new-announcement.component';
import { NewWbsComponent } from './admin/new-wbs/new-wbs.component';
import { NewTnmComponent } from './admin/new-tnm/new-tnm.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        EventsComponent,
        NavbarComponent,
        ContactUsComponent,
        FooterComponent,
        OurFaithComponent,
        TuesdayBsComponent,
        WednesdayBsComponent,
        BiblestudyinfoComponent,
        HowdyweekeventsComponent,
        AdminHomepageComponent,
        NewAnnouncementComponent,
        NewWbsComponent,
        NewTnmComponent,
        AdminLoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        Ng2Webstorage
    ],
    providers: [AnnouncementsService, WbsService, TnmService, LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }


