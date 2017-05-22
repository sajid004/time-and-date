import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
/*
  Generated class for the Next page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-next',
  templateUrl: 'next.html'
})
export class NextPage {
homePage=HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
  }
showAlert(){
	let alert =this.alertCtrl.create({
		title:'New Friend!',
	subTitle:'Your Friends Are Waiting',
	buttons:['ok']
	});
	alert.present();
	}
	showPrompt(){
	let prompt =this.alertCtrl.create({
		title:'Login!',
		message:'Enter the Name of New Album',
	inputs:[
	{
		name:'title',
		placeholder:'title',
	},
	],
	buttons:[
	{
		text:'cancel',
		handler: data=>{
			console.log('cancel clicked');
		}
	},
	{ text:'save',
	handler: data=>{
		console.log('saved clicked');
	}
	}
	]
	});
	prompt.present();
	}
showConfirm(){
	let confirm =this.alertCtrl.create({
		title:'Use this Lightsbar?',
	message:'Do you agree to use this Lightsbar to do good across the intergaiactic glazy?',
	buttons:[
	{
		text:'Disagree',
		handler: ()=>{
			console.log('Disagree clicked');
		}
	},
	{
		text:'Agree',
		handler: data=>{
			console.log('Agree clicked');
		}
	},
	]
	});
	confirm.present();
	}
	showCheckbox(){
	let alert = this.alertCtrl.create();
		alert.setTitle('Which plants have you Vistes?');
		
			alert.addInput({
			type:'checkbox',
			label:'Blue',
			value:'value1',
			checked:true
			});
			alert.addInput({
			type:'checkbox',
			label:'Blue',
			value:'value1',
			checked:false
			});
			alert.addButton('cancel');
			alert.addButton({
				text:'okay',
				handler: data =>{
				console.log('Checkbox data:,  data');
				}
			});
			alert.present();
	}
}
