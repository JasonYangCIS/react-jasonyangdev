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
        <Contact/>
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
    }, 150);
 }
  render() {
    return (
      <body id="top" primary-color-id="">
        <Header/>
        <Body/>
        <Footer/>
      </body>
    );
  }
}

export default App