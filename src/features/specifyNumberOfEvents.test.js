import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 5 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('the user hasn’t specified any number', () => {

        });

        when('the the user opens app', () => {
        AppWrapper = mount(<App />);
        });

        then('five events will be displayed to the user', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });


    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wishes to see a specific number of events', () => {
            AppWrapper = mount(<App />);
        });

        when('the user inputs the desired number', () => {
        AppWrapper.find(".event-number-input").simulate("change", {
        target: { value: 1 }
        })
        });

        then('that exact amount of events will be displayed', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(1);

        });
    });
});