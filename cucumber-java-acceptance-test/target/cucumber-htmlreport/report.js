$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("weatherMain.feature");
formatter.feature({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day",
  "description": "",
  "name": "User can see 5 days weather forecast and 3 hourly forecast for each day",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location",
  "tags": [
    {
      "name": "@ra",
      "line": 2
    }
  ],
  "description": "",
  "name": "User can see 5 days weather forecast for a given location",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces the location \"\u003ccity\u003e\" in the search box",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "user can see 5 days weather forecast",
  "keyword": "Then ",
  "line": 6
});
formatter.examples({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 8,
  "rows": [
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;1",
      "cells": [
        "city"
      ],
      "line": 9
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;2",
      "cells": [
        "Edinburgh"
      ],
      "line": 10
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;3",
      "cells": [
        "Glasgow"
      ],
      "line": 11
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;4",
      "cells": [
        "Aberdeem"
      ],
      "line": 12
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;5",
      "cells": [
        "Dundee"
      ],
      "line": 13
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;6",
      "cells": [
        "Perth"
      ],
      "line": 14
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;7",
      "cells": [
        "Stirling"
      ],
      "line": 15
    }
  ]
});
formatter.before({
  "duration": 974487292,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;2",
  "tags": [
    {
      "name": "@ra",
      "line": 2
    }
  ],
  "description": "",
  "name": "User can see 5 days weather forecast for a given location",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces the location \"Edinburgh\" in the search box",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 5 days weather forecast",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1370295908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 30
    }
  ],
  "location": "Stepdefs.introduceLocation(String)"
});
formatter.result({
  "duration": 1118788477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "Stepdefs.userCanSeeDaysWeatherForecast(int)"
});
formatter.result({
  "duration": 4676732206,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 759487603,
  "status": "passed"
});
formatter.before({
  "duration": 662693060,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;3",
  "tags": [
    {
      "name": "@ra",
      "line": 2
    }
  ],
  "description": "",
  "name": "User can see 5 days weather forecast for a given location",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces the location \"Glasgow\" in the search box",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 5 days weather forecast",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1287183099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow",
      "offset": 30
    }
  ],
  "location": "Stepdefs.introduceLocation(String)"
});
formatter.result({
  "duration": 997768220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "Stepdefs.userCanSeeDaysWeatherForecast(int)"
});
formatter.result({
  "duration": 4683337560,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 734523632,
  "status": "passed"
});
formatter.before({
  "duration": 676090467,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;4",
  "tags": [
    {
      "name": "@ra",
      "line": 2
    }
  ],
  "description": "",
  "name": "User can see 5 days weather forecast for a given location",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces the location \"Aberdeem\" in the search box",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 5 days weather forecast",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1283281408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aberdeem",
      "offset": 30
    }
  ],
  "location": "Stepdefs.introduceLocation(String)"
});
formatter.result({
  "duration": 881830897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "Stepdefs.userCanSeeDaysWeatherForecast(int)"
});
formatter.result({
  "duration": 160091262,
  "status": "failed",
  "error_message": "java.lang.RuntimeException: Error returned with message: Error retrieving the forecast\n\tat weather.steps.Stepdefs.userCanSeeDaysWeatherForecast(Stepdefs.java:49)\n\tat ✽.Then user can see 5 days weather forecast(weatherMain.feature:6)\n"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 786552301,
  "status": "passed"
});
formatter.before({
  "duration": 654345828,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;5",
  "tags": [
    {
      "name": "@ra",
      "line": 2
    }
  ],
  "description": "",
  "name": "User can see 5 days weather forecast for a given location",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces the location \"Dundee\" in the search box",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 5 days weather forecast",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1287161424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dundee",
      "offset": 30
    }
  ],
  "location": "Stepdefs.introduceLocation(String)"
});
formatter.result({
  "duration": 959373072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "Stepdefs.userCanSeeDaysWeatherForecast(int)"
});
formatter.result({
  "duration": 4665386002,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 754788272,
  "status": "passed"
});
formatter.before({
  "duration": 652330921,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;6",
  "tags": [
    {
      "name": "@ra",
      "line": 2
    }
  ],
  "description": "",
  "name": "User can see 5 days weather forecast for a given location",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces the location \"Perth\" in the search box",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 5 days weather forecast",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1294445022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Perth",
      "offset": 30
    }
  ],
  "location": "Stepdefs.introduceLocation(String)"
});
formatter.result({
  "duration": 923275148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "Stepdefs.userCanSeeDaysWeatherForecast(int)"
});
formatter.result({
  "duration": 4670396398,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 737520260,
  "status": "passed"
});
formatter.before({
  "duration": 657997945,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;7",
  "tags": [
    {
      "name": "@ra",
      "line": 2
    }
  ],
  "description": "",
  "name": "User can see 5 days weather forecast for a given location",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces the location \"Stirling\" in the search box",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 5 days weather forecast",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1288924988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stirling",
      "offset": 30
    }
  ],
  "location": "Stepdefs.introduceLocation(String)"
});
formatter.result({
  "duration": 1066466999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "Stepdefs.userCanSeeDaysWeatherForecast(int)"
});
formatter.result({
  "duration": 4684440343,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 749619237,
  "status": "passed"
});
});