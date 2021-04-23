/*
[Snack 1]
Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

[Snack 2]
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

// SNACK 1

var zucchiniArray = [
    { // [0]
        variety: "a",
        weigth: 10,
        length: 10
    },
    { // [1]
        variety: "b",
        weigth: 15,
        length: 10
    },
    { // [2]
        variety: "c",
        weigth: 10,
        length: 12
    },
    { // [3]
        variety: "d",
        weigth: 12,
        length: 10
    },
    { // [4]
        variety: "e",
        weigth: 10,
        length: 14
    },
    { // [5]
        variety: "f",
        weigth: 11,
        length: 16
    },
    { // [6]
        variety: "g",
        weigth: 8,
        length: 5
    },
    { // [7]
        variety: "h",
        weigth: 17,
        length: 10
    },
    { // [8]
        variety: "i",
        weigth: 10,
        length: 18
    },
    { // [9]
        variety: "j",
        weigth: 10,
        length: 19
    },
]

// WEIGTH OF ALL ZUCCHINI
var sum = 0;
var i = 0;
for(var key in zucchiniArray){
    sum += zucchiniArray[i].weigth;
    i++;
}
console.log(sum);

// SNACK 2
// Utilizzo lo stesso array di zucchine

var inferior = [];
var inferiorSum = 0;
var higher = [];
var higherSum = 0;
var i = 0;
for(var key in zucchiniArray){
    if(zucchiniArray[i].length <= 15){
        inferior.push(zucchiniArray[i].length)
        inferiorSum += zucchiniArray[i].weigth;
    }else {
        higher.push(zucchiniArray[i].length);
        higherSum += zucchiniArray[i].weigth;
    }    
    i++;
}
console.log(inferior);
console.log(inferiorSum);

console.log(higher);
console.log(higherSum);