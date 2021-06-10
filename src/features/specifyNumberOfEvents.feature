Feature: specify number of events

Scenario: When user hasn’t specified a number, 5 is the default number
Given the user hasn’t specified any number
When the the user opens app 
Then five events will be displayed to the user

Scenario: User can change the number of events they want to see
Given the user wishes to see a specific number of events
When the user inputs the desired number
Then that exact amount of events will be displayed