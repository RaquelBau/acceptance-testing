package weather.steps;

import static weather.hooks.Setup.scenario;
import static weather.hooks.Setup.weatherViewDriver;
import static weather.util.MapperUtil.TESTID;
import static org.junit.Assert.fail;
import weather.driver.WeatherWebDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
	private String daySelected = "";
	private String hourTestId = "";
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
    
    @When("^user clicks on the ([^\"]*) day(?:| again)$")
    public void userClicksOnDay(String day) throws Throwable{
    	daySelected = day; //We store this to use when asserting data
    	String testid = TESTID.get(day);
    	if(testid == null) fail("Test id not found in mapper for value '" + day + "'");
    	weatherViewDriver.clickElement(testid);
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
    
    @Then("^user can see 3 hourly forescast for the day selected$")
    public void userCanSeeHourlyForecast() throws Throwable{
    	hourTestId = TESTID.get(daySelected + " day hourly");
    	if(hourTestId == null) fail("Test id not found for value: '" + daySelected + " day hourly");
    	//Check it is visible
    	String xpath = "//*[contains(@data-test,'" + hourTestId + "')]//ancestor::*[@class='details']"
    			+ "[contains(@style,'max-height: 2000px;')]";
    	if(!weatherViewDriver.elementXpathIsVisible(xpath)){
			throw new RuntimeException("Hourly forecast is not visible");
		}
    	if(daySelected.equals("first")){
    		//If it is today, we check there is at least one as it would depend on the time of the day
    		if(weatherViewDriver.numberElements("//*[contains(@data-test,'" + hourTestId + "')]") == 0){
    			throw new RuntimeException("No hourly forecast found for the day selected.");
    		}
    	}else if(weatherViewDriver.numberElements("//*[contains(@data-test,'" + hourTestId + "')]") != 8){
    		//For future days we would expect 8 hourly forecasts as it is one every 3 hours
			throw new RuntimeException("Expected 8 instances of 3 hourly forecasts, found "
					+ Integer.toString(weatherViewDriver.numberElements("//*[contains(@data-testid,'" + hourTestId + "')]")));
    	}
    	
    	weatherViewDriver.takeScreenshot(scenario);
    }
    
    @Then("^3 hourly forecast fot the day is hiden$")
    public void hourlyForecastIsHidden() throws Throwable{
    	weatherViewDriver.sleep(1000); 
    	String xpath = "//*[contains(@data-test,'" + hourTestId + "')]//ancestor::*[@class='details']"
    			+ "[contains(@style,'max-height: 0px;')]";
    	if(!weatherViewDriver.elementXpathIsVisible(xpath)){
			throw new RuntimeException("Hourly forecast is still visible");
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
    
    @Then("^today's daily forecast shows current ([^\"]*)$")
    public void todayDailyForecastShows(String element) throws Throwable {
    	forecastElementVisibleInDay(element, 1);
    	
    	//TODO: Compare current hourly forecarst with shown in today's forecast
    }
    
    @Then("^next (\\d+) days' daily forecasts show dominant ([^\"]*) for each day$")
    public void futureDailyForecastShows(int days, String element) throws Throwable{
    	int i = 2;
    	while(i <= days +1){
    		forecastElementVisibleInDay(element, i);
    		i++;
    	}
    	//TODO: Check that the value shown is the dominant one
    }

    @Then("^daily forecast shows ([^\"]*) for each day$")
    public void dailyForecastShows(String element) throws Throwable{
    	int i = 1;
    	while(i <= 5){
    		forecastElementVisibleInDay(element, i);
    		i++;
    	}
    }
    
    public void forecastElementVisibleInDay(String element, int day) throws Throwable{
    	String testid = TESTID.get(element);
    	if(testid == null) fail("Test id not found for element " + element);
    	
    	if(!weatherViewDriver.elementIsVisible(testid + "-" + Integer.toString(day))){
    		throw new RuntimeException("Element " + element + " not found in today's forescast.");
    	}
    }
}

