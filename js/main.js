/* Consegna
     L’utente clicca su un bottone che genererà
        una griglia di gioco quadrata.
     Ogni cella ha un numero progressivo, da 1 a 100.
     Ci saranno quindi 10 caselle per ognuna delle 10 righe.
     Quando l’utente clicca su ogni cella, 
        la cella cliccata si colora di azzurro ed emetto 
        un messaggio in console con il numero della cella 
        cliccata.

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


startButton.addEventListener('click', function(){

    playField.innerHTML = '';

    for(let i = 1; i <= difficulty.value; i++){
        squareGenerator(i);
    }
});






function squareGenerator(numberInside){
    
    const newSquare = document.createElement('div');
    const newSquareNumber = document.createElement('div');
    
    playField.append(newSquare);
    newSquare.append(newSquareNumber);
    
    newSquare.classList.add('square','easy');
    newSquareNumber.classList.add('square-number');

    if(difficulty.value == 81){
        newSquare.classList.remove('easy');
        newSquare.classList.add('medium');
    }else if(difficulty.value == 49){
        newSquare.classList.remove('easy');
        newSquare.classList.add('hard');
    }

    newSquareNumber.innerHTML = numberInside;

    newSquare.addEventListener('click', function(){
        this.classList.toggle('clicked');
        console.log(numberInside);
    })

   


}





    




