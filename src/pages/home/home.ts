import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {NextPage} from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
nextPage=NextPage;
public tap: number=0;
  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  }
public event={
	  month: '1990-02-19',
	  timeStarts:'05:30',
	  
  }
  showAlert(){
	let alert =this.alertCtrl.create({
		title:'New Friend!',
	subTitle:'Your Friends Are Waiting',
	buttons:['ok']
	});
	alert.present();
	}
tapEvent(e){
	this.tap++  
  }
}
