import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount} from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
    test('Event element is collapsed by default', ({ given, when, then }) => {
        given('the event element is collapsed', () => {

        });
        let AppWrapper;
        when('the user wants to use app', () => {
        AppWrapper = mount(<App />);
        });

        then('the user can only see the event list', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the event details are hidden', () => {
        AppWrapper = mount(<App />);
        });
        let AppWrapper;

        when('the user clicks on said event', () => {
        AppWrapper.update()
        AppWrapper.find('.show-hide-btn').at(0).simulate('click')
    });

        then('the user can retrieve information about the event', () => {
        expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the event details are displayed', () => {
        AppWrapper = mount(<App />);
        AppWrapper = mount(<Event event={mockData[0]} />);
        AppWrapper.find(".show-hide-btn").simulate("click");
        AppWrapper.find(".event-details");
        });

        when('the user clicks on said event', () => {
            AppWrapper.find(".show-hide-btn").simulate("click");
        });

        then('the user can hide information about the event', () => {
        expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
});