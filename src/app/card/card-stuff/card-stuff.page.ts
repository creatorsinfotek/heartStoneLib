import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from 'src/app/shared/service/loader.service';

@Component({
  selector: 'app-card-stuff',
  templateUrl: './card-stuff.page.html'
})
export class CardStuffPage {
  cardId: string;
  card: Card;
  constructor(private route: ActivatedRoute, private cardService: CardService,
      private loaderService: LoaderService) { }

  ionViewWillEnter() {
    this.cardId = this.route.snapshot.paramMap.get('cardId');
    console.log(this.cardId);
    this.loaderService.presentLoading();
    this.cardService.getCardsById(this.cardId).subscribe(
      (cards: Card[]) => {
        console.log(cards.length);
        // this.card = cards[0];
        this.card = cards.map( (card: Card) => {
            // card.text = card.text ? card.text.replace(new RegExp('////n', 'g'), ' ') : 'No Description';
            card.text = this.cardService.replaceCardText(card.text);
            return card;
        })[0];

        this.loaderService.dismissLoading();
      });
  }

  updateImage() {
      this.card.img = '../../../assets/images/DefaultCard.png';
  }

}
