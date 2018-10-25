import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { normalizeURL } from 'ionic-angular';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {
  myImage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private plt: Platform) {

  }

  captureImage() {
    let options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      if (this.plt.is('ios')) {
        this.myImage = normalizeURL(imageData);
      } else {
        this.myImage = imageData;
      }
      //this.myImage = this.webview.convertFileSrc(imageData);
    }, err => {
      console.log('error: ', err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }

}
