import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { darkTurquoise, white } from '../utils/colors';

const QuizResults = ({ totalAnswered, correct, restart, goBack }) => (
  <View style={ styles.resultsContainer }>
    <Text style={ styles.resultText }>Total Questions Answered: { totalAnswered }</Text>
    <Text style={ styles.resultText }>Correct Answers: { correct }</Text>
    <TouchableOpacity 
      style={ styles.button }
      onPress={ restart }>
      <Text style={ styles.buttonText }>{'Restart'}</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={ styles.button }
      onPress={ goBack }>
      <Text style={ styles.buttonText }>{'Back'}</Text>
    </TouchableOpacity>
  </View>
)

export default QuizResults

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    padding: 25,
    margin: 20,
    width: 250,
    backgroundColor: darkTurquoise
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: white,
  }
})
