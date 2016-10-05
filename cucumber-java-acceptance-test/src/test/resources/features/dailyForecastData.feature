Feature: User can see specific data in the daily forecast

	Scenario: Today's daily forecast shows current weather condition
		Given user is in the weather application
		When user introduces the location "Edinburgh" in the search box
		Then today's daily forecast shows current weather condition	
		
	Scenario: Future daily forecast shows summarised weather condition
		Given user is in the weather application
		When user introduces the location "Edinburgh" in the search box
		Then next 4 days' daily forecasts show dominant weather condition for each day
		
	Scenario: Today's daily forecast shows current wind speed and direction
		Given user is in the weather application
		When user introduces the location "Edinburgh" in the search box
		Then today's daily forecast shows current wind speed	
		And today's daily forecast shows current wind direction
		
	Scenario: Future daily forecast shows summarised wind speed and direction
		Given user is in the weather application
		When user introduces the location "Edinburgh" in the search box
		Then next 4 days' daily forecasts show dominant wind speed for each day
		And next 4 days' daily forecasts show dominant wind direction for each day
		
	Scenario: Today's daily forecast shows current rainfall
		Given user is in the weather application
		When user introduces the location "Edinburgh" in the search box
		Then today's daily forecast shows current rainfall
		
	Scenario: Future daily forecast shows summarised rainfall
		Given user is in the weather application
		When user introduces the location "Edinburgh" in the search box
		Then next 4 days' daily forecasts show dominant rainfall	
		
	Scenario: Daily forecast shows minimum and maxium temperature
		Give user is in the weather application
		When user introduces the location "Edinburgh" in the search box
		Then daily forecast shows maximum temperature for each day
		And daily forecast shows minimum temperature for each day	