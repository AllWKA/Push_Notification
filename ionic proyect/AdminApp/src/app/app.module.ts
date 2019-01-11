import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from "../pages/menu/menu";
import { CreateAdminPage } from "../pages/create-admin/create-admin";
import { CreateUserPage } from "../pages/create-user/create-user";
import { ModifyAdminPage } from "../pages/modify-admin/modify-admin";
import { ModifyUserPage } from "../pages/modify-user/modify-user";
import { SendNotificationPage } from "../pages/send-notification/send-notification";
import { AdminformPage } from "../pages/adminform/adminform";

import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AdminformPage,
    CreateAdminPage,
    CreateUserPage,
    ModifyAdminPage,
    ModifyUserPage,
    SendNotificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    AdminformPage,
    CreateAdminPage,
    CreateUserPage,
    ModifyAdminPage,
    ModifyUserPage,
    SendNotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
export class AppModule { }
