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



