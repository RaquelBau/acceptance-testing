$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dailyForecastData.feature");
formatter.feature({
  "id": "user-can-see-specific-data-in-the-daily-forecast",
  "description": "",
  "name": "User can see specific data in the daily forecast",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 948365278,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-specific-data-in-the-daily-forecast;today\u0027s-daily-forecast-shows-current-weather-condition",
  "description": "",
  "name": "Today\u0027s daily forecast shows current weather condition",
  "keyword": "Scenario",
  "line": 3,
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
  "line": 5
});
formatter.step({
  "name": "today\u0027s daily forecast shows current weather condition",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1201412336,
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
  "duration": 1131374392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "weather condition",
      "offset": 37
    }
  ],
  "location": "Stepdefs.todayDailyForecastShows(String)"
});
formatter.result({
  "duration": 60819391,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 754981965,
  "status": "passed"
});
formatter.before({
  "duration": 664692451,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-specific-data-in-the-daily-forecast;future-daily-forecast-shows-summarised-weather-condition",
  "description": "",
  "name": "Future daily forecast shows summarised weather condition",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "user introduces the location \"Edinburgh\" in the search box",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "next 4 days\u0027 daily forecasts show dominant weather condition for each day",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1128442946,
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
  "duration": 1111293882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    },
    {
      "val": "weather condition",
      "offset": 43
    }
  ],
  "location": "Stepdefs.futureDailyForecastShows(int,String)"
});
formatter.result({
  "duration": 212322855,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 743829062,
  "status": "passed"
});
formatter.before({
  "duration": 661973741,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-specific-data-in-the-daily-forecast;today\u0027s-daily-forecast-shows-current-wind-speed-and-direction",
  "description": "",
  "name": "Today\u0027s daily forecast shows current wind speed and direction",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 14
});
formatter.step({
  "name": "user introduces the location \"Edinburgh\" in the search box",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "today\u0027s daily forecast shows current wind speed",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "today\u0027s daily forecast shows current wind direction",
  "keyword": "And ",
  "line": 17
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1137471084,
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
  "duration": 1136491062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wind speed",
      "offset": 37
    }
  ],
  "location": "Stepdefs.todayDailyForecastShows(String)"
});
formatter.result({
  "duration": 55336256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wind direction",
      "offset": 37
    }
  ],
  "location": "Stepdefs.todayDailyForecastShows(String)"
});
formatter.result({
  "duration": 54198628,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 735737178,
  "status": "passed"
});
formatter.before({
  "duration": 660162807,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-specific-data-in-the-daily-forecast;future-daily-forecast-shows-summarised-wind-speed-and-direction",
  "description": "",
  "name": "Future daily forecast shows summarised wind speed and direction",
  "keyword": "Scenario",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 20
});
formatter.step({
  "name": "user introduces the location \"Edinburgh\" in the search box",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "next 4 days\u0027 daily forecasts show dominant wind speed for each day",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "next 4 days\u0027 daily forecasts show dominant wind direction for each day",
  "keyword": "And ",
  "line": 23
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1142397230,
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
  "duration": 1118107724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    },
    {
      "val": "wind speed",
      "offset": 43
    }
  ],
  "location": "Stepdefs.futureDailyForecastShows(int,String)"
});
formatter.result({
  "duration": 226433680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    },
    {
      "val": "wind direction",
      "offset": 43
    }
  ],
  "location": "Stepdefs.futureDailyForecastShows(int,String)"
});
formatter.result({
  "duration": 217994481,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 738038700,
  "status": "passed"
});
formatter.before({
  "duration": 659105125,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-specific-data-in-the-daily-forecast;today\u0027s-daily-forecast-shows-current-rainfall",
  "description": "",
  "name": "Today\u0027s daily forecast shows current rainfall",
  "keyword": "Scenario",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 26
});
formatter.step({
  "name": "user introduces the location \"Edinburgh\" in the search box",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "today\u0027s daily forecast shows current rainfall",
  "keyword": "Then ",
  "line": 28
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1162498607,
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
  "duration": 1126329569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rainfall",
      "offset": 37
    }
  ],
  "location": "Stepdefs.todayDailyForecastShows(String)"
});
formatter.result({
  "duration": 55727341,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 735227457,
  "status": "passed"
});
formatter.before({
  "duration": 655637587,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-specific-data-in-the-daily-forecast;future-daily-forecast-shows-summarised-rainfall",
  "description": "",
  "name": "Future daily forecast shows summarised rainfall",
  "keyword": "Scenario",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 31
});
formatter.step({
  "name": "user introduces the location \"Edinburgh\" in the search box",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "next 4 days\u0027 daily forecasts show dominant rainfall for each day",
  "keyword": "Then ",
  "line": 33
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1146545322,
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
  "duration": 1124362147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 5
    },
    {
      "val": "rainfall",
      "offset": 43
    }
  ],
  "location": "Stepdefs.futureDailyForecastShows(int,String)"
});
formatter.result({
  "duration": 218769935,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 739295669,
  "status": "passed"
});
formatter.before({
  "duration": 653163155,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-specific-data-in-the-daily-forecast;daily-forecast-shows-minimum-and-maxium-temperature",
  "description": "",
  "name": "Daily forecast shows minimum and maxium temperature",
  "keyword": "Scenario",
  "line": 35,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 36
});
formatter.step({
  "name": "user introduces the location \"Edinburgh\" in the search box",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "daily forecast shows maximum temperature for each day",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "daily forecast shows minimum temperature for each day",
  "keyword": "And ",
  "line": 39
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1163313800,
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
  "duration": 1130483394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maximum temperature",
      "offset": 21
    }
  ],
  "location": "Stepdefs.dailyForecastShows(String)"
});
formatter.result({
  "duration": 270814925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "minimum temperature",
      "offset": 21
    }
  ],
  "location": "Stepdefs.dailyForecastShows(String)"
});
formatter.result({
  "duration": 271185574,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 732243040,
  "status": "passed"
});
formatter.uri("searchValidation.feature");
formatter.feature({
  "id": "error-scenarios-for-search-location",
  "description": "",
  "name": "Error scenarios for search location",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 659460300,
  "status": "passed"
});
formatter.scenario({
  "id": "error-scenarios-for-search-location;no-weather-forecast-is-returned-for-an-invalid-location",
  "description": "",
  "name": "No weather forecast is returned for an invalid location",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "user is in the weather application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user introduces an unexpected location",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "message \"Error retrieving the forecast\" appears",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "Stepdefs.userIsInTheWeatherApplication()"
});
formatter.result({
  "duration": 1149165698,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.introduceUnexpectedLocation()"
});
formatter.result({
  "duration": 777650752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error retrieving the forecast",
      "offset": 9
    }
  ],
  "location": "Stepdefs.errorMessageAppear(String)"
});
formatter.result({
  "duration": 162543657,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 772248208,
  "status": "passed"
});
formatter.uri("weatherMain.feature");
formatter.feature({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day",
  "description": "",
  "name": "User can see 5 days weather forecast and 3 hourly forecast for each day",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location",
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
        "Aberdeen"
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
  "duration": 659802458,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;2",
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
  "duration": 1158497010,
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
  "duration": 1237060793,
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
  "duration": 4677498817,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 732006962,
  "status": "passed"
});
formatter.before({
  "duration": 654795549,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;3",
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
  "duration": 1177125437,
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
  "duration": 1006516992,
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
  "duration": 4670628390,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 740250452,
  "status": "passed"
});
formatter.before({
  "duration": 648718150,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;4",
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
  "name": "user introduces the location \"Aberdeen\" in the search box",
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
  "duration": 1141115367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aberdeen",
      "offset": 30
    }
  ],
  "location": "Stepdefs.introduceLocation(String)"
});
formatter.result({
  "duration": 1062126412,
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
  "duration": 4665459772,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 743263200,
  "status": "passed"
});
formatter.before({
  "duration": 654371379,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;5",
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
  "duration": 1153339675,
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
  "duration": 947382855,
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
  "duration": 4656805774,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 744984422,
  "status": "passed"
});
formatter.before({
  "duration": 658775491,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;6",
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
  "duration": 1172486185,
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
  "duration": 914498165,
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
  "duration": 4690507342,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 736408831,
  "status": "passed"
});
formatter.before({
  "duration": 647954329,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;user-can-see-5-days-weather-forecast-for-a-given-location;;7",
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
  "duration": 1135880621,
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
  "duration": 1081572147,
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
  "duration": 4645389442,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 741412144,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day",
  "description": "",
  "name": "Show 3 hourly weather forecast when user clicks on day",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario_outline"
});
formatter.step({
  "name": "user searched a location in the weather application",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "user clicks on the \u003cday\u003e day",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "user can see 3 hourly forescast for the day selected",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "user clicks on the first day again",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "3 hourly forecast fot the day is hiden",
  "keyword": "Then ",
  "line": 22
});
formatter.examples({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 24,
  "rows": [
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;1",
      "cells": [
        "day"
      ],
      "line": 25
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;2",
      "cells": [
        "first"
      ],
      "line": 26
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;3",
      "cells": [
        "second"
      ],
      "line": 27
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;4",
      "cells": [
        "third"
      ],
      "line": 28
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;5",
      "cells": [
        "forth"
      ],
      "line": 29
    },
    {
      "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;6",
      "cells": [
        "fith"
      ],
      "line": 30
    }
  ]
});
formatter.before({
  "duration": 650903149,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;2",
  "description": "",
  "name": "Show 3 hourly weather forecast when user clicks on day",
  "keyword": "Scenario Outline",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "user searched a location in the weather application",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "user clicks on the first day",
  "keyword": "When ",
  "line": 19,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 3 hourly forescast for the day selected",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "user clicks on the first day again",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "3 hourly forecast fot the day is hiden",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "location": "Stepdefs.userSearchedALocaton()"
});
formatter.result({
  "duration": 2275839390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 192513618,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.userCanSeeHourlyForecast()"
});
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 245118380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 168556513,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.hourlyForecastIsHidden()"
});
formatter.result({
  "duration": 1009938362,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 769135188,
  "status": "passed"
});
formatter.before({
  "duration": 655307128,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;3",
  "description": "",
  "name": "Show 3 hourly weather forecast when user clicks on day",
  "keyword": "Scenario Outline",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "user searched a location in the weather application",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "user clicks on the second day",
  "keyword": "When ",
  "line": 19,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 3 hourly forescast for the day selected",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "user clicks on the first day again",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "3 hourly forecast fot the day is hiden",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "location": "Stepdefs.userSearchedALocaton()"
});
formatter.result({
  "duration": 2275320553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 189813259,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.userCanSeeHourlyForecast()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "duration": 249682086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 189088126,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.hourlyForecastIsHidden()"
});
formatter.result({
  "duration": 1016011292,
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 738490649,
  "status": "passed"
});
formatter.before({
  "duration": 656750254,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;4",
  "description": "",
  "name": "Show 3 hourly weather forecast when user clicks on day",
  "keyword": "Scenario Outline",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "user searched a location in the weather application",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "user clicks on the third day",
  "keyword": "When ",
  "line": 19,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 3 hourly forescast for the day selected",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "user clicks on the first day again",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "3 hourly forecast fot the day is hiden",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "location": "Stepdefs.userSearchedALocaton()"
});
formatter.result({
  "duration": 2305327078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "third",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 183485296,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.userCanSeeHourlyForecast()"
});
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "duration": 256471826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 179232229,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.hourlyForecastIsHidden()"
});
formatter.result({
  "duration": 1012330405,
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 735802869,
  "status": "passed"
});
formatter.before({
  "duration": 662425904,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;5",
  "description": "",
  "name": "Show 3 hourly weather forecast when user clicks on day",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "user searched a location in the weather application",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "user clicks on the forth day",
  "keyword": "When ",
  "line": 19,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 3 hourly forescast for the day selected",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "user clicks on the first day again",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "3 hourly forecast fot the day is hiden",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "location": "Stepdefs.userSearchedALocaton()"
});
formatter.result({
  "duration": 2261242183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forth",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 188410753,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.userCanSeeHourlyForecast()"
});
formatter.embedding("image/png", "embedded20.png");
formatter.result({
  "duration": 245880511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 179525546,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.hourlyForecastIsHidden()"
});
formatter.result({
  "duration": 1013119680,
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 734772474,
  "status": "passed"
});
formatter.before({
  "duration": 651181822,
  "status": "passed"
});
formatter.scenario({
  "id": "user-can-see-5-days-weather-forecast-and-3-hourly-forecast-for-each-day;show-3-hourly-weather-forecast-when-user-clicks-on-day;;6",
  "description": "",
  "name": "Show 3 hourly weather forecast when user clicks on day",
  "keyword": "Scenario Outline",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "user searched a location in the weather application",
  "keyword": "Given ",
  "line": 18
});
formatter.step({
  "name": "user clicks on the fith day",
  "keyword": "When ",
  "line": 19,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user can see 3 hourly forescast for the day selected",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "user clicks on the first day again",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "3 hourly forecast fot the day is hiden",
  "keyword": "Then ",
  "line": 22
});
formatter.match({
  "location": "Stepdefs.userSearchedALocaton()"
});
formatter.result({
  "duration": 2286980220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fith",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 184538545,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.userCanSeeHourlyForecast()"
});
formatter.embedding("image/png", "embedded22.png");
formatter.result({
  "duration": 252874798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 19
    }
  ],
  "location": "Stepdefs.userClicksOnDay(String)"
});
formatter.result({
  "duration": 180410596,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.hourlyForecastIsHidden()"
});
formatter.result({
  "duration": 1015686427,
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 732876279,
  "status": "passed"
});
});