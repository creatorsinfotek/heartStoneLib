import { Injectable } from '@angular/core';
import {of as ObservableOf, Observable} from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CardDeck, Card } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {


baseUrl = environment.apiUrl;
apiKey = environment.apiKey;
headers: HttpHeaders;

constructor(private http: HttpClient) {
  this.headers = new HttpHeaders({ 'X-Mashape-Key' : this.apiKey });
}

// private cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Hero', 'Priest','Warlock', 'Paladin'];

getAllCardDecks(): Observable<CardDeck[]> {
  // const headers = new HttpHeaders({
  //   'X-Mashape-Key' : this.apiKey
  // });
  return this.http.get<CardDeck[]>(this.baseUrl + 'info', {headers: this.headers});
  // return ObservableOf(this.cardDecks);
}

 getCardsByDecks(cardDeckGroup: string, cardDeck: string ): Observable<Card[]> {
  return this.http.get<Card[]>(this.baseUrl + '/cards/' + cardDeckGroup + '/' + cardDeck, {headers: this.headers});
 }

 getCardsById(cardId: string): Observable<Card[]> {
  return this.http.get<Card[]>(this.baseUrl + '/cards/' + cardId, {headers: this.headers});
 }

 replaceCardText(text: string) {
   return  text = text ? text.replace(new RegExp('\\\\n', 'g'), ',') : 'No Description';
 }

}
