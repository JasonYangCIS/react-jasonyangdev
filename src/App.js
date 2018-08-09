import React, { Component } from 'react';
import './css/App.css';
import main       from './js/main'
import contentful from './js/components/contentful'
import Tabs       from './js/components/tabs';
import Movies     from './js/components/movies';
import Weather    from './js/components/weather';
import Giphy      from './js/components/giphy';

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

  componentDidMount() {
    contentful.codeSnippetsBuilder();
  }

  render() {
    return (
      <section id="code-snippets">
       <div>
         <Tabs>

          <div label="Giphy Search">
            <div id="giphy-container">
              <Giphy/>
            </div>
          </div>

          <div label="LA Weather">
            <div id="weather-container">
              <Weather/>
            </div>
          </div>

          <div label="Movies API">
            <div id="movies-container">
              <Movies/>
            </div>
          </div>

        </Tabs>
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