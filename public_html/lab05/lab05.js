//validate functions will run all at once, 
//find a way to concatinate the alert to let them know 
// if its the name that is wrong, address or last name

//----3 functions to validate name, number, address

//function nameValid checks if there are any numbers in the name 
//if so invalid and will not print and get mentioned in the
function nameValid(){
    const nameElem = document.getElementById('name');
    const nameVal = nameElem.value;
    for (let i; i < nameVal.length; i++){
        if (typeof i == 'number'){
            alert('invalid, name can not have number');
        }else{
            return nameVal;
        }
    }
}

//function addressVaild checks if address is empty 
//assumptions: address can be any format, it can not be null 
function addressVaild(){
    const addressE = document.getElementById("address");
    const addressV =  addressE.value;
    if (null == addressV){
        alert('invalid, address feild cannot be empty')
    }
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
function phoneValid(){
    const numberE = document.getElementById("number");
    const numberV = numberE.value;

    const numarray = [];
    
}


//function checks 

function valid(){
    nameValid();

}