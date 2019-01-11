import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-adminform',
  templateUrl: 'adminform.html',
})
export class AdminformPage {

  id: number = 0;
  user = "";
  pwd = "";
  apps = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view: ViewController, public rest: RestProvider, private alertCtrl: AlertController) {

    this.id = this.navParams.get('admin').id;
    this.user = this.navParams.get('admin').user;
    this.pwd = this.navParams.get('admin').pwd;
    this.apps = this.navParams.get('admin').apps;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminformPage');
  }

  create() {

    this.rest.putAdmin(this.id, this.user, this.pwd).subscribe(

      admin => {

        let alert = this.alertCtrl.create({
          title: 'Admin Update',
          subTitle: 'admin: ' + this.user + ' has been updated'
        });

        alert.present();

      }
    );

  }

  delete() {
    this.rest.delAdmin(this.id).subscribe(

      admin => {

        let alert = this.alertCtrl.create({
          title: 'Admin Update',
          subTitle: 'admin: ' + this.user + ' has been updated'
        });

        alert.present();
        this.view.dismiss();
      }
    );
  }

  cancel() {
    this.view.dismiss();
  }

}
