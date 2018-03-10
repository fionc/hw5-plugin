var textElements = document.querySelectorAll("p, a");
var divElements = document.querySelectorAll("div.container")
var textColor = 'white';
var bckColor = document.body.style.backgroundColor;
var missingColorDropdown = document.querySelector("#dropdown-background");

if (bckColor === 'white') {
    textColor = 'black';
} else if (bckColor === 'green') { 
    textColor = 'purple';
} else if (bckColor === 'yellow') { 
    textColor = 'purple';
} else if (bckColor === 'blue') {
    textColor = 'yellow';  
} else if (bckColor === 'pink') {
    textColor = 'turquoise';  
} else if (bckColor === 'turquoise') {
    textColor = 'gray';  
}

for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.color = textColor;
}