import React, { Component } from 'react';
import { 
  FlatList, 
  StyleSheet 
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDecks } from '../actions';
import Deck from './Deck';

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  goToDeck = (deck) => {
    this.props.navigation.navigate('Deck', { deck });
  }

  render() {
    const { decks} = this.props;
    
    return (
      <FlatList 
        keyExtractor={ (item, index) => item.toString() + index.toString() }
        style={ styles.decks }
        data={ Object.values(decks) }
        renderItem={({ item }) => (
          <Deck 
            deck={ item } 
            goToDeck={ this.goToDeck }/>
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDecks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)

const styles = StyleSheet.create({
  decks: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 5,
    padding: 30,
    width: 375
  }
})
