import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { 
  darkTurquoise, 
  blue, 
  white,
 } from '../utils/colors';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { clearLocalNotification, setLocalNotification } from '../utils/notificationHelper';
import EmptyDeck from './EmptyDeck';
import QuizResults from './QuizResults';

class Quiz extends Component {
  state = { 
    questionNumber: 0,
    correct: 0,
    display: 'question',
    displayResults: false
  }

  displayQorA = () => {
    let display = this.state.display;
    if(display === 'question') {
      display = 'answer';
    } else {
      display = 'question';
    }
  
    this.setState({ display });
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  userAnswer = (answer) => {
    const { correct, questionNumber} = this.state;
    const { questions } = this.props;

    if(answer === 'correct') {
      this.setState({ correct: correct + 1 });
    }
    
    if(questionNumber === questions.length - 1) {
      this.setState({ displayResults: true });
    } else {
      this.setState({ questionNumber: questionNumber + 1 });
    }
  }

  restartQuiz = () => {
    this.setState({
      questionNumber: 0,
      correct: 0,
      display: 'question',
      displayResults: false
    })

    clearLocalNotification()
      .then(setLocalNotification)   
  }

  render() {     
    const { display, questionNumber, displayResults, correct } = this.state;
    const { questions } = this.props;

    const card = questions[questionNumber];

    if(questions.length === 0 ) {
      return <EmptyDeck/>
    }

    if(displayResults) {
      return <QuizResults
      totalAnswered={ questions.length }
      correct={ correct }
      restart={ this.restartQuiz }
      goBack={ this.goBack }/>
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={ styles.progress }>
          <Text style={{ color: blue }}>Card { questionNumber + 1 }/{ questions.length }</Text>
        </View>

        <View style={styles.card}>
          { display === 'question'
            ? <Text style={styles.question}>{card.question}</Text>
            : <Text style={styles.answer}>{card.answer}</Text>
          }

          <TouchableWithoutFeedback onPress={this.displayQorA}>
            { display === 'question'
              ? <Text style={{color: white, fontSize: 20}}>Show Answer</Text>
              : <Text style={{color: white, fontSize: 20}}>Show Question</Text>
            }
          </TouchableWithoutFeedback>

          <View>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.userAnswer('correct')}>
              <Text style={styles.buttonText}>{'Correct'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.userAnswer('incorrect')}>
              <Text style={styles.buttonText}>{'Incorrect'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> 
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { questions: state[ownProps.navigation.state.params.deck].questions };
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  question: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white
  },
  answer: {
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 25,
    padding: 25,
    backgroundColor: blue,
  },
  button: {
    padding: 15,
    margin: 10,
    width: 150,
    backgroundColor: darkTurquoise
  },
  buttonText: {
    color: white,
    borderRadius: 1,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
