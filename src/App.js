import React, { Component } from 'react';
import './css/App.css';
import main           from './js/main'
import Contentful     from './components/contentful/contentful'
import Tabs           from './components/tabs/tabs';
import Movies         from './components/movies/movies';
import Weather        from './components/weather/weather';
import Giphy          from './components/giphy/giphy';
import BillSplitter   from './components/bill-splitter/bill-splitter';

class Header extends Component {
    constructor() {
    super();
    
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    Contentful.headerBuilder()
  }

  render() {
    return(
      <header id="header">
        <div className="image avatar"><a href={"javascript:void(0);"} onClick={() => main.handleClick()}></a></div>
        <span className="material-bar"></span>
      </header>
     )
  }
}

class Introduction extends Component {

  componentDidMount() {
    Contentful.introductionBuilder()
  }

  render() {
    return(
      <section id="one"></section>
    )
  }
}

class Skills extends Component {

  componentDidMount() {
    Contentful.mySkillsBuilder()
  }

  render() {
    return(
     <section id="three"></section>
    )
  }
}

class Experience extends Component {
  componentDidMount() {
    Contentful.experienceBuilder()
  }

  render() {
    return(
       <section id="four"></section>
    )
  }
}

class Facts extends Component {
  componentDidMount() {
    Contentful.factsBuilder()
  }

  render() {
    return (
      <section id="five"></section>
    )
  }
}

class FavoriteBuilds extends Component {
  componentDidMount() {
    Contentful.favoriteSitesBuilder()
  }

  render() {
    return(
      <section id="favorite-builds"></section>
    )
  }
}

class CodeSnippets extends Component {

  componentDidMount() {
    Contentful.codeSnippetsBuilder();
  }

  render() {
    return (
      <section id="code-snippets">
       <div>
         <Tabs>
          
          <div label="Bill Splitter">
            <div id="bill-splitter-container">
              <BillSplitter/>
            </div>
          </div>

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
    Contentful.contactBuilder()
  }

  render() {
    return(
     <section id="six"></section>
    )
  }
}

class Footer extends Component {
  componentDidMount() {
    Contentful.footerBuilder()
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
      var elem = document.getElementById("loading-container");
      elem.classList.add("hidden");
    }, 1000);
 }
  render() {
    return (
      <div id="top" primary-color-id="">
        <Loader/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App