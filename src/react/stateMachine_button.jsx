import React from 'react';
import {StateMachine} from 'react-machinery';
import './index.css'

// Pending.jsx
class Pending extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.props.decreaseTimeLeft, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  abort = () => {
    this.props.transitionTo('aborted');
  }
  
  render() {
    return <button onClick={this.abort}>
      Action will automatically take place in {this.props.timer} seconds. Click to abort!
    </button>
  }
}

// DoAction.jsx
class DoAction extends React.Component {
  componentDidMount() {
    this.props.action();
  }

  render() {
    return <button disabled>Done.</button>
  }
}

const states = [
  {
    name: 'wait-for-input',
    validTransitions: ['pending'],
    beforeRender: ({resetTimer}) => resetTimer(),
    render: ({message, transitionTo}) =>
      <button onClick={() => transitionTo('pending')}>{message}</button>
  },
  {
    name: 'pending',
    validTransitions: ['aborted'],
    autoTransitions: [
      {
        test: ({timer}) => timer <= 0,
        newState: 'done'
      }
    ],
    component: Pending
  },
  {
    name: 'aborted',
    validTransitions: ['wait-for-input'],
    render: ({transitionTo}) =>
      <button onClick={() => transitionTo('wait-for-input')}>Aborted. Return?</button>
  },
  {
    name: 'done',
    component: DoAction
  }
];



export class HardChoiceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: props.timer,
      currentState: 'wait-for-input',
    };
  }

  render() {
    return <StateMachine
      states={states}
      getCurrentState={() => this.state.currentState}
      setNewState={(newState) => this.setState(() => ({currentState: newState}))}
      data={{
        message: this.props.message,
        timer: this.state.timer,
        action: this.props.action,
        
        decreaseTimeLeft: () => {
          this.setState(() => ({timer: this.state.timer - 1}))
        },
        resetTimer: () => this.setState(() => ({timer: this.props.timer}))
      }}
    />
  }
}