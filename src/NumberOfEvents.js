import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventCount: 5,
  };

  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      return this.setState({
        eventCount: '',
        errorText: `Select number between 1 and 32`,
      });
    } else if (eventCount > 32) {
      return this.setState({
        eventCount: '',
        errorText: `Select number between 1 and 32`,
      });
    } else {
      this.setState({
        eventCount,
        errorText: '',
      });
      this.props.updateEvents('', eventCount);
    }
  };

  render() {
    return (
      <div className='EventNumber'>
         <ErrorAlert text={this.state.errorText} />
        <label htmlFor='numberOfEvent'></label>
        <input
          type='number'
          name='numberOfEvent'
          className='event-number-input'
          placeholder='Enter number of events'
          value={this.state.eventCount}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;