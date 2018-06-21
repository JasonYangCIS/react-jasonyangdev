const contentful = require('contentful')

const SPACE_ID = 'w2rt9s1mwjcs'
const ACCESS_TOKEN = '63aca10b045baf6b6df28e114afc0a5341c92b3f417c969de47fe804506f29cb'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

const contentfulClass = {
  mySkillsSectionBuilder() {
    client.getEntries({content_type: 'mySkillsSection'})
    .then(function(response) {

      var mySkillsSection = document.getElementById('three');

      // Build out section title node
      var sectionTitleNode = document.createElement('header');
      sectionTitleNode.className = 'major';

      var headerNode = document.createElement('h2');
      var mySkillsTitle =  document.createTextNode(response.items[0].fields.sectionTitle);
      headerNode.appendChild(mySkillsTitle);

      sectionTitleNode.appendChild(headerNode);
      
      mySkillsSection.appendChild(sectionTitleNode);

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
