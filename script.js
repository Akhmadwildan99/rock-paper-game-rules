class Game{
    constructor(elementSatu, elementDua, elementTiga, menang, kalah, seri ){
        this.elementSatu = elementSatu;
        this.elementDua = elementDua;
        this.elementTiga = elementTiga;
        this.menang = menang;
        this.kalah = kalah;
        this.seri = seri;

    }

    getPilihanCom() {
        const com = Math.floor(Math.random() * 3) + 1;
        console.log(com);
        if(com == 1) return this.elementSatu;
        if(com == 2) return this.elementDua;
        return this.elementTiga;
    }

    getResult(player, com ) {
        if(player == com) return this.seri;
        if(player == this.elementSatu) return (com == this.elementDua) ? this.kalah : this.menang;
        if(player == this.elementDua) return (com == this.elementTiga) ? this.kalah : this.menang;
        if(player == this.elementTiga) return (com == this.elementSatu) ? this.kalah : this.menang;
    
    }
}

// class Coba extends Game{
//     constructor(batu, kertas, gunting, menang, kalah, seri){
//         super(batu, kertas, gunting);
//         this.menang = menang;
//         this.kalah = kalah;
//         this.seri = seri;
//     }

//     getResult(player, com ) {
//     if(player == this.com) return this.seri;
//     if(player == this.batu) return (thcom == this.kertas) ? this.kalah : this.menang;
//     if(player == this.kertas) return (com == this.gunting) ? this.kalah : this.menang;
//     if(player == this.gunting) return (com == this.batu) ? this.kalah : this.menang;

//     }
// }


// let rPS = new Game('rock', 'paper', 'scissors');
// console.log(rPS.getPilihanCom());

// function getHasil(player, com) {
//     if(player == com) return 'draw';
//     if(player == 'batu') return (com == 'kertas') ? 'com win':'player 1 win';
//     if(player == 'kertas') return (com == 'gunting') ? 'com win':'player 1 win';
//     if(player == 'gunting') return (com == 'batu') ? 'com win':'player 1 win';
// }


let ayo = new Game('batu', 'kertas', 'gunting', 'p 1 win', 'c win', 'draw');

console.log(ayo.getPilihanCom());

let m = ayo.getResult('batu', ayo.getPilihanCom());
console.log(m);

