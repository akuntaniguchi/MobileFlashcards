import React from 'react';
import { 
  View, 
  Text
} from 'react-native';
import { blue } from '../utils/colors';

const EmptyDeck = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 25, color: blue, textAlign: 'center' }}>Deck contains 0 cards!</Text>
  </View>
)

export default EmptyDeck
