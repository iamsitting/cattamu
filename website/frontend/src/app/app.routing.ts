import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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

const routes: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'events', component: EventsComponent},
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'our-faith', component: OurFaithComponent},
    { path: 'tuesday-bs', component: TuesdayBsComponent},
    { path: 'wednesday-bs', component: WednesdayBsComponent},
    { path: 'biblestudyinfo', component: BiblestudyinfoComponent},
    { path: 'howdyweekevents', component: HowdyweekeventsComponent},
    { path: 'admin/dashboard', component: AdminHomepageComponent},
    { path: 'admin/new-announcement', component: NewAnnouncementComponent},
    { path: 'admin/new-wbs', component: NewWbsComponent},
    { path: 'admin/new-tnm', component: NewTnmComponent},
    { path: 'admin/login', component: AdminLoginComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
