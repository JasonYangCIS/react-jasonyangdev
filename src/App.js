import React, { Component } from 'react';
import './css/App.css';
import Contentful from './components/contentful/contentful'
import Tabs from './components/tabs/tabs';
import Weather from './components/weather/weather';
import Giphy from './components/giphy/giphy';
import BillSplitter from './components/bill-splitter/bill-splitter';

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

  handleClick() {
    var colorArr = [
      "255, 152, 0",    //Orange
      "102, 187, 106",  //Green
      "100, 124, 100",  //Army
      "176, 190, 197",  //Silver
      "255, 138, 128",  //Pink
      "71, 172, 255",   //Blue
      "52, 152, 219",   //Blue (Peterriver)
      "44, 62, 80",     //Midnight Blue
      "26, 188, 156",   //Turquoise
      "154, 0, 7",      //Burgundy
      "244, 67, 54",    //Red
      "0, 188, 212",    //Teal
      "103, 58, 183",   //Purple
      "96, 125, 139"    //Steel
    ];

    var randomNum = Math.round(Math.random() * 9);
    var randomColor = colorArr[randomNum];

    // Set ID so we can check if page is currently using that color, if it is re-run the randomizer
    var bodyElement = document.getElementById('top')
    bodyElement.setAttribute("primary-color-id", randomNum);

    while (bodyElement.getAttribute("primary-color-id") === randomNum) {
      randomNum = Math.round(Math.random() * 9);
      randomColor = colorArr[randomNum];
    }

    var setStyle = "";
    var el = "";
    var i = 0;

    /* change background colors */
    setStyle = "background-color: rgba(" + randomColor + ", 0.85 )";
    el = document.querySelectorAll("header#header, .myskillicons .caption, footer#footer, .material-bar");
    for (i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }

    /* change border top color */
    setStyle = "border-top: 2px solid rgba(" + randomColor + ", 0.5 )";
    el = document.querySelectorAll("#main > section");
    for (i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }

    /* change border bottom color */
    setStyle = "border-bottom: 2px solid rgba(" + randomColor + ", 0.5 )";
    el = document.querySelectorAll(".experience-card h5");
    for (i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }

    /* border color for tabs */
    setStyle = "border-color: rgba(" + randomColor + ", 0.5 )";
    el = document.querySelectorAll(".tabs .tab-list .tab-list-item");
    for (i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }

  }

  render() {
    return (
      <header id="header">
        <div className="image avatar"><a href={"javascript:void(0);"} onClick={() => this.handleClick()}></a></div>
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
    return (
      <section id="one"></section>
    )
  }
}

class Skills extends Component {
  componentDidMount() {
    Contentful.mySkillsBuilder()
  }

  render() {
    return (
      <section id="three"></section>
    )
  }
}

class Experience extends Component {
  componentDidMount() {
    Contentful.experienceBuilder()
  }

  render() {
    return (
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
    return (
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
                <BillSplitter />
              </div>
            </div>

            <div label="Giphy Search">
              <div id="giphy-container">
                <Giphy />
              </div>
            </div>

            <div label="LA Weather">
              <div id="weather-container">
                <Weather />
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
    return (
      <section id="six"></section>
    )
  }
}

class Footer extends Component {
  componentDidMount() {
    Contentful.footerBuilder()
  }

  render() {
    return (
      <footer id="footer"></footer>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <div id="main">
        <Introduction />
        <Experience />
        <Skills />
        <Facts />
        <FavoriteBuilds />
        <CodeSnippets />
        <Contact />
      </div>
    )
  }
}

class Loader extends Component {
  render() {
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
    this.addEventListeners();
  }

  handleLoad() {
    setTimeout(function () {
      var elem = document.getElementById("loading-container");
      elem.classList.add("hidden");
    }, 250);

  }

  addEventListeners = () => {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('load', this.animateSection);
    window.addEventListener('load', this.vantaHeaderBackground);
    window.addEventListener('scroll', this.animateSection, true);
  }

  removeEventListeners = () => {
    window.removeEventListener('scroll', this.animateSection, true);
  }

  animateSection = () => {
    let sectionEles = document.querySelectorAll('#main section');
    let animatedEles = document.querySelectorAll('#main section.fade-in');

    for (var i = 0; i < sectionEles.length; i++) {
      if (this.isAnyPartOfElementInViewport(sectionEles[i])) {
        sectionEles[i].classList.add('fade-in');
      }
    }

    // remove scroll to event listeners
    if (sectionEles.length === animatedEles.length) {
      this.removeEventListeners();
    }

  }

  vantaHeaderBackground = () => {
    setTimeout(function () {
      window.VANTA.DOTS({
        el: "#header",
        color: 0xd27e36,
        color2: 0xc5620c,
        size: 5.00,
        spacing: 20.00
      })
    }, 250);
  }

  isAnyPartOfElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  };

  render() {
    return (
      <div id="top" primary-color-id="">
        <Loader />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App