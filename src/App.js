import React, { Component } from 'react';
import './App.css';
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
  render() {
    return(
      <section id="favorite-builds">
        <header className="major">
          <h2>Favorite Website Projects</h2>
          <ul className="favorite-builds-list">
            <li><a href="https://helpx.adobe.com/photoshop/user-guide.html" target="_blank" rel="noopener noreferrer nofollow">helpx.adobe.com/photoshop/user-guide.html</a></li>
            <li><a href="https://helpx.adobe.com/support/photoshop.html" target="_blank" rel="noopener noreferrer nofollow">helpx.adobe.com/support/photoshop.html</a></li>
            <li><a href="https://www.laviewsecurity.com" target="_blank" rel="noopener noreferrer nofollow">www.laviewsecurity.com</a></li>
            <li><a href="http://www.amp-tires.com/" target="_blank" rel="noopener noreferrer nofollow">www.amp-tires.com</a></li>
            <li><a href="http://www.body-armor4x4.com/" target="_blank" rel="noopener noreferrer nofollow">www.body-armor4x4.com</a></li>
            <li><a href="https://www.readyartwork.com/" target="_blank" rel="noopener noreferrer nofollow">www.readyartwork.com</a></li>
          </ul> 
        </header>
        <p></p>
      </section>
    )
  }
}

class Contact extends Component {
  render() {
    return(
     <section id="six">
       <header className="major">
        <h2 >Contact</h2>
       </header>
       <div className="icon fa-envelope-o"> &nbsp; <a href="mailto:jasonyangcis@gmail.com">jasonyangcis@gmail.com</a></div>
     </section>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      <footer id="footer">
        <ul className="icons">
          <li><a href="https://github.com/JasonYangCIS" className="icon fa-github"><span className="label">Github</span></a></li>
          <li><a href="https://www.linkedin.com/in/jasonyangcis" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
          <li><a href="https://www.google.com/+JasonYangDev" className="icon fa-google-plus"><span className="label">LinkedIn</span></a></li>
          <li><a href="https://www.facebook.com/jason.yang.568847" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="http://instagram.com/jas0n.jpg" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>

        <ul className="copyright">
          <li>&copy; All rights reserved</li>
          <li>Developed with <i className="fa fa-coffee"></i> and <i className="fa fa-heart"></i> by: Jason Yang</li>
        </ul>

      </footer>
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