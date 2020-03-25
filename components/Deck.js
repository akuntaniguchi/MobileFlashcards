import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableWithoutFeedback 
} from 'react-native';
import { 
  blue, 
  darkTurquoise, 
  white 
} from '../utils/colors';

const Deck = ({ deck, goToDeck }) =>  {
  return (
    <TouchableWithoutFeedback
      onPress={ () => goToDeck(deck.title) }>
      <View style={ styles.deck }>
        <Text style={ styles.title }>{ deck.title }</Text>
        <Text style={ styles.totalCardText }>Cards: { deck.questions.length }</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Deck

const styles = StyleSheet.create({
  deck: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: white
  },
  totalCardText: {
    fontSize: 15,
    color: darkTurquoise
  }
})
