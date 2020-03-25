import { fetchDecks } from '../utils/api';
export const RETRIEVE_DECKS = 'RETRIEVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export const getDecks = () => {
  return (dispatch) => {
    fetchDecks()
      .then((decks) => {
        dispatch({
          type: RETRIEVE_DECKS, 
          decks
        })
      })
  }
}

export const addNewDeck = deck => {
  return {
    type: ADD_DECK,
    deck
  }
}

export const addNewCard = (deck, card) => {
  return {
    type: ADD_CARD,
    deck,
    card
  }
}

