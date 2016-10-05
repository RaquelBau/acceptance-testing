package weather.driver;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public final class WebDriverFactory {

	private WebDriverFactory() {
		// private constructor to avoid instantiation
	}
	private static Dimension defaultBrowserDimensions = new Dimension(1920, 1018);
	public enum Browser {
		PHANTOM
	}
	
	public static RemoteWebDriver getWebDriver(Browser browser) {
		RemoteWebDriver driver = null;
		switch(browser) {
			case PHANTOM: 
				driver = getPhantomDriver();
				break;
		}
		if (driver != null) {			
			driver.manage().window().setSize(defaultBrowserDimensions);
			driver.getWindowHandle();
			driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		}
		return driver;
	}
	
	
	private static RemoteWebDriver getPhantomDriver() {
		DesiredCapabilities capabilities = DesiredCapabilities.phantomjs();

		ArrayList<String> cliArgsCap = new ArrayList<String>();
		cliArgsCap.add("--ignore-ssl-errors=true");
		cliArgsCap.add("--web-security=false");
		cliArgsCap.add("--disk-cache=true");
		cliArgsCap.add("--max-disk-cache-size=256");
		cliArgsCap.add("--proxy-type=none");
		capabilities.setCapability(
				PhantomJSDriverService.PHANTOMJS_CLI_ARGS, 
				cliArgsCap
		);
		capabilities.setCapability(
			PhantomJSDriverService.PHANTOMJS_PAGE_SETTINGS_PREFIX + "loadImages", 
			true
		);
		capabilities.setCapability("takesScreenshot", true);

		return new PhantomJSDriver(capabilities);
	}

}
