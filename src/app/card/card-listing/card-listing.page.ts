import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { ToastService } from 'src/app/shared/service/toast.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  cardDeckGroup: string;
  cardDeck: string;
  cards: Card[] = [];

  constructor(private route: ActivatedRoute, private cardService: CardService,
    private loaderService: LoaderService, private toaster: ToastService) { }

  getCards() {
    this.loaderService.presentLoading();
    this.cardService.getCardsByDecks(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards: Card[]) => {
        // this.cards = cards;
        this.cards = cards.map( (card: Card) => {
         // card.text = card.text ? card.text.replace(new RegExp('\\\\n', 'g'), ',') : 'No Description';
          card.text = this.cardService.replaceCardText(card.text);
          return card;
        });
        this.loaderService.dismissLoading();
      }, () => {
        this.toaster.presentErrorToast('cards could not be loaded. Plz try agian');
        this.loaderService.dismissLoading();
      });
  }

  async ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
    // tslint:disable-next-line:curly
    if (this.cards && this.cards.length === 0 ) this.getCards();
  }

  doRefresh (event) {
    this.getCards();
    event.target.complete();
  }
}
