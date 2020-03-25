import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { 
  blue, 
  white, 
  darkTurquoise 
} from '../utils/colors';
import { connect } from 'react-redux';

const DeckDetails = ({ navigation, deck }) => {

  const navigateTo = (screen) => {
    navigation.navigate(screen, {
      deck: deck.title
    })
  }
  
  return (
    <View style={ styles.deckDetailsContainer }>
      <View>
        <Text style={ styles.title }>{ deck.title }</Text>
        <Text style={ styles.totalCards }>Total: { deck.questions.length } cards</Text>
      </View>
      <View>
        <TouchableOpacity 
          style={ styles.button }
          onPress={() => navigateTo('Quiz')}>
          <Text style={ styles.buttonText }>{ 'Start Quiz' }</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.button }
          onPress={() => navigateTo('NewCard')}>
          <Text style={styles.buttonText}>{ 'Add New Card' }</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  deckDetailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 30,
    backgroundColor: blue,
  },
  title: {
    fontSize: 23,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white
  },
  totalCards: {
    fontSize: 15,
    textAlign: 'center',
    color: darkTurquoise
  },
  button: {
    padding: 10,
    margin: 20,
    width: 200,
    backgroundColor: darkTurquoise,
  },
  buttonText: {
    color: white,
    borderRadius: 1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const mapStateToProps = (state, ownProps) => {
  return { deck: state[ownProps.navigation.state.params.deck] };
}

export default connect(mapStateToProps)(DeckDetails)
