import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    constructor() {
    super();
    
    this.state = {
      loading: true
    };
  }
  componentDidMount(){
    this.handleClick();
  }
  handleClick() {
    var colorArr = [
      "255, 152, 0",    //Orange
      "102, 187, 106",  //Green
      "176, 190, 197",  //Silver
      "255, 138, 128",  //Pink
      "100, 181, 246",  //Blue
      "154, 0, 7",      //Burgundy
      "244, 67, 54",    //Red
      "0, 188, 212",    //Teal
      "103, 58, 183",   //Purple
      "96, 125, 139"    //Steel
    ];

    var randomNum = Math.round(Math.random()*9);
    var randomColor = colorArr[randomNum];

    // Set ID so we can check if page is currently using that color, if it is re-run the randomizer
    var bodyElement = document.getElementById('top')
    bodyElement.setAttribute("primary-color-id", randomNum);

    while ( bodyElement.getAttribute("primary-color-id") == randomNum ) {
      randomNum = Math.round(Math.random()*9);
      randomColor = colorArr[randomNum];
    }

    var setStyle = "";
    var el = "";

    /* change background colors */
    setStyle = "background-color: rgba(" + randomColor + ", 1 )";
    el = document.querySelectorAll("header#header, .myskillicons .caption, footer#footer");
    for (var i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }

    /* change border top color */
    setStyle = "border-top: 2px solid rgba(" + randomColor + ", 0.5 )";
    el = document.querySelectorAll("#main > section");
    for (var i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }

    /* change border bottom color */
    setStyle = "border-bottom: 2px solid rgba(" + randomColor + ", 0.5 )";
    el = document.querySelectorAll(".experience-card h5");
    for (var i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }
  }

  render() {
    return(
      <header id="header">
        <div className="image avatar"><a href="javascript:void(0);" onClick={() => this.handleClick()}><img src={"images/avatar.jpg"}how alt="" /></a></div>
        <h1>i am <strong>{"<"}Jason/{">"}</strong> motivated<br />
          young software engineer, looking to learn, grow and experiment in all aspects of web development.</h1>
      </header>
     )
  }
}

class Introduction extends Component {
  render() {
    return(
      <section id="one">
        <header className="major">
          <h2>A little about myself</h2>
        </header>
        <p>I graduated Cal Poly Pomona in 2015 chasing my dreams of excelling in my field of web development. After a web development course in college, I knew that this was the career that I had to pursue. My love for the web stems all the way down to the css, which really allows me to put my imagination and creativity to life (kind of).</p>
      </section>
    )
  }
}

class Skills extends Component {
  render() {
    return(
     <section id="three">
       <header className="major">
        <h2>My Skills</h2>
       </header>
       <div className="myskillicons"><img src="images/icons/html.png"/><span className="caption">HTML</span></div>
       <div className="myskillicons"><img src="images/icons/css.png"/><span className="caption">CSS</span></div>
       <div className="myskillicons"><img src="images/icons/javascript.png"/><span className="caption">Javascript</span></div>             
       <div className="myskillicons"><img src="images/icons/php.png"/><span className="caption">PHP</span></div>
       <div className="myskillicons"><img src="images/icons/responsive.png"/><span className="caption">RWD</span></div>
       <div className="myskillicons"><img src="images/icons/java.png"/><span className="caption">Java</span></div>             
       <div className="myskillicons"><img src="images/icons/sql.png"/><span className="caption">SQL</span></div>
       <div className="myskillicons"><img src="images/icons/github.png"/><span className="caption">GitHub</span></div>          
       <div className="myskillicons"><img src="images/icons/aspx.png"/><span className="caption">ASP.Net</span></div>
       <div className="myskillicons"><img src="images/icons/vb.png"/><span className="caption">VB</span></div>
       <div className="myskillicons"><img src="images/icons/wordpress.png"/><span className="caption">Wordpress</span></div>
       <div className="myskillicons"><img src="images/icons/magento.png"/><span className="caption">Magento</span></div>
       <div className="myskillicons"><img src="images/icons/photoshop.png"/><span className="caption">Photoshop</span></div>
       <div className="myskillicons"><img src="images/icons/jira.png"/><span className="caption">Jira</span></div>
       <div className="myskillicons"><img src="images/icons/slack.png"/><span className="caption">Slack</span></div>
       <div className="myskillicons"><img src="images/icons/jenkins.png"/><span className="caption">Jenkins</span></div>
       <div className="myskillicons"><img src="images/icons/liquidplanner.png"/><span className="caption">Liquid Planner</span></div>
       <div className="myskillicons"><img src="images/icons/terminal.png"/><span className="caption">Terminal</span></div>

     </section>
     )
  }
}

