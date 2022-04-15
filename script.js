let gridContent = document.getElementById('contentGrid');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}
let myJson = [
  {
    "Series" : "The Office",
    "pictureURL" :"https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/theoffice/mainpage/office-hub-key-art-min.jpg/_jcr_content/renditions/original?downsize=1200:*&output-quality=70",
    "Dialogue" : "That's what she said",
    "Characters" : "Michael Scott and Jim Halpert"
  },
  {
    "Series" : "Brooklyn Nine-Nine",
    "pictureURL" :"https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg",
    "Dialogue" : "Title of your sex tape",
    "Characters" :"Jake Peralta and Charles Boyle"
  },
  {
    "Series" : "Stranger Things",
    "pictureURL" : "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg",
    "Dialogue" : "Friends don't lie",
    "Characters" : "Eleven"
  },
  {
    "Series" : "Lucifer",
    "pictureURL" : "https://assets2.ignimgs.com/2016/08/24/luciferver3xlgjpg-fe465d.jpg",
    "Dialogue" : "What is it you truly desire?",
    "Characters" : "Lucifer Morningstar"
  },
  {
    "Series" : "Game of Thrones",
    "pictureURL" : "https://www.channelfutures.com/files/2015/09/bdf89e6e-1316-43c1-8df8-1dd04114761a_0.jpg",
    "Dialogue" : "Everything before the word ‘but’ is horseshit",
    "Characters" : "Jon Snow and Arya Stark"
  },
  {
    "Series" : "Money Heist",
    "pictureURL" : "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    "Dialogue" : "In the end, love is a good reason for everything to fall apart",
    "Characters" : " Professor and Denver"
  }
]
for (var i = 0; i < myJson.length; i++) {
  createElements(myJson[i]);
}

function createElements (incomingJSON) {
  let contentElement = document.createElement("DIV");
  contentElement.classList.add('items');

  let contentHeading = document.createElement("H2");
  contentHeading.classList.add('contentTitle');
  contentHeading.innerText = incomingJSON['Series'];
  contentElement.appendChild(contentHeading);

  let contentImg = document.createElement("IMG");
  contentImg.classList.add('contentImage');
  contentImg.src = incomingJSON['pictureURL'];
  contentElement.appendChild(contentImg);

  let pContainer = document.createElement("DIV");
  pContainer.classList.add('pContain');
  contentElement.appendChild(pContainer);

  let dialogue = document.createElement("P");
  dialogue.classList.add('Dialogue');
  /* PROF NOTE: The JSON key you defined is written as "Dialogue", not "Favorite Dialogue" */
  // dialogue.innerText = "Favorite Dialogue: " + incomingJSON['Favorite Dialogue'];
  dialogue.innerText = "Favorite Dialogue: " + incomingJSON['Dialogue'];
  pContainer.appendChild(dialogue);

  let characters = document.createElement("P");
  characters.classList.add('Character');
  /* PROF NOTE: The JSON key you defined is written as "Characters", not "Favorite Character" */
  // characters.innerText = "Favorite Characters: " + incomingJSON ['Favorite Character'];
  characters.innerText = "Favorite Characters: " + incomingJSON['Characters'];
  /* PROF NOTE: You accidentally are trying to append something with the variable name "character"
  instead of what you declared: "characters" */
  // pContainer.appendChild(character);
  pContainer.appendChild(characters);

  gridContent.appendChild(contentElement);
}
