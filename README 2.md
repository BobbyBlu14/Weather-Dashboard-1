# 06 Server-Side APIs: Weather Dashboard
1. Initial Display Includes
Links - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 rel="stylesheet 
<container>
<Header> col-"12" (title) "Weather Dashboard" 
<div>
- 2 Columns (4;8)
    - col-"4" align-Left
    - col- "8" align-right
    <div>
 Left column
- Search input (search city)
<form class="example" action="action_page.php">
  <input type="text" placeholder="Search.." name="search">
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
        <div>
        - Popular City Search {Button List}
        ( click to display Weather Data in Display)
        <button type="button" onclick="alert('Hello World!')">Click Me!</button> x8
            - Austin, TX 
            - Chicago, IL
            - San Francisco, CA
            - NewYork, NY
            - Orlando, FL
            - Seattle, WA
            - Denver, Co
            - Atlanta, GA
            </div>
Right Column
<div float-right>
<div row-1>"weather Display box" (col-8) Padding 30px 
- Display current weather based on location
- <div row-2> 5 day Forcast


2. Initial Display - Current Weather
    - JS code must 
        1. Display Current weather
        
        if popCity is clicked
        THEN corr. city data is displayed
        ELSE - city cearch


1. Prompt user to enter r, p, or s representing rock, paper, or scissors.

2. Computer chooses a random value in a list of r, p, or s.

3. We determine if the user wins or not.

   * If user picks rock and if computer picks scissors then user wins.

   * If user picks rock and if computer picks paper then user loses.

   * If user picks scissors and if computer picks rock then user loses.

   * If user picks scissors and if computer picks paper then user wins.

   * If user picks paper and if computer picks rock then user wins.

   * If user picks paper and if computer picks scissors then user loses.

   * If user picks the same as computer then they tie.

4. We then add to their score.

   * If user wins then we add one to their wins.
    
   * If user loses then we add one to their losses.
    
   * If user ties then we add one to their ties.

5. Prompt user to play again.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
