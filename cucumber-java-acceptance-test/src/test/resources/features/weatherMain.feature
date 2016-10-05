Feature: User can see 5 days weather forecast and 3 hourly forecast for each day
	@ra
	Scenario Outline: User can see 5 days weather forecast for a given location
		Given user is in the weather application
		When user introduces the location "<city>" in the search box
		Then user can see 5 days weather forecast
		
		Examples:
		|city|
		|Edinburgh|
		|Glasgow|
		|Aberdeen|
		|Dundee|
		|Perth|
		|Stirling|

	Scenario Outline: Show 3 hourly weather forecast when user clicks on day
		Given user searched a location in the weather application
		When user clicks on the <day> day
		Then user can see 3 hourly forescast for the day selected
		When user clicks on the first day again
		Then 3 hourly forecast fot the day is hiden
		
		Examples:
		|day|
		|first|
		
