import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'MobileFlashcards:cards';

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export const fetchDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(decks => {
    if(decks !== null) {
      return JSON.parse(decks) 
    } else {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    }
  })
}

export const getDeck = (title) => {
  return fetchDecks()
    .then((decks) => decks[title]);
}

export const saveDeck = (title) => {
  const deck = { title, questions: [] };
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: deck
  }))
}

export const saveCard = (title, card) => {
  return fetchDecks()
    .then(decks => {
      decks[title].questions.push(card);
      AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks));
    })
}
