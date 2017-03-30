export const AMADEUS_API_KEY = "xwR0oWfcONHrrAfMLAaPG1xIfntZg6Rc";

export const AMADEUS_URL_BASE = "https://api.sandbox.amadeus.com/v1.2/";
export const GET_HOTELS_URL = "hotels/search-circle?apikey=";
export const NEAREST_RELEVANT_AIRPORT = "airports/nearest-relevant?apikey=";
export const AIRPORT_AUTOCOMPLETE = "airports/autocomplete?apikey="; //Term is Airport Code
export const LOCATION_INFORMATION = "location/"; //IATA Code

export const GET_INSPIRATION_FLIGHTS = "flights/inspiration-search?apikey="; //Single traveler
export const GET_EXTENSIVE_FLIGHTS = "flights/extensive-search?apikey="; //Single traveler
export const GET_LOW_FAIR_FLIGHTS = "flights/low-fare-search?apikey="; //Single traveler or affiliate
export const GET_AFFILIATE_FLIGHTS = "flights/affiliate-search?apikey= &origin=LON&destination=DUB&departure_date=2017-08-25"; //Single traveler or affiliate

function urlencode(str) {
str = escape(str);
str = str.replace('+', '%2B');
str = str.replace('%20', '+');
str = str.replace('*', '%2A');
str = str.replace('/', '%2F');
str = str.replace('@', '%40');
return str;
}

function urldecode(str) {
str = str.replace('+', ' ');
str = unescape(str);
return str;
}

function buildHotelURL(var latitude, var longitude, var radius, var check_in, var check_out)
{
  return AMADEUS_URL_BASE + GET_HOTELS_URL + AMADEUS_API_KEY + "&latitude=" + latitude + "&longitude=" + longitude + "&radius=" + radius
                      + "&check_in=" + check_in + "&check_out=" + check_out;
}

function buildNearestRelevantAirportURL(var latitude, var longitude)
{
  return AMADEUS_URL_BASE + NEAREST_RELEVANT_AIRPORT + AMADEUS_API_KEY + "&latitude=" + latitude + "&longitude=" + longitude;
}

function buildAirportAutocompleteURL(var airportCode)
{
  return AMADEUS_URL_BASE + AIRPORT_AUTOCOMPLETE + AMADEUS_API_KEY + "&term=" + airportCode;
}

function buildLocationInformationURL(var IATACode)
{
  return AMADEUS_URL_BASE + LOCATION_INFORMATION + IATACode + "PAR?apikey=" + AMADEUS_API_KEY;
}

function buildGetInspirationFlightsURL(var origin, var destination, var departure_date, var duration)
{
  return AMADEUS_URL_BASE + GET_INSPIRATION_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}

function buildGetExtensiveFlightsURL(var origin, var destination, var departure_date, var duration)
{
  return AMADEUS_URL_BASE + GET_EXTENSIVE_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}

function buildGetLowFairFlightsURL(var origin, var destination, var departure_date, var duration)
{
  return AMADEUS_URL_BASE + GET_LOW_FAIR_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}

function buildGetInspirationFlightsURL(var origin, var destination, var departure_date, var duration)
{
  return AMADEUS_URL_BASE + GET_INSPIRATION_FLIGHTS + AMADEUS_API_KEY + "&origin=" + origin + "&destination=" + destination
                        + "&departure_date=" + departure_date + "&duration=" + duration;
}
