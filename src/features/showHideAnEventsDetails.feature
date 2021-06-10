Feature: Show/hide an event’s details

Scenario: Event element is collapsed by default
Given the event element is collapsed
When the user wants to use app
Then the user can only see the event list

Scenario: User can expand an event to see its details
Given the event details are hidden
When the user clicks on said event
Then the user can retrieve information about the event

Scenario: User can collapse an event to hide its details.
Given the event details are displayed
When the user clicks on said event
Then the user can hide information about the event