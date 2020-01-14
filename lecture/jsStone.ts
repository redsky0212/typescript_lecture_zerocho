interface ICard {
    att?: number;
    bb: string;
}

class Card implements ICard {
    att: number = 1;
    bb: string;
    constructor(){
        this.bb = '';
    }
    
}

const c = new Card();
