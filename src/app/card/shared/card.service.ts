import { Injectable } from '@angular/core';
import {of as ObservableOf, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

constructor() { }

private cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Hero', 'Priest','Warlock', 'Paladin'];

getAllCardDecks(): Observable<string[]> {
  return ObservableOf(this.cardDecks);
}

}
