import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { blue, darkTurquoise, white } from '../utils/colors';
import DeckList from '../components/DeckList';
import NewDeck from '../components/NewDeck';
import NewCard from '../components/NewCard';
import DeckDetails from '../components/DeckDetails';
import Quiz from '../components/Quiz';

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      topBarLabel: 'Decks'
    }
  },
  Add: {
    screen: NewDeck,
    navigationOptions: {
      topBarLabel: 'Add New Deck'
    }
  }
},
{
  navigationOptions: {
    headerShown: false
  },
  tabBarOptions: {
    activeTintColor: darkTurquoise,
    inactiveTintColor: white,
    labelStyle: {
      fontSize: 15
    },
    style: {
      height: 50,
      backgroundColor: blue,
    }
  }
});

const navigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: blue
  }
}

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: DeckDetails,
    navigationOptions
  },
  Quiz: {
    screen: Quiz,
    navigationOptions
  },
  NewCard: {
    screen: NewCard,
    navigationOptions
  }
})

export default MainNavigator;