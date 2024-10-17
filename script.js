// remember to ask tutor about my commit message quality, after updating gitHub

// since i am familiar with vanilla js, when i am stuck, see the code
// in vanilla before continuing work in jQuery

function newItem() {

// adding a new item to the list of items 

// created a new <li> element and stored the value of the input
// into a variable. Then, created a new text node (on the DOM) containing the 
// value of the input, and appended to the new li element.

let li = $('<li></li>')
let inputValue = $('#input').val();
//  "Create a new text node, on the DOM, with the content from 
// inputValue. Then append this to the variable li.
// let text = li.append(document.createTextNode(inputValue)); NO NEED
    li.append(inputValue);
     
if(inputValue === '') { 
    alert('you must write something.');
}
else{
    $('#list').append(li);
}

// crossing out an item from the list of items
// add '.strike' class to li, via toggle

function crossOut() {
    li.toggleClass('strike')
 }
//  an event listener on the 'double-click' event.
li.on('dblclick', function() {
    crossOut();
    });

// create a <crossOutButton> element on DOM
let crossOutButton = $('<crossOutButton></crossOutButton')
// create a text node with content "X", then append to 
// the variable containing the <crossOutButton> element.
 crossOutButton.append(document.createTextNode("X"));
//  now, append this <crossOutButton> element the variable containing 
// list element. 
li.append(crossOutButton);


// crossOutButton.on('click', deleteListItem());

// adding the 'delete' class into the function for 
// an event listener.  
function deleteListItem() {
    li.addClass('delete');
}

crossOutButton.on('click', deleteListItem);

// reordering the items 
$('#list').sortable();
}



 




