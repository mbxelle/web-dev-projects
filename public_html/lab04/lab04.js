//logic for website: 
//input your fav website link (save it in a variable called link)
//if link is not valid print "invalid link must include https or http"
// if https -> show lock padloc beside and print link 
// if http -> show open padlock icon and print link
//print both results in bookmarks list 

//addition: add option for users to delete the link 


//---function verifies if the link starts with https or http

//booklist is the array holding all the fav websites
const bookmark = [];


//input rawlink -> get out formatted link (icon +link)
function getlink() {
    //this gets the value of the input when user presses button
    const input = document.getElementById("rawlink").value;
    //if the link starts with https
    if (input.startsWith("https://")) {
        alert("secure website");//for testing   
        return "🔒 " + input; //secure log in
    } else if (input.startsWith("http://")) {
        alert("not secure website"); //for testing 
        return "🔓 " + input; //not secure login
    } else {
        alert("this link does not include https or http. try again.");
        return null;
    }
}

//if it is not null or empty, add to the bookmark-list 
function addFav() {
  const iconlink = getlink();
  if (iconlink !== null) {
    bookmark.push(iconlink);
    showBookmarks();
  }
}

function showBookmarks() {
  document.getElementById("bookmark-list").innerHTML = bookmark.join("<br>");
}

//------------------Is it palindrome?---------------------------

//function that is called to remove all spaces and puntuation
//and returns a string called cleaned

//outputs the text in purple if it is palindrome 
//outputs the text in blue underline if it is not palinrome
const output =[];

function normal(str){
    //clean string starts off empty so we can append
    let clean = "";
    //converts string to lowercase
    str = str.toLowerCase();
    //go thru the whole input string
    for (let i = 0; i < str.length; i++) {
        //store the iteration in ch
        const ch = str[i];
        //filter it so it is only alphabet
        if (ch >= "a" && ch<="z"){
            clean += ch; // add that to the cleaned string
        }
    }
    return clean;
}


function isPalindrome(str) {
  const rawtext = str;
//calls function that remvoes spaces and puncutation
  let word = normal(str);
//turns what is outputted from that function,
//split string into array of letters, reveres the array and then combines it as a string again
  let backwards = word.split("").reverse().join("");
  if (word === backwards){
    alert("word is a palindrome");
    showpurple(rawtext);
  } else{
    alert("word is not a palindrome");
    showblue(rawtext);
  }
 
}

function showpurple(word){
  const display = document.getElementById("display");
  display.innerHTML = word;
  display.style.color = "purple";
}

  //rawtext is passed in this function to be styled and displayed in display box
function showblue(word){
  //finds element named display and gives us an element so we can style and edit
  const display = document.getElementById("display");
  //innerHTML insterst the string into the page
  display.innerHTML = word;
  //styles the element
  display.style.color = "blue";
  //
  display.style.textDecoration = "underline";
}