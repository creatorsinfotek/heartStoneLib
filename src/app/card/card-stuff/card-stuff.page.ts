import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-card-stuff',
  templateUrl: './card-stuff.page.html'
})
export class CardStuffPage {
  cardId: string;
  card: Card;
  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ionViewWillEnter() {
    this.cardId = this.route.snapshot.paramMap.get('cardId');

    this.cardService.getCardsById(this.cardId).subscribe(
      (cards: Card[]) => {
        this.card = cards[0];
      });
  }

  updateImage(){
      this.card.img = '../../../assets/images/DefaultCard.png';
  }

}
