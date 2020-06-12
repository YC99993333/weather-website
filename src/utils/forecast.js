const request = require("postman-request");

const foreCast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=cda72b99f00c74fa9f3342b0f5aed074&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees. Visibility is " + body.current.visibility
      );
    }
  });
};

module.exports = foreCast;