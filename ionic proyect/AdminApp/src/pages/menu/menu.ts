import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateAdminPage } from "../create-admin/create-admin";
import { CreateUserPage } from "../create-user/create-user";
import { ModifyAdminPage } from "../modify-admin/modify-admin";
import { ModifyUserPage } from "../modify-user/modify-user";
import { SendNotificationPage } from "../send-notification/send-notification";

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  changePage(page) {
    switch (page) {
      case 0:
        this.navCtrl.push(CreateAdminPage);
        break;
      case 1:
        this.navCtrl.push(ModifyAdminPage);
        break;
      case 2:
        this.navCtrl.push(CreateUserPage);
        break;
      case 3:
        this.navCtrl.push(ModifyUserPage);
        break;
      case 4:
        this.navCtrl.push(SendNotificationPage);
        break;

      default:
        break;
    }

  }

}
