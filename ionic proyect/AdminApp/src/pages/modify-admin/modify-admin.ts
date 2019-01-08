import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { adminStatic } from "../../staticVariables/admin";
import { RestProvider } from "../../providers/rest/rest";

@Component({
  selector: 'page-modify-admin',
  templateUrl: 'modify-admin.html',
})
export class ModifyAdminPage {

  apps = [];
  admins = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {

  }

  chargeAdmins() {
    // console.log(selected);

    this.rest.getAdmins().subscribe(
      admins => {
        
        var result = admins;

        for (let i = 0; i < admins.length; i++) {
          this.admins[i] = admins[i].user;
          
        }

      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyAdminPage');
    this.chargeApps();
    this.chargeAdmins();
  }

  chargeApps() {

    this.rest.getAppsFromAdmin(adminStatic.id).subscribe(

      admin => {

        this.apps = admin;
      }
    );
  }

}
