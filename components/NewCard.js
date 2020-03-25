import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { 
  blue,
  white 
} from '../utils/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewCard } from '../actions';
import { saveCard } from '../utils/api';

class NewCard extends Component {
  state = { 
    question: '',
    answer: '',
  }

  createNewCard = () => {
    const newCard = {
      question: this.state.question,
      answer: this.state.answer
    }

    const deckTitle = this.props.navigation.state.params.deck;

    saveCard(deckTitle, newCard);
    this.props.addNewCard(deckTitle, newCard);

    this.props.navigation.navigate('Deck', { deck: deckTitle });
  }

  render() {
    return (
      <View style={ styles.container }>
        <TextInput
          placeholder={ 'Enter Question Here' }
          style={styles.input}
          onFocus={ () => this.setState({ question: '' }) }
          onChangeText={ question => this.setState({ question }) }
          value={ this.state.question }
        />
        <TextInput
          placeholder={ 'Enter Answer Here' }
          style={ styles.input }
          onFocus={ () => this.setState({ answer: '' }) }
          onChangeText={ answer => this.setState({ answer }) }
          value={ this.state.answer }
        />
        <View style={ styles.buttonContainer }>
          <TouchableOpacity 
            style={ styles.button }
            onPress={ this.createNewCard }>
            <Text style={ styles.buttonText }>{ 'Create New Card' }</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    padding: 20,
    marginTop: 15,
    fontSize: 20
  },
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    padding: 20,
    marginTop: 50,
    width: 300,
    backgroundColor: blue
  },
  buttonText: {
    color: white,
    fontSize: 20,
    textAlign: 'center'
  }
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewCard }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewCard)
