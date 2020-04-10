import {
    DeckCreator
} from './deck-creator.js';
import {
    addDeckToDb
} from './allCrud.js'


const renderEditDeck = (id) => {
    console.log('yes')

}
const renderAllDecks = () => {
    const anchor = document.querySelector('.deck-mode')
    const deckIndex = document.querySelector('.deck-index');
    const buildAllDecks = (jsonData) => {
    jsonData.forEach(deck => {
        const newDeck = new DeckCreator()
            .addOptions(deck.id)
            .setTopCardTitle(deck.title)
            // .setFirstCardTitle(deck.cards[0].term)
            .render()
        deckIndex.appendChild(newDeck);
    }); 
   anchor.removeChild(deckIndex);
    anchor.appendChild(deckIndex);
}
fetch('http://localhost:8080/decks')
    .then(results => results.json())
    .then(buildAllDecks)
}

window.addEventListener('load', () => {
    renderAllDecks();
})

const submitNewDeck = document.querySelector('#submit-new-deck');
submitNewDeck.addEventListener('click', () => {
    let jsonObject = {
        'title': document.querySelector('#new-deck-name').value
    }
    addDeckToDb(jsonObject);
    renderAllDecks();
})

export {
    renderEditDeck,
    renderAllDecks
}