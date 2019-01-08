import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";
import { AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { adminStatic } from "../../staticVariables/admin";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  users;
  user = "";
  pwd = "";

  constructor(public navCtrl: NavController, 
              private rest: RestProvider, private alertCtrl: AlertController) {

  }

  log() {

    if (this.user == "" || this.pwd == "") {

      let alert = this.alertCtrl.create({
        title: 'Empty field',
        subTitle: 'User or Password is empty.'
      });

      alert.present();

    } else {

      this.rest.logAdmin(this.user, this.pwd).subscribe(

        admin => { 

          adminStatic.id = admin.id;
          this.navCtrl.push(MenuPage); 
        }
      );
    }

  }

}
