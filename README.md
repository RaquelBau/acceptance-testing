# acceptance-testing

Requirements can be read in the feature files. These files can be found in src/test/resources/features

How to build and run:
- Check out project and run java test class 'RunCukesTest.java' with following VM arguments:
-Dphantomjs.binary.path=${workspace_location}/src/test/resources/phantomdriver/phantomjs

- Report will be generated in target/cucumber-htmlreport/index.html

Given more time I would like to achieve:
- Add more drivers to be able to run scenarios in different browsers
- More validation scenarios (error scenarios when introducing invalid data, timeout received, invalid json or invalid data received...).
- Requirements about styles (icon displayed, size...)
- Compare data showed with data retrieved from json (in test mode, from the json in data folder. Testing with real data we could get the response received from API and compare with data showed).
- Check the hours in the hourly forecast with the expected ones.
- Use examples when required to increase the coverage
- Clarify how dominant values are calculated to write the requirements and test properly
