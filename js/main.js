    /* Consegna
        Il computer deve generare 16 numeri casuali nello stesso 
            range della difficoltà prescelta: le bombe. Attenzione: 
            nella stessa cella può essere posizionata al massimo una 
            bomba, perciò nell’array delle bombe non potranno esserci
            due numeri uguali.
        In seguito l’utente clicca su una cella: se il numero
            è presente nella lista dei numeri generati - abbiamo
            calpestato una bomba - la cella si colora di rosso e
            la partita termina. Altrimenti la cella cliccata si
            colora di azzurro e l’utente può continuare a
            cliccare sulle altre celle.
        La partita termina quando il giocatore 
            clicca su una bomba o quando raggiunge il 
            numero massimo possibile di numeri consentiti
            (ovvero quando ha rivelato tutte le celle che 
            non sono bombe).
        Al termine della partita il software deve 
            comunicare il punteggio, cioè il numero di
            volte che l’utente ha cliccato su una cella
            che non era una bomba.


     Bonus
     Aggiungere una select accanto al bottone di
        generazione, che fornisca una scelta tra tre 
        diversi livelli di difficoltà:
        - con difficoltà 1 => 100 caselle, con un numero compreso 
            tra 1 e 100, divise in 10 caselle per 10 righe;
        - con difficoltà 2 => 81 caselle, con un numero compreso 
            tra 1 e 81, divise in 9 caselle per 9 righe;
        - con difficoltà 3 => 49 caselle, con un numero compreso 
            tra 1 e 49, divise in 7 caselle per 7 righe;
*/


const playField = document.getElementById('playField');
const startButton = document.getElementById('button');
const difficulty = document.getElementById('difficulty');

let clicked = [];

/*
per vedere se é una bomba dovro fare un ciclo for con un if che confronterà
ogni volta gli indici dell'array creato da numberInside con gli indici
    dell array bombs e se corrispondono allora quella sara una bomba
*/

startButton.addEventListener('click', function(){
    points = 0;
    playField.innerHTML = '';
    let bombs = [];
    let cells = [];
    let difficultNumber = parseInt(difficulty.value);
    clicked = [];
    let gameOver = false;
    
    //creo array coi numeri bomba
    for(c = 0;c < 16; c++){
        bombs.push(uniqueNumberGen(bombs, 1, difficultNumber));
    }
    
    //riempio il field coi quadrati cliccabili
    
    for(let i = 1; i <= difficultNumber; i++){
        const newSquare = document.createElement('div');
        const newSquareNumber = document.createElement('div');
        const pointsDom = document.getElementById('points');

        pointsDom.innerHTML = `Punti: 0`

        
        playField.append(newSquare);
        newSquare.append(newSquareNumber);
        
        newSquare.classList.add('square','easy');
        newSquareNumber.classList.add('square-number');

        if(difficultNumber == 81){
            newSquare.classList.remove('easy');
            newSquare.classList.add('medium');
        }else if(difficultNumber == 49){
            newSquare.classList.remove('easy');
            newSquare.classList.add('hard');
        }

        newSquareNumber.innerHTML = i;

        cells.push(i);
        
        
        newSquare.addEventListener('click', function(){

        if(!gameOver){
            let overlay = document.createElement('div');
                this.classList.add('clicked');
                console.log(i);
                if(bombs.includes(i)){
                    this.classList.add('bomb');
                    pointsDom.innerHTML = `Hai perso! Hai totalizzato ${clicked.length} punti`;
                    gameOver = true;
                    // overlay.classList.add('overlay');
                    // playField.append(overlay);
                    
                }else{
                    if(!clicked.includes(i)){
                        points++;
                        clicked.push(i);
                    }
                    pointsDom.innerHTML = `Punti: ${clicked.length}`;
                    console.log(clicked);
                }     
                
                if(clicked.length == cells.length - bombs.length){
                    pointsDom.innerHTML = `Hai fatto il massimo di punti, HAI VINTO!`;
                    overlay.classList.add('overlay');
                    playField.append(overlay);
                    
                }

            }
        });


    }
    
    console.log(bombs);
    console.log(cells);
    

});



function randomNumbersGen(min, max){
        let randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;
    return randomNumber;

}

function uniqueNumberGen(blacklist, min, max){
    let validNumber = false;
    let randomNumber;

        while(!validNumber){
           randomNumber = randomNumbersGen(min ,max);
           if(!blacklist.includes(randomNumber)){
            validNumber = true;
           }
        }
    return randomNumber;
}


    