class Experience extends Component {
  render() {
    return(
       <section id="four">
          <header className="major">
            <h2 >Experience</h2>
          </header>
          <div className="experience-card">
            <h4>Ready Artwork</h4>
            <h5>July 2015 - Present | Web Developer</h5>
            <p className="experience">
              <i className="fa fa-angle-right"></i> Developed numerous unique custom themes for WordPress and Magento.<br/>
              <i className="fa fa-angle-right"></i> Worked with designers, project managers, sales and other developers to optimize research and development process.<br/>
              <i className="fa fa-angle-right"></i> Manage MySQL databases using PHPmyadmin.<br/>
              <i className="fa fa-angle-right"></i> Setup domain, hosting and deployed various websites via SSH, FTP and different cPanels.<br/>
              <i className="fa fa-angle-right"></i> Work with local, dev, staging and live environments.<br/>
              <i className="fa fa-angle-right"></i> Managed many different repositories and source code using Git, Source Tree, Bit Bucket and JIRA.<br/>
              <i className="fa fa-angle-right"></i> Worked closely with Adobe’s HelpX team to rebuild their support pages under Scrum methodology using Sightly, JS, HTML, CSS and light Java. 
            </p>
          </div>

          <div className="experience-card">
            <h4>Cutlab Hair Studio</h4>
            <h5>Jan 2015 - April 2015 | Freelance Developer</h5>
            <p className="experience">
              <i className="fa fa-angle-right"></i> Completely redeveloped the website into a single page website aimed towards serving almost all information on homepage.<br/>
              <i className="fa fa-angle-right"></i> Redeveloped with responsive design.<br/>
              <i className="fa fa-angle-right"></i> Responsible for all of the development of the site.<br/>
              <i className="fa fa-angle-right"></i> Setup meetings with client and discussed content and ideas.
            </p>
          </div>

          <div className="experience-card">
            <h4>SpiritClips(Feeln) from Hallmark</h4>
            <h5>Dec 2013 - Mar 2014 | Tech Intern</h5>
            <p className="experience"> 
              <i className="fa fa-angle-right"></i> Responsible for testing and quality assurance of all SpiritClips applications which includes xBox, Roku and various platforms of iOS and Android.<br/>
              <i className="fa fa-angle-right"></i> Managed source code with GitHub.<br/>
              <i className="fa fa-angle-right"></i> Assisted in the development of Samsung TV.<br/>
              <i className="fa fa-angle-right"></i> Assisted the content production department with updating the movie information.<br/>
              <i className="fa fa-angle-right"></i> Provided assistance with the analysis of competitive market research.
            </p>
          </div>

        </section>
    )
  }
}

class Facts extends Component {
  render() {
    return (
      <section id="five">
        <header className="major">
          <h2>Facts</h2>
        </header>           

        <div className="facts">
          <i className="fa fa-cutlery"></i> Favorite Foods: Korean &amp; Italian <br/>               
          <i className="fa fa-bicycle"></i> Hobbies: Road Biking <br/>
          <i className="fa fa-coffee"></i> Loves: Coffee <br/>
          <i className="fa fa-bed"></i> Hates: Naps <br/>
        </div>
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