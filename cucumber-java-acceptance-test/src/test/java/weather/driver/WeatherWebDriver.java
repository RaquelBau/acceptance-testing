package weather.driver;

import static weather.hooks.Setup.weatherViewDriver;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.Scenario;

public class WeatherWebDriver {

	private  RemoteWebDriver webDriver;
	private String windowHandle;

	public WeatherWebDriver(RemoteWebDriver driver) {
		this.webDriver = driver;
		
	}
	public void closeDriver() {
		if (webDriver != null) {
			webDriver.quit();
		}
	}

	public void takeScreenshot(Scenario scenario) {
		byte[] screenshot = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
	}
	
	public void openWeb(String url) {
		webDriver.get(url);
		windowHandle = webDriver.getWindowHandle();
		webDriver.switchTo().window(windowHandle);
	}
	
	
    public String getXpathText(String xpath) throws Throwable {
		return webDriver.findElement(By.xpath(xpath)).getText().toString();
    }
    
    public void clearText(String id) throws Throwable {
    	webDriver.findElement(By.xpath("//*[@data-test='" + id + "']")).clear();
    }

    public void setText(String id, String text) throws Throwable{
    	webDriver.findElement(By.xpath("//*[@data-test='" + id + "']")).sendKeys(text);
    }
    
    public void clickEnter(String id) throws Throwable {
    	webDriver.findElement(By.xpath("//*[@data-test='" + id + "']")).sendKeys(Keys.RETURN);
    }
    
    public boolean elementIsVisible(String id) throws Throwable{
    	return webDriver.findElements(By.xpath("//*[@data-test='" + id + "']")).size() > 0;
    }
}
