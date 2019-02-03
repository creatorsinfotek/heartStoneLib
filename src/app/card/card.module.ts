import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';
import { CardDetailPage } from './card-detail/card-detail.page';
import {CardService} from './shared/card.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'card', component: CardPage },
      { path: '', component: CardDetailPage}
    ])
  ],
  providers: [
    CardService
  ],
  declarations: [CardPage, CardDetailPage]
})
export class CardPageModule {}
