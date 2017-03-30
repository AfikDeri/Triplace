const AMADEUS_API_KEY = "xwR0oWfcONHrrAfMLAaPG1xIfntZg6Rc";

const AMADEUS_URL_BASE = "https://api.sandbox.amadeus.com/v1.2/";
const GET_HOTELS_URL = "hotels/search-circle?apikey=";
const NEAREST_RELEVANT_AIRPORT = "airports/nearest-relevant?apikey=";
const AIRPORT_AUTOCOMPLETE = "airports/autocomplete?apikey="; //Term is Airport Code
const LOCATION_INFORMATION = "location/"; //IATA Code

const GET_INSPIRATION_FLIGHTS = "flights/inspiration-search?apikey="; //Single traveler
const GET_EXTENSIVE_FLIGHTS = "flights/extensive-search?apikey="; //Single traveler
const GET_LOW_FAIR_FLIGHTS = "flights/low-fare-search?apikey="; //Single traveler or affiliate
const GET_AFFILIATE_FLIGHTS = "flights/affiliate-search?apikey= &origin=LON&destination=DUB&departure_date=2017-08-25"; //Single traveler or affiliate

const GET_WEATHER_TO_7_DAYS_URL = "https://twcservice.mybluemix.net/api/weather/v1/geocode/"

export function buildWeatherTo7DaysURL(latitude, longitude) {
  return GET_WEATHER_TO_7_DAYS_URL + latitude + "/" + longitude + "/forecast/daily/7day.json";
}

export function urlencode(str) {
  str = escape(str);
  str = str.replace('+', '%2B');
  str = str.replace('%20', '+');
  str = str.replace('*', '%2A');
  str = str.replace('/', '%2F');
  str = str.replace('@', '%40');
  return str;
}

export function urldecode(str) {
  str = str.replace('+', ' ');
  str = unescape(str);
  return str;
}

export function buildHotelURL(latitude, longitude, radius, check_in, check_out)
{
  return AMADEUS_URL_BASE + GET_HOTELS_URL + AMADEUS_API_KEY + "&latitude=" + latitude + "&longitude=" + longitude + "&radius=" + radius
                      + "&check_in=" + check_in + "&check_out=" + check_out;
}

export function buildNearestRelevantAirportURL(latitude, longitude)
{
  return AMADEUS_URL_BASE + NEAREST_RELEVANT_AIRPORT + AMADEUS_API_KEY + "&latitude=" + latitude + "&longitude=" + longitude;
}

export function buildAirportAutocompleteURL(airportCode)
{
  return AMADEUS_URL_BASE + AIRPORT_AUTOCOMPLETE + AMADEUS_API_KEY + "&term=" + airportCode;
}

export function buildLocationInformationURL(IATACode)
{
  return AMADEUS_URL_BASE + LOCATION_INFORMATION + IATACode + "PAR?apikey=" + AMADEUS_API_KEY;
}

export function buildGetInspirationFlightsURL(origin, destination, departure_date, duration)
{
  return AMADEUS_URL_BASE + GET_INSPIRATION_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}

export function buildGetExtensiveFlightsURL(origin, destination, departure_date, duration)
{
  return AMADEUS_URL_BASE + GET_EXTENSIVE_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}

export function buildGetLowFairFlightsURL(origin, destination, departure_date, duration)
{
  return AMADEUS_URL_BASE + GET_LOW_FAIR_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}

export function buildGetAffiliateFlightsURL(origin, destination, departure_date, duration)
{
  return AMADEUS_URL_BASE + GET_AFFILIATE_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}
