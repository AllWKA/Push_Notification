import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users = "No users";
  constructor(public navCtrl: NavController, private rest: RestProvider) {

  }

  log() {

    var name = "pruebaDeAppCambiada";
    var email = "a@a.com";
    var pwd = "123";
    var appId = 6;

    this.rest.getAdmins().subscribe(

      admins => {

        console.log(admins);
        this.users = JSON.stringify(admins);
      }
    );

    // this.navCtrl.push(MenuPage);
  }

}
