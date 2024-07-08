/*
1. Recuper la griglia dal DOM
2. creo una funzione che se richiamata crea dei quadrati all'interno della griglia nel DOM
3. Assegno la funzione a un bottone
3. creo un ciclo for che cicla la funzione n volte quanto il numero dei quadrati che voglio generare
    >> ogni quadrato avrà su scritto il numero corrispondente alla sua posizione che sarà indicato con un valore, questo aumenterò di 1 per ogni iterazione del ciclo
4. Faccio in modo che ogni quadrato generato sia cliccabile e che succeda qualcosa al click del suddetto

------------------------------PARTE DUE--------------------------------------------------------

1. creo un array vuoto che conterrà la posizione nella griglia di tutte le bombe
2. creo una funzione che genera 16 numeri randomici da 1 a 100 (senza doppioni) e li pusha dentro l'array
3. rendo le celle che contengono un numero corrispondente ai valori dell'array delle bombe, ovvero, nel momento in cui l'utente le clicca la cella cliccata diventa rossa e la partita termina.
  >> SE non viene cliccata alcuna bomba, la partita termina con una vittoria e vie mostrato il numero di caselle cliccate come punteggio.

*/

//Recupero gli elementi dal DOM
const grid = document.getElementById('grid');
const playButton = document.getElementById('play')

//Creo un array per contenere le bombe
let bombs = []

//Creo la funzione 
function generate() {
     let sCell = document.createElement('div');

     sCell.classList.add('cell');

     return sCell
}


//creo un ciclo for che cicla la funzione n volte quanto il numero dei quadrati che voglio generare
playButton.addEventListener('click', function (){
    

    for (let i = 0; i < 100; i++){

        let currentCell = generate();

        currentCell.innerText = i + 1;

        grid.append(currentCell)

        currentCell.addEventListener('click', function(){
            this.classList.toggle('clicked')
            console.log(i + 1)
        })

    }
   
})   
