export class User {
    username: string;
    coins: number;
    breads: number;
    carrots: number;
    diamond: number;
}

export class Item {
    name: string;
    quantity: number;
    image: string
}

export class CurrentAuction {
    seller: string;
    image: string;
    name: string;
    quantity: number;
    time: number;
    winBid: number;
    minBid: number;
}

export class SelectedItem {
    item: Item;
    show: boolean;
}