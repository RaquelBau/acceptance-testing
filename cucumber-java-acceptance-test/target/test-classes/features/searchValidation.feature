Feature: Error scenarios for search location

	Scenario: No weather forecast is returned for an invalid location
		Given user is in the weather application
		When user introduces an unexpected location
		Then message "Error retrieving the forecast" appears
