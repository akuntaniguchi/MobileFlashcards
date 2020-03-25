import React, { Component } from 'react';
import { 
  View, 
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation'
import MainNavigator from './navigators/MainNavigator';
import { setLocalNotification } from './utils/notificationHelper';
import reducer from './reducers';

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
const AppContainer = createAppContainer(MainNavigator)

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={ store }>
        <View style={ { flex: 1 } }>
          <AppContainer/>
        </View>
      </Provider>
    );
  }
}
