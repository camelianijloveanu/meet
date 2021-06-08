import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.event-number-input').prop('eventValue')).toBe(query);
  });

  test('check input default value is 5', () => {
    expect(
      NumberOfEventsWrapper.find('.event-number-input').at(0).props().value
    ).toEqual(5);
  });

  test('change state when input different value', () => {
    const eventCount = { target: { value: 5 } };

    NumberOfEventsWrapper.find('.event-number-input').simulate(
      'change',
      eventCount
    );
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(5);
  });

  test('check input type is equal to number', () => {
    expect(
      NumberOfEventsWrapper.find('.event-number-input').at(0).props().type
    ).toEqual('number');
  });
});