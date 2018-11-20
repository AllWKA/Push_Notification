import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = "";
  pwd = "";

  constructor(private http: HttpClientModule, public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  log() {

    //TODO: verificar
    console.log("Entro Normal");
    //console.log(this.http.get());


    if (this.checkForm() == true) {

      this.changePage(0);
    }

  }

  logFacebook() {

    console.log("Entro con FaceBook");

  }

  logGoogle() {

    console.log("Entro con Google");
  }

  changePage(url: Number) {

    console.log("Cambio Página: ", url);
    switch (url) {
      case 0:
        this.navCtrl.push(NotificationsPage);
        break;
      case 1:
        console.log("entré en create");
        break;
    }

  }

  singUp() {
    //TODO: news or create New
    //'http://localhost:3000/admins'
    console.log("asdasdasd");

    this.http.get('http://localhost:3000/admins')
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);

      });
    //this.changePage(1);
  }

  checkForm() {

    console.log("user: ", this.user, " pwd: ", this.pwd);

    if (this.user.length != 0 && this.pwd.length != 0) {

      return true;
    }

    let alert = this.alertCtrl.create({

      title: 'Empty field',
      subTitle: 'User or Password is empty.'
    });

    alert.present();

    return false;
  }

}
