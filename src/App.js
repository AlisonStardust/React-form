import React, { Component } from 'react';
import './App.css';
import Poll from './Poll.js';

class App extends Component {
  state = {
    polls: {
      1: {
        id: 1,
        question: "Does Ala have a cat?",
        votes: {
          1: {
            id: 1,
            answer: "Yes",
            counter: 0,
          },
          2: {
            id: 2,
            answer: "No",
            counter: 0,
          }
        }
      },
    }

  }


  increment = (pollId, voteId) => this.setState(state => {
    const poll = state.polls[pollId];
    poll.votes[voteId].counter++

    return {
      polls: {...state.polls, poll}
    }
  });
  
  render() {
    return <div>{Object.entries(this.state.polls).map(([_, value]) =>
      <Poll poll={value} increment={this.increment} decrement={this.decrement}/>)
    }</div>
  }
}

export default App;