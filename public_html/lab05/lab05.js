//validate functions will run all at once, 
//find a way to concatinate the alert to let them know 
// if its the name that is wrong, address or last name

//----3 functions to validate name, number, address

//function nameValid checks if there are any numbers in the name 
//if so invalid and will not print and get mentioned in the
function nameValid() {
  const nameElem = document.getElementById('name');
  const nameVal = nameElem.value;

  if (nameVal.length === 0) {
    alert('invalid, name cannot be empty');
    return false;
  }
  // letters only (no numbers, no symbols)
  if (!/^[A-Za-z]+$/.test(nameVal)) {
    alert('invalid, name can only contain letters');
    return false;
  }
  return true;
}

//function addressVaild checks if address is empty 
//assumptions: address can be any format, it can not be null 
function addressValid() {
  const addressE = document.getElementById("address");
  const addressV = addressE.value;
  if (addressV === "") {
    alert('invalid, address field cannot be empty');
    return false;
  }
  return true;
}


//function phoneValid checks if phone number is valid
// must be in format '('+ xxx +')'+' '+xxx+'-'+xxxx , where x can be any number form 0-9


//way to approch validation 
//1. convert the input into an array  (function phoneValid implements this)
//check if:
//index 0 4 have parenthesis 
//index 5 is a space
//index 1 2 3 6 7 8 10 11 12 13 has to be numbers


//2. can also pattern match, (xxx) xxx-xxxx, where input must have no characters
// must match space positioning and - ( ). 
function phoneValid() {
    //get input element and its current value
    const numberE = document.getElementById("phone");
    const numberV = numberE.value;
    //convert the string phone number into array of charactera
    //that way we can split each chatacter up, iterate thru and then check
    //if the indices match
    const numarray = numberV.split("");


    //cechk iff the length is 14 characters, if not invlaid
    if (numarray.length !== 14) {
        alert("invalid, phone number must contain 14 characters in")
        return false;
    }
    //check if the format of the non numbers are correct
    if (numarray[0] !== "(" || numarray[4] !== ")" || numarray[5] !== " " || numarray[9] !== "-") {
        alert("invalid, Phone number must follow format (416) 555-5555");
                return false;
    }
    //check if the remaining indicies are digits
    const digitPositions = [1, 2, 3, 6, 7, 8, 10, 11, 12, 13];
    for (let i of digitPositions) {
        if (!/^[0-9]$/.test(numarray[i])) {
            alert("invalid, Phone number must contain digits in correct places");
                    return false;
        }
    }
    return numberV;

}

//function displays info
function displayInfo() {
  const nameVal = document.getElementById('name').value;
  const addressVal = document.getElementById('address').value;
  const phoneVal = document.getElementById('phone').value;

document.getElementById('named').innerHTML =
    `<h2 style="color:lightgreen;">${nameVal}</h2><br>`;
  document.getElementById('addressd').innerHTML =
    `<h2 style="color:wheat;">${addressVal}</h2><br>`;
  document.getElementById('phoned').innerHTML =
    `<h2 style="color:skyblue;">${phoneVal}</h2><br>`;
}

//function checks if phone number is valid

function valid() {
  if (!nameValid())   return false;
  if (!addressValid()) return false;
  if (!phoneValid())  return false;

  displayInfo();
  return true;
}


//-------------probelm 2 clock problem--

function updateClock() {

  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
//if the number is less than 10, show a transparent zero before it otherwise, just show the number normally.
  const format = n => (n < 10 ? `< span style = " opacity:0.6 ; " > 0 </span>${n}` : n);

  document.getElementById("clock").innerHTML = `${format(h)}:${format(m)}:${format(s)}`;
}

setInterval(updateClock, 1000);
updateClock();
//---------------problem 3

// wair until the document is ready
$(document).ready(function() {

  // When the small image (#mainImage) is clicked
  $('#mainImage').click(function() {
    // Show overlay (make visible)
    $('#overlay').css('display', 'flex');
    
    // Small delay to trigger fade/scale animation via css class show. in javscript vanilla  overlay.classList.add similar('show').
    setTimeout(function() {
      $('#overlay').addClass('show');
    }, 15);
  });

  // when the close icon is clicked
  $('.close-icon').click(function() {
    // remove "show" class to shrink back
    $('#overlay').removeClass('show');

    // Wait for animation to finish, then hide overlay
    setTimeout(function() {
      $('#overlay').css('display', 'none');
    }, 2000);
  });
});
