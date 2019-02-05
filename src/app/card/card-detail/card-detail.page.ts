import { Component } from '@angular/core';
import { CardService } from '../shared/card.service';
import { CardDeck } from '../shared/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: 'card-detail.page.html'
})
export class CardDetailPage {
  public cardDecks: CardDeck[] = [];
  public readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];
  constructor(private cardService: CardService) {
   this.getCardDecks();
 }

 extractAllowedDecks(cardDecks: CardDeck[]) {
   this.ALLOWED_DECKS.forEach((deckName: string) => this.cardDecks.push({name: deckName, types: cardDecks[deckName]}));
 }

 private getCardDecks() {
   this.cardService.getAllCardDecks().subscribe((cardDecks: CardDeck[]) => {
    // this.cardDecks = cardDecks;
    this.extractAllowedDecks(cardDecks);
   });
 }

 public generateUrl(cardDeckGroup: string, cardDeck: string) {
   // console.log('Navigate To called');
   return '/tabs/card/' + cardDeckGroup + '/' + cardDeck;
 }
}

