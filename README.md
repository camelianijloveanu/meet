## Description
#### Serverless, progressive web application (PWA) with React using a test-driven
#### development (TDD) technique. The application uses the Google Calendar API to fetch
#### upcoming events
## Key feature
#### -filter events by city
#### -show and hide event's details
#### -specify numbers of events to be displayed
#### -usable when user is offline
#### -add app shortcut to the screen
#### -view chart of upcoming events in a certain city

# FEATURE 2: Show/hide an event’s details
USER STORY: 
As a user
I should be able to click on an event
To retrieve information about said event.
•	Scenario 1: 
Given the event element is collapsed
When the user wants to display information
Then the user can expand the event element
•	Scenario 2:
Given the event details are hidden
When the user clicks on said event
Then the user can retrieve information about the event
•	Scenario 3:
Given the event details are displayed
When the user clicks on said event
Then the user can hide information about the event


# FEATURE 3: Specify number of events
USER STORY:
As a user,
I should be able to specify a number of events
To view how many I prefer on screen.
•	Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the default number of displayed events is 32
When the user opens app 
Then 32 events will be displayed to the user.

•	Scenario 2: User can change the number of events they want to see
Given the user wishes to see a specific number of events
When the user inputs the desired number
Then that exact amount of events will be displayed.

# FEATURE 4: Use the app when offline
USER STORY:
As a user,
I should be able to use the app while offline
So I can retrieve information about events without a connection.
•	Scenario 1: Show cached data when there’s no internet connection
Given the user has no connection
When the user uses app
Then previously cached data should be displayed

•	Scenario 2: Show error when user changes the settings (city, time range)
Given the user has no connection
When the user changes settings 
Then message error should be displayed.


# FEATURE 5: Data visualization
•	Scenario 1: Show a chart with the number of upcoming events in each city
USER STORY:
As a user,
I want to be able to view future events in each city
So I can see what happens in each place.
•	Scenario 1: Show a chart with the number of upcoming events in each city

Given the user wants to see events in many cities
When the user clicks on chart
Then a chart with events in each city should be displayed.
