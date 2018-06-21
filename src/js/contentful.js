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

const contentfulClass = {

  introductionBuilder() {
    client.getEntries({content_type: 'introduction'})
    .then(function(response) {
      var introSection = document.getElementById('one');

      introSection.appendChild(getSectionTitle(response));

      var sectionContentNode = document.createElement('p');
      var sectionContentText = document.createTextNode(response.items[0].fields.sectionContent);
      sectionContentNode.appendChild(sectionContentText);

      introSection.appendChild(sectionContentNode);
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
  }
}

export { contentfulClass as default } 
