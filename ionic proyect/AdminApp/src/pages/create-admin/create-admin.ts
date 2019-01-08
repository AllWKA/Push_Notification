import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-create-admin',
  templateUrl: 'create-admin.html',
})
export class CreateAdminPage {

  user = "";
  pwd = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private rest: RestProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAdminPage');
  }

  create() {

    if (this.user != "" || this.pwd != "") {
      console.log("hola1");
      
      this.rest.createAdmin(this.user, this.pwd).subscribe(

        admin => { 
          let alert = this.alertCtrl.create({
            title: 'Admin Creates',
            subTitle: 'User: ' + admin.user + ' has been created'
          });
    
          alert.present();
          
        }
      );
    } else {
      let alert = this.alertCtrl.create({
        title: 'Empty field',
        subTitle: 'User or Password is empty.'
      });

      alert.present();
    }

  }

}
