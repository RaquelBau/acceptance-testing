package weather.hooks;

import java.io.IOException;

import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import weather.driver.WeatherWebDriver;
import weather.driver.WebDriverFactory;
import weather.driver.WebDriverFactory.Browser;

public class Setup {
	public static RemoteWebDriver driver;
	public static WeatherWebDriver weatherViewDriver;
    public static Scenario scenario;
    
	@Before(order = 1)
	public void before(Scenario scenario) throws IOException, InterruptedException {
		weatherViewDriver = new WeatherWebDriver(WebDriverFactory.getWebDriver(Browser.valueOf("PHANTOM")));		
		Setup.scenario = scenario;
	}

	@After
	static public void tearDown(){
		weatherViewDriver.takeScreenshot(Setup.scenario);
		weatherViewDriver.closeDriver();
	}

}
