import React, { Component } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet,
  TouchableOpacity,
  Text 
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import { saveDeck } from '../utils/api';
import { 
  white, 
  blue 
} from '../utils/colors';


class NewDeck extends Component {
  state = { 
    title: '',
  }

  createNewDeck = () => {
    saveDeck(this.state.title);

    const deck = {
      [this.state.title]: {
        title: this.state.title,
        questions: []
      }
    }

    this.props.addNewDeck(deck);
    this.props.navigation.navigate('Deck', { deck: this.state.title });
    this.setState({ title: '' });
  }

  render() {
    return (
      <View style={ styles.container }>
        <TextInput
          style={ styles.title }
          placeholder={ 'Enter the title of the Deck' }
          onFocus={ () => this.setState({ title: '' }) }
          onChangeText={ title => this.setState({ title }) }
          value={ this.state.title }
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={ styles.button }
            onPress={ this.createNewDeck }>
            <Text style={ styles.buttonText }>{ 'Create New Deck' }</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewDeck }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewDeck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    padding: 10,
    marginBottom: 30,
    fontSize: 25
  },
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    padding: 25,
    width: 300,
    backgroundColor: blue,
  },
  buttonText: {
    color: white,
    textAlign: 'center'
  }
})
