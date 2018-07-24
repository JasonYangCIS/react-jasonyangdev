const mainClass = {

  handleClick() {
    var colorArr = [
      "255, 152, 0",    //Orange
      "102, 187, 106",  //Green
      "100, 124, 100",  //Army
      "176, 190, 197",  //Silver
      "255, 138, 128",  //Pink
      "100, 181, 246",  //Blue
      "52, 152, 219",   //Blue (Peterriver)
      "44, 62, 80",     //Midnight Blue
      "26, 188, 156",   //Turquoise
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

    /* border color for tabs */
    setStyle = "border-color: rgba(" + randomColor + ", 0.5 )";
    el = document.querySelectorAll(".tabs .tab-list .tab-list-item");
    for (i = 0; i < el.length; i++) {
      el[i].setAttribute("style", setStyle);
    }

  }

}

export { mainClass as default } 