import React, { Component } from 'react';
import './css/App.css';
import main from './js/main'
import contentful from './js/contentful'

class Header extends Component {
    constructor() {
    super();
    
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    contentful.headerBuilder()
  }

  render() {
    return(
      <header id="header">
        <div className="image avatar"><a href onClick={() => main.handleClick()}></a></div>
      </header>
     )
  }
}

class Introduction extends Component {

  componentDidMount() {
    contentful.introductionBuilder()
  }

  render() {
    return(
      <section id="one"></section>
    )
  }
}

class Skills extends Component {

  componentDidMount() {
    contentful.mySkillsBuilder()
  }

  render() {
    return(
     <section id="three"></section>
    )
  }
}

class Experience extends Component {
  componentDidMount() {
    contentful.experienceBuilder()
  }

  render() {
    return(
       <section id="four"></section>
    )
  }
}

class Facts extends Component {
  componentDidMount() {
    contentful.factsBuilder()
  }

  render() {
    return (
      <section id="five"></section>
    )
  }
}

class FavoriteBuilds extends Component {
  componentDidMount() {
    contentful.favoriteSitesBuilder()
  }

  render() {
    return(
      <section id="favorite-builds"></section>
    )
  }
}

class CodeSnippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isLoaded: false,
      // items: []
    };
  }

  componentDidMount() {
    contentful.codeSnippetsBuilder()
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

            let dayNum = date.getDate()+1;
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
            let iconUrl = 'https://openweathermap.org/img/w/' + icon + '.png';
            
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
          weatherBuilder: weatherBuilder
        })

        
      },
      (error) => {
        console.log('Error in weather API' + error);
      }
    )
  }

  render() {

    const { weatherBuilder, city } = this.state;
    function createMarkup() { return {__html: weatherBuilder}; };

    return (
      <section id="code-snippets">
        <div id="weather-container">
          <h5 className="location">{city}</h5>
          <ul dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </section>
    );
  }
}

class Contact extends Component {
  componentDidMount() {
    contentful.contactBuilder()
  }

  render() {
    return(
     <section id="six"></section>
    )
  }
}

class Footer extends Component {
  componentDidMount() {
    contentful.footerBuilder()
  }

  render () {
    return (
      <footer id="footer"></footer>
    )
  }
}

class Body extends Component {
  render() {
    return(
      <div id="main">
        <Introduction/>
        <Skills/>
        <Experience/>
        <Facts/>
        <FavoriteBuilds/>
        <CodeSnippets/>
        <Contact/>
      </div>
    )
  }
}

class Loader extends Component {
  render () {
    return (
      <div id="loading-container">
        <div className="loading-icon">
          <div className="animated-box"></div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
 }
 handleLoad() {
    setTimeout(function() {
      main.handleClick(); 
      var elem = document.getElementById("loading-container");
      elem.classList.add("hidden");
    }, 1000);
 }
  render() {
    return (
      <body id="top" primary-color-id="">
        <Loader/>
        <Header/>
        <Body/>
        <Footer/>
      </body>
    );
  }
}

export default App