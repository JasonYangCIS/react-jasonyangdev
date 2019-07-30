import React, { Component } from 'react';
import Loading from '../../components/loading/loading';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weatherBuilder: '',
      loading: true
    };
  }

  componentDidMount() {

    fetch('https://api.openweathermap.org/data/2.5/forecast?id=5368381&appid=fdabb40eee7faa4f603ded0bc6f0fcbd')
    .then(res => res.json())
    .then(
      (result) => {
        var weatherBuilder = '';
        let counter = 1;
        result.list.forEach(function(value, index) {
          if ( ( (index + 1) % 8 === 0 || index === 0) && counter <= 5 ) {
            counter++;
            // Date
            let date = new Date(value.dt*1000);
            let year = date.getFullYear();

            let dayNum = date.getDate();
            let weekday = new Array(7);
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tues";
            weekday[3] = "Wed";
            weekday[4] = "Thurs";
            weekday[5] = "Fri";
            weekday[6] = "Sat";
            let day = weekday[date.getDay()];

            var month = date.getMonth()+1;

            // Kelvin to Fahrenheit
            let temperature = Math.ceil(value.main.temp * 9/5 - 459.67);

            // Weather
            let description = value.weather[0].description;
            let icon = value.weather[0].icon;
            
            weatherBuilder += '<li>' +
                                '<i class="owi owi-' + icon + '"></i>' +
                                '<span class="degrees">' + temperature + '°F </span>' +
                                '<span class="day">' + day + '</span>' +
                                '<span class="date">' + month + '/' + dayNum + '/' + year + '</span>' +
                                '<span class="weather-description">' +  description + '</span>' +
                              '</li>';
          }
        })

        this.setState({
          city: result.city.name,
          weatherBuilder: weatherBuilder,
          loading: false
        })

      },
      (error) => {
        this.setState({
          city: 'API out of memory.',
          weatherBuilder: 'Error in weather API' + error,
          loading: false
        })
      }
    )
  }
  
  render() {
    const { weatherBuilder, city, loading } = this.state;
    function createMarkup() { return {__html: weatherBuilder}; };
    if(loading) {
      return (
        <Loading/>
        )
    }
    
    return (
      <div>
        <h5>Weather: {city}</h5>
        <ul dangerouslySetInnerHTML={createMarkup()} />
      </div>
    );
  }
}

export default Weather;