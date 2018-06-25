import marked from 'marked';

const contentful = require('contentful')

const SPACE_ID = 'w2rt9s1mwjcs'
const ACCESS_TOKEN = '63aca10b045baf6b6df28e114afc0a5341c92b3f417c969de47fe804506f29cb'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

function getSectionTitle (response) {
  var sectionTitleNode = document.createElement('header');
  sectionTitleNode.className = 'major';

  var headerNode = document.createElement('h2');
  var sectionTitleTextNode =  document.createTextNode(response.items[0].fields.sectionTitle);
  headerNode.appendChild(sectionTitleTextNode);

  sectionTitleNode.appendChild(headerNode);
  return sectionTitleNode
}

function getSectionContent (response) {
  var template = document.createElement('template');
  var sectionContentText = marked(response.items[0].fields.sectionContent).trim();
  template.innerHTML = sectionContentText;
  return template.content.firstChild;
}

const contentfulClass = {
  
  headerBuilder() {
    client.getEntries({content_type: 'header'})
    .then(function(response) {
      var headerSection = document.getElementById('header');
      var logoUrl = response.items[0].fields.logo.fields.file.url;
      var imageURL = 'https:' + logoUrl + '?fm=jpg&fl=progressive';
      var imageFile = document.createElement('img');
      imageFile.src = imageURL;
      var imageContainingEle = document.querySelector("#header .image.avatar a");

      imageContainingEle.appendChild(imageFile);
      headerSection.appendChild(getSectionContent(response));
    })
  },

  introductionBuilder() {
    client.getEntries({content_type: 'introduction'})
    .then(function(response) {
      var introSection = document.getElementById('one');

      introSection.appendChild(getSectionTitle(response));
      introSection.appendChild(getSectionContent(response));
    })
  },

  mySkillsBuilder() {
    client.getEntries({content_type: 'mySkillsSection'})
    .then(function(response) {

      var mySkillsSection = document.getElementById('three');

      mySkillsSection.appendChild(getSectionTitle(response));

      // Build out My Skills icons node
      var mySkillsIconArray = response.items[0].fields.mySkillsIcons;

      mySkillsIconArray.forEach(function (asset) {

        var imageURL = 'https:' + asset.fields.file.url + '?fm=jpg&fl=progressive';

        var imageDiv = document.createElement('div');
        imageDiv.className = 'myskillicons';

        var imageFile = document.createElement('img');
        imageFile.src = imageURL;

        var imageTitle = document.createElement('span');
        imageTitle.className = 'caption';

        var title = document.createTextNode(asset.fields.title);
        imageTitle.appendChild(title);

        imageDiv.appendChild(imageFile);
        imageDiv.appendChild(imageTitle);
        mySkillsSection.appendChild(imageDiv);
      });
    })
    .catch(console.error)
  },

  experienceBuilder() {
    client.getEntries({content_type: 'experience'})
    .then(function(response) {
      var experienceSection = document.getElementById('four');
      
      experienceSection.appendChild(getSectionTitle(response));

      var experienceArray = response.items[0].fields.experience;
      experienceArray.forEach(function (asset) {

        var experienceCardEle = document.createElement('div');
        experienceCardEle.className = 'experience-card';
        var companyNameEle = document.createElement('h4');
        var datePositionEle = document.createElement('h5');
        
        var companyName = asset.fields['company'];
        var datePosition =  asset.fields['datePosition'];
        var sectionContentText = marked(asset.fields['sectionContent']).trim();

        var template = document.createElement('template');

        template.innerHTML = companyName;
        companyNameEle.appendChild(template.content.firstChild);
        
        template.innerHTML = datePosition;
        datePositionEle.appendChild(template.content.firstChild);

        template.innerHTML = sectionContentText;

        experienceCardEle.appendChild(companyNameEle);
        experienceCardEle.appendChild(datePositionEle);
        experienceCardEle.appendChild(template.content.firstChild);

        experienceSection.appendChild(experienceCardEle);
      });
    })
  }

}

export { contentfulClass as default } 
