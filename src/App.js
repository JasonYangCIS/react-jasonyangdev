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

    while ( bodyElement.getAttribute("primary-color-id") === randomNum ) {
      randomNum = Math.round(Math.random()*9);
      randomColor = colorArr[randomNum];
    }

    var setStyle = "";
    var el = "";
    var i = 0;

    /* change background colors */
    setStyle = "background-color: rgba(" + randomColor + ", 1 )";
    el = document.querySelectorAll("header#header, .myskillicons .caption, footer#footer");
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
  }

  render() {
    return(
      <header id="header">
        <div className="image avatar"><a href onClick={() => this.handleClick()}><img src={"images/avatar.jpg"}how alt="" /></a></div>
        <h1>i am <strong>{"<"}Jason/{">"}</strong> motivated<br />
           experienced software engineer, looking to learn, grow and experiment in all aspects of web development.</h1>
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
        <p>I graduated Cal Poly Pomona in 2015 chasing my dreams of excelling in my field of web development. After a web development course in college, I knew that this was the career that I had to pursue. My love for the web stems all the way down to the css and the semi-colon, which really allows me to put my creativity and problem solving skills to life (kind of).</p>
      </section>
    )
  }
}

class Skills extends Component {
  render() {
    return(
     <section id="three">
       <header className="major">
        <h2>My skills</h2>
       </header>
       <div className="myskillicons"><img src="images/icons/html.png" alt="html icon"/><span className="caption">HTML</span></div>
       <div className="myskillicons"><img src="images/icons/css.png" alt="css icon"/><span className="caption">CSS</span></div>
       <div className="myskillicons"><img src="images/icons/javascript.png" alt="javascript icon"/><span className="caption">Javascript</span></div>             
       <div className="myskillicons"><img src="images/icons/php.png" alt="php icon"/><span className="caption">PHP</span></div>
       <div className="myskillicons"><img src="images/icons/responsive.png" alt="responsive icon"/><span className="caption">RWD</span></div>
       <div className="myskillicons"><img src="images/icons/java.png" alt="java icon"/><span className="caption">Java</span></div>             
       <div className="myskillicons"><img src="images/icons/sql.png" alt="sql icon"/><span className="caption">SQL</span></div>
       <div className="myskillicons"><img src="images/icons/github.png" alt="github icon"/><span className="caption">GitHub</span></div>          
       <div className="myskillicons"><img src="images/icons/aspx.png" alt="aspx icon"/><span className="caption">ASP.Net</span></div>
       <div className="myskillicons"><img src="images/icons/vb.png" alt="vb icon"/><span className="caption">VB</span></div>
       <div className="myskillicons"><img src="images/icons/wordpress.png" alt="wordpress icon"/><span className="caption">Wordpress</span></div>
       <div className="myskillicons"><img src="images/icons/magento.png" alt="magento icon"/><span className="caption">Magento</span></div>
       <div className="myskillicons"><img src="images/icons/aem.png" alt="aem icon"/><span className="caption">AEM6.3</span></div>
       <div className="myskillicons"><img src="images/icons/cq.png" alt="cq icon"/><span className="caption">CQ5</span></div>
       <div className="myskillicons"><img src="images/icons/photoshop.png" alt="photoshop icon"/><span className="caption">Photoshop</span></div>
       <div className="myskillicons"><img src="images/icons/jira.png" alt="jira icon"/><span className="caption">Jira</span></div>
       <div className="myskillicons"><img src="images/icons/slack.png" alt="slack icon"/><span className="caption">Slack</span></div>
       <div className="myskillicons"><img src="images/icons/liquidplanner.png" alt="liquidplanner icon"/><span className="caption">Liquid Planner</span></div>
       <div className="myskillicons"><img src="images/icons/react.png" alt="react icon"/><span className="caption">React</span></div>
       <div className="myskillicons"><img src="images/icons/terminal.png" alt="terminal icon"/><span className="caption">Terminal</span></div>

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
              <i className="fa fa-angle-right"></i> Developed pixel perfect responsive websites using PSDs given from designers and expedited the build on WordPress and Magento CMS platforms using HTML, SCSS, PHP, jQuery, AJAX, and JSON data.<br/>
              <i className="fa fa-angle-right"></i> Worked with designers, project managers, sales and other developers to optimize research and development process.<br/>
              <i className="fa fa-angle-right"></i> Setup domain, hosting and deployed numerous websites using SSH, FTP and cPanel.<br/>
              <i className="fa fa-angle-right"></i> Managed many different repositories and source code using Git, Source Tree and Bit Bucket.<br/>
              <i className="fa fa-angle-right"></i> Worked closely with Adobe’s HelpX team to rebuild their support pages under SCRUM methodology using Sightly, JS, AJAX, JSON, HTML, SASS and light Java.<br/>
              <i className="fa fa-angle-right"></i> Work with local, dev, staging and live environments.<br/>
              <i className="fa fa-angle-right"></i> Transformed over <u>50</u> custom different designs into fully responsive functional websites and launched them into production (too many to list).
            </p>
          </div>

          <div className="experience-card">
            <h4>Freelance</h4>
            <h5>Jan 2015 - Present | Developer</h5>
            <p className="experience">
              <span><a href="http://surf.live" target="_blank" rel="noopener noreferrer nofollow"><strong>surf.live</strong></a> - 2018</span><br/>
              <i className="fa fa-angle-right"></i> Worked along side web designers and VP of engineering to deliver a website in an extremely tight deadline.<br/>
              <i className="fa fa-angle-right"></i> Responsible for debugging, building different sections of the site as well as launching the site into production.<br/>
              <i className="fa fa-angle-right"></i> Built as a codepen project using PUG(jade), SCSS and JS.<br/>
              <br/>

              <span><a href="http://www.jlsmartbets.com" target="_blank" rel="noopener noreferrer nofollow"><strong>www.jlsmartbets.com</strong></a> - 2018</span><br/>
              <i className="fa fa-angle-right"></i> Leveraged WordPress and WooCommerce to build a custom site that has a shopping cart and handles restricting content via memberships.<br/>
              <i className="fa fa-angle-right"></i> Worked closely with a designer and client to meet goals and expectations.<br/>
              <i className="fa fa-angle-right"></i> Built as a custom wordpress theme using HTML, SCSS, PHP and jQuery<br/>
              <br/>

              <span><a href="javascript:void(0);"><strong>www.jasonyangdev.com</strong></a> - 2017</span><br/>
              <i className="fa fa-angle-right"></i> Rebuilt my old web portfolio site into a website running off of React to gain more experience with this library.<br/>
              <i className="fa fa-angle-right"></i> Applied materialistic design philosophies and add some neat features (click on my face or refresh the page).<br/>
              <i className="fa fa-angle-right"></i> Built this portfolio using HTML, SCSS and React<br/>
              <br/>

              <span><a href="http://www.cutlabhairstudio.com" target="_blank" rel="noopener noreferrer nofollow"><strong>www.cutlabhairstudio.com</strong></a> - 2015</span><br/>
              <i className="fa fa-angle-right"></i> Completely redeveloped the website into a response website aimed towards serving almost all information on homepage.<br/>
              <i className="fa fa-angle-right"></i> Responsible for full of the development of the site along with design and content strategies.<br/>
              <i className="fa fa-angle-right"></i> Built as a custom wordpress theme using HTML, SCSS, PHP and jQuery<br/>
              <br/>

            </p>
          </div>

          <div className="experience-card">
            <h4>SpiritClips(Feeln) from Hallmark</h4>
            <h5>Dec 2013 - Mar 2014 | Tech Intern</h5>
            <p className="experience"> 
              <i className="fa fa-angle-right"></i> Responsible for testing and quality assurance of all SpiritClips applications which includes xBox, Roku and various platforms of iOS and Android.<br/>
              <i className="fa fa-angle-right"></i> Managed source code with GitHub.<br/>
              <i className="fa fa-angle-right"></i> Assisted in the development of the android app for Samsung TV.<br/>
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
          <i className="fa fa-cutlery"></i> Favorite Foods: KBBQ, Pasta &amp; Sushi <br/>               
          <i className="fa fa-bicycle"></i> Hobbies: Road Biking &amp; Aquascaping <br/>
          <i className="fa fa-coffee"></i> Loves: Coffee &amp; Green Tea<br/>
          <i className="fa fa-bed"></i> Hates: Naps <br/>
        </div>
      </section>
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