// Info: Test Cases
'use strict';

// Shared Dependencies
var Lib = {};

// Dependencies
Lib.Utils = require('js-helper-utils');
Lib.Debug = require('js-helper-debug')(Lib);
const [ Geo, GeoInput, GeoData ] = require('js-helper-geo')(Lib);


////////////////////////////SIMILUTATIONS//////////////////////////////////////
 // None
///////////////////////////////////////////////////////////////////////////////


/////////////////////////////STAGE SETUP///////////////////////////////////////

// Test Location(1) coordinates (India Gate)
var latitude_degree_1 = 28.612853; // In Degrees
var longitude_degree_1 = 77.231084; // In Degrees

var latitude_radian_1 = 0.49938849323914; // In Radian
var longitude_radian_1 = 1.34793670068431; // In Radian


// Test Location(2) coordinates (Dhaula Kuan)
var latitude_degree_2 = 28.594578; // In Degrees
var longitude_degree_2 = 77.166618; // In Degrees

var latitude_radian_2 = 0.49906953431834; // In Radian
var longitude_radian_2 = 1.34681155672872; // In Radian

///////////////////////////////////////////////////////////////////////////////


/////////////////////////////////TESTS/////////////////////////////////////////

// Test earthRadius() function
Lib.Debug.log( // Output: 6378100
  'earthRadius()',
  Geo.earthRadius()
);


// Test sanitizeLatitude() function
Lib.Debug.log( // Output: 28.6128531
  'sanitizeLatitude(28.612853111111)',
  GeoInput.sanitizeLatitude(28.612853111111)
);

// Test sanitizeLongitude() function
Lib.Debug.log( // Output: 77.231085
  'sanitizeLongitude(77.2310849999999)',
  GeoInput.sanitizeLongitude(77.2310849999999)
);


// Test sanitizeLatitudeRadian() function
Lib.Debug.log( // Output: 0.49938849323914
  'sanitizeLatitudeRadian(0.4993884932391411111111)',
  GeoInput.sanitizeLatitudeRadian(0.4993884932391411111111)
);

// Test sanitizeLongitudeRadian() function
Lib.Debug.log( // Output: 1.34793670068432
  'sanitizeLongitudeRadian(1.3479367006843199999999)',
  GeoInput.sanitizeLongitudeRadian(1.3479367006843199999999)
);



// Test validateLatitude() function
Lib.Debug.log( // Output: false
  'validateLatitude(102.612853)',
  GeoInput.validateLatitude(102.612853)
);

// Test validateLongitude() function
Lib.Debug.log( // Output: false
  'validateLongitude(203.231084)',
  GeoInput.validateLongitude(203.231084)
);


// Test validateLatitudeRadian() function
Lib.Debug.log( // Output: false
  'validateLatitudeRadian(Math.PI/2 + 0.1)',
  GeoInput.validateLatitudeRadian(Math.PI/2 + 0.1)
);

// Test validateLongitudeRadian() function
Lib.Debug.log( // Output: false
  'validateLongitudeRadian(Math.PI + 0.1)',
  GeoInput.validateLongitudeRadian(Math.PI + 0.1)
);



// Convert degrees to radians
var latitude_1_output = Geo.degreesToRadians(latitude_degree_1); // Convert Deciaml into radians
var longitude_1_output = Geo.degreesToRadians(longitude_degree_1); // Convert Deciaml into radians
var latitude_2_output = Geo.degreesToRadians(latitude_degree_2); // Convert Deciaml into radians
var longitude_2_output = Geo.degreesToRadians(longitude_degree_2); // Convert Deciaml into radians
Lib.Debug.log(
  'degreesToRadians: latitude_1_output, longitude_1_output, latitude_2_output, longitude_2_output:',
  `${latitude_1_output}, ${longitude_1_output} | ${latitude_2_output}, ${longitude_2_output}`
)


// Convert radians to degrees
latitude_1_output = Geo.radiansToDegrees(latitude_radian_1); // Convert Radians into degrees
longitude_1_output = Geo.radiansToDegrees(longitude_radian_1); // Convert Radians into degrees
latitude_2_output = Geo.radiansToDegrees(latitude_radian_2); // Convert Radians into degrees
longitude_2_output = Geo.radiansToDegrees(longitude_radian_2); // Convert Radians into degrees
Lib.Debug.log(
  'radiansToDegrees: latitude_1_output, longitude_1_output, latitude_2_output, longitude_2_output:',
  `${latitude_1_output}, ${longitude_1_output} | ${latitude_2_output}, ${longitude_2_output}`
)


// Test .calculateDistanceBetweenGeoCoordinates() function
Lib.Debug.log( // Output: 6620.725 meters or 6.62 KM
  'calculateDistanceBetweenGeoCoordinates(....)',
  Geo.calculateDistanceBetweenGeoCoordinates(latitude_radian_1,longitude_radian_1,latitude_radian_2,longitude_radian_2) // Accept values only in radians
);


// Meters-Miles-Meters Conversion
Lib.Debug.log(
  'metersToMiles(1000)',
  Geo.metersToMiles(1000)
);
Lib.Debug.log(
  'milesToMeters(0.621)',
  Geo.milesToMeters(0.621)
);


// Meters-KM-Meters Conversion
Lib.Debug.log(
  'metersToKm(1000)',
  Geo.metersToKm(1000)
);
Lib.Debug.log(
  'kmToMeters(1)',
  Geo.kmToMeters(1)
);

///////////////////////////////////////////////////////////////////////////////
