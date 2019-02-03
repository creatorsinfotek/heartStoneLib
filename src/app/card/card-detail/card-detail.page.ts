import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: 'card-detail.page.html'
})
export class CardDetailPage {
 constructor(private cardService: CardService) {
   this.getCardDecks();
 }

 public cardDecks: string[] = [];

 private getCardDecks() {
   this.cardService.getAllCardDecks().subscribe((cardDecks: string[]) => {
     this.cardDecks = cardDecks;
   });
 }

 
}

