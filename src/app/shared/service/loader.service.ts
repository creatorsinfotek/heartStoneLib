import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader: HTMLIonLoadingElement;

constructor(private loadingCtrl: LoadingController) { }

async presentLoading(): Promise<HTMLIonLoadingElement> {
  this.loader = await this.loadingCtrl.create({
    message: 'Please wait',
    duration: 2000,
    translucent: true
  });
   this.loader.present();
   return this.loader;
}

dismissLoading() {
  if (this.loader) {
    this.loader.dismiss();
  }
 }
}
