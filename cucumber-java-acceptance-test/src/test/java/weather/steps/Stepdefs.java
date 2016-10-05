package weather.steps;

import static weather.hooks.Setup.weatherViewDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	public String appUrl = "https://weather-acceptance.herokuapp.com/";
    @Given("^user is in the weather application$")
    public void userIsInTheWeatherApplication() throws Throwable {
    	//Open the web
    	weatherViewDriver.openWeb(appUrl);
    	//Check that it is opened and the title is visible
    	String xpath = "//body//h1";
    	if(!weatherViewDriver.getXpathText(xpath).equals("Five Day Weather Forecast for")){
    		throw new RuntimeException("Title 'Five Day Weather Forecast for' not found");
    	}
    }
    
    @Given("^user searched a location in the weather application$")
    public void userSearchedALocaton() throws Throwable{
    	userIsInTheWeatherApplication();
    	introduceLocation("Edinburgh"); //Any location is valid for the test. Could be modified to introduce a given location in the step
    }
    
    @When("^user introduces the location \"([^\"]*)\" in the search box$")
    public void introduceLocation(String location) throws Throwable{
    
    	//Clear the current value
    	weatherViewDriver.clearText("city");
    	//Set value
    	weatherViewDriver.setText("city", location);
    	//Click enter
    	weatherViewDriver.clickEnter("city");
    }
    
    @When("^user introduces an unexpected location$")
    public void introduceUnexpectedLocation() throws Throwable {
    	introduceLocation("London");
    }
    
    @Then("^user can see (\\d+) days weather forecast$")
    public void userCanSeeDaysWeatherForecast(int days) throws Throwable {
    	int i = 1;
    	String testId;
    	//Check there is no errors
    	if(weatherViewDriver.elementIsVisible("error")){
    		throw new RuntimeException("Error returned with message: " + weatherViewDriver.getXpathText("//*[@data-test='error']"));
    	}
    	//First check there are as many days as expected
    	while(i <= days){
    		testId = "day-" + i;
    		if(!weatherViewDriver.elementIsVisible(testId)){
    			throw new RuntimeException("Expected " + Integer.toString(days) + " days weather forecaste. Days visible: " + Integer.toString(i-1));
    		}
    		testId = "date-" + i;
    		if(!weatherViewDriver.elementIsVisible(testId)){
    			throw new RuntimeException("Expected date after day");
    		}
    		i++;
    	}
    	//Check that there is no more days than expected
		testId = "day-" + i;
		if(weatherViewDriver.elementIsVisible(testId)){
			throw new RuntimeException("Expected " + Integer.toString(days) + " days weather forecaste. Days visible: " + Integer.toString(i));
		}
    }
    
    @Then("^message \"([^\"]*)\" appears$")
    public void errorMessageAppear(String message) throws Throwable {
    	//Check message is visible
    	if(!weatherViewDriver.elementIsVisible("error")){
    		throw new RuntimeException("Error message is not visible.");
    	}
    	//Check error contains expected message
    	if(!weatherViewDriver.getXpathText("//*[@data-test='error']").equals(message)){
    		throw new RuntimeException("Unexpected error: '" + weatherViewDriver.getXpathText("//*[@data-test='error']") + "'. Expected error message: " + message);
    	}
    }

}

