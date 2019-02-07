import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';
import { CardDetailPage } from './card-detail/card-detail.page';
import {CardService} from './shared/card.service';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardListingPage } from './card-listing/card-listing.page';
import { CardStuffPage } from './card-stuff/card-stuff.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'card', component: CardPage },
      { path: '', component: CardDetailPage},
      { path: ':cardDeckGroup/:cardDeck', component: CardListingPage},
      { path: ':cardId', component: CardStuffPage},

    ])
  ],
  providers: [
    CardService
  ],
  declarations: [
    CardPage, CardDetailPage, CardListComponent, CardListingPage, CardStuffPage]
})
export class CardPageModule {}
