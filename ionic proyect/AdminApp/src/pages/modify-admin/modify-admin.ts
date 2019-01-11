import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { adminStatic } from "../../staticVariables/admin";
import { RestProvider } from "../../providers/rest/rest";
import { ModalController } from 'ionic-angular';
import { AdminformPage } from "../adminform/adminform";

@Component({
  selector: 'page-modify-admin',
  templateUrl: 'modify-admin.html',
})
export class ModifyAdminPage {

  apps = [];
  admins: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider,
              public modalCtrl: ModalController) {

  }

  chargeAdmins() {
    // console.log(selected);

    this.rest.getAdmins().subscribe(
      admins => {
        
        this.admins = admins;
      }
    );

  }

  ionViewDidLoad() {
    
    this.chargeApps();
    this.chargeAdmins();
  }
  

  itemSelected(admin){
    
    const modal = this.modalCtrl.create(AdminformPage,{admin:admin});
    modal.present();
    
  }

  chargeApps() {

    this.rest.getAppsFromAdmin(adminStatic.id).subscribe(

      admin => {

        this.apps = admin;
      }
    );
  }

}
