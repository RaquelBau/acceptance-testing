package weather.util;

import java.util.HashMap;
import java.util.Map;

public class MapperUtil {
	public static Map<String, String> TESTID = new HashMap<String, String>();
	
	static{
		TESTID.put("first", "day-1");
		TESTID.put("second", "day-2");
		TESTID.put("third", "day-3");
		TESTID.put("forth", "day-4");
		TESTID.put("fith", "day-5");
		TESTID.put("first day hourly", "hour-1");
		TESTID.put("second day hourly", "hour-2");
		TESTID.put("third day hourly", "hour-3");
		TESTID.put("forth day hourly", "hour-4");
		TESTID.put("fith day hourly", "hour-5");
		TESTID.put("weather condition", "description");
		TESTID.put("wind speed", "speed");
		TESTID.put("wind direction", "direction");
		TESTID.put("rainfall", "rainfall");
		TESTID.put("maximum temperature", "maximum");
		TESTID.put("minimum temperature", "minimum");
		
	}
}
