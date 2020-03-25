import { RETRIEVE_DECKS, ADD_DECK, ADD_CARD } from '../actions';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case RETRIEVE_DECKS:
      return action.decks;

    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }

    case ADD_CARD:
      const deck = state[action.deck];
      deck.questions.push(action.card);
      
      return {
        ...state,
        [action.deck]: deck
      }

    default:
      return state;
  }
}

export default reducer
