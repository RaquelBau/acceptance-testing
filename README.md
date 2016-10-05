# acceptance-testing

Requirements can be read in the feature files. These files can be found in src/test/resources/features

How to build and run:
- Check out project and run java test class 'RunCukesTest.java' with following VM arguments:
-Dphantomjs.binary.path=${workspace_location}/src/test/resources/phantomdriver/phantomjs

- Report will be generated in target/cucumber-htmlreport/index.html

Given more time I would like to achieve:
- Add more drivers to be able to run scenarios in different browsers
- More validation scenarios (error scenarios when introducing invalid data, timeout received, invalid json or invalid data received...).
- Scenarios about styles
