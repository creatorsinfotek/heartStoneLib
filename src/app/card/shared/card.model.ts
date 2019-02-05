export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card {
    artist: string;
    attack: number;
    cardId: string;
    cardSet: string;
    cost: number;
    dbfId: string;
    health: number;
    img: string;
    imgGold: string;
    locale: string;
    name: string;
    playerClass: string;
    race: string;
    type: string;
    text: string;
    flavor: string;
    faction: string;
    rarity: string;
}
