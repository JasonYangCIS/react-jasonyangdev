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

              <span><a href="https://www.jasonyangdev.com"><strong>www.jasonyangdev.com</strong></a> - 2017</span><br/>
              <i className="fa fa-angle-right"></i> Rebuilt my old web portfolio site into a website running off of React to gain more experience with this library.<br/>
              <i className="fa fa-angle-right"></i> Applied materialistic design philosophies and add some neat features (click on my face or refresh the page).<br/>
              <i className="fa fa-angle-right"></i> Also used this as an opportunity to dabble more into DevOps by seting up NPM DPLOY to enhance efficiency and deployment of code changes.<br/>
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