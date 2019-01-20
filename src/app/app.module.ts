import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';
import { AddtutorComponent } from './addtutor/addtutor.component';
import { MypageComponent } from './mypage/mypage.component';
import { DataService } from './services/data.service';
import { UseradminComponent } from './admins/useradmin/useradmin.component';
import { TutoradminComponent } from './admins/tutoradmin/tutoradmin.component';
import { TutorComponent } from './tutorclass/tutor/tutor.component';
import { AddclassComponent } from './tutorclass/addclass/addclass.component';
import { ContentsComponent } from './contents/contents.component';
import { ContentsdetailComponent } from './contentsdetail/contentsdetail.component';
import { TutordetailComponent } from './admins/tutordetail/tutordetail.component';
import { AddreviewComponent } from './review/addreview/addreview.component';
import { ModifyreviewComponent } from './review/modifyreview/modifyreview.component';
import { ReviewmainComponent } from './review/reviewmain/reviewmain.component';
import { CookieService } from 'ngx-cookie-service';
import { MypageclassComponent } from './mypageclass/mypageclass.component';
import { ClassadminComponent } from './admins/classadmin/classadmin.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SearchcategoryComponent } from './searchcategory/searchcategory.component';
import { ReportComponent } from './report/report.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MypagepartComponent } from './mypagepart/mypagepart.component';
import { HelperComponent } from './helper/helper.component';
import { UserdetailComponent } from './admins/userdetail/userdetail.component';
import { BootModule } from "./boot/boot.module"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IntroduceComponent,
    ContactComponent,
    DashboardComponent,
    RegisterComponent,
    LogoutComponent,
    AddtutorComponent,
    MypageComponent,
    UseradminComponent,
    TutoradminComponent,
    TutorComponent,
    AddclassComponent,
    ContentsComponent,
    ContentsdetailComponent,
    TutordetailComponent,
    AddreviewComponent,
    ModifyreviewComponent,
    ReviewmainComponent,
    MypageclassComponent,
    ClassadminComponent,
    SearchpageComponent,
    SearchcategoryComponent,
    ReportComponent,
    MypagepartComponent,
    HelperComponent,
    UserdetailComponent



  ],
  imports: [
    BootModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'userdetail',
        component: UserdetailComponent
      },
      {
        path: 'helper',
        component: HelperComponent
      },
      {
        path: 'mypagepart',
        component: MypagepartComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'searchcategory',
        component: SearchcategoryComponent
      },
      {
        path: 'searchpage',
        component: SearchpageComponent
      },
      {
        path: 'classadmin',
        component: ClassadminComponent
      },
      {
        path: 'mypageclass',
        component: MypageclassComponent
      },
      {
        path: 'reviewmain',
        component: ReviewmainComponent
      },
      {
        path: 'addreview',
        component: AddreviewComponent
      },
      {
        path: 'modifyreview',
        component: ModifyreviewComponent
      },
      {
        path: 'tutordetail',
        component: TutordetailComponent
      },
      {
        path: 'contentsdetail',
        component: ContentsdetailComponent
      },
      {
        path: 'contents',
        component: ContentsComponent
      },
      {
        path: 'tutor',
        component: TutorComponent
      },
      {
        path: 'addclass',
        component: AddclassComponent,
      },
      {
        path: 'tutoradmin',
        component: TutoradminComponent
      },
      {
        path: 'useradmin',
        component: UseradminComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'mypage',
        component: MypageComponent
      },
      {
        path: 'introduce',
        component: IntroduceComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'addtutor',
        component: AddtutorComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent

      }
    ])
  ],
  providers: [DataService,AuthService,CookieService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
