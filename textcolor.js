var textElements = document.querySelectorAll("p, a");
var textColor = 'white';
var bckColor = document.body.style.backgroundColor;

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

// Changes font color of each p and a tag
for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.color = textColor;
}