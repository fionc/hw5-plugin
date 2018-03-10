var textElements = document.querySelectorAll("p, a");
var divElements = document.querySelectorAll("div.container")
var textColor = 'white';
var bckColor = document.body.style.backgroundColor;
var missingColorDropdown = document.querySelector("#dropdown-background");

if (bckColor === 'white') {
    textColor = 'black';
} else if (bckColor === 'green') { // Refer to map design in source 1; green and purple can be easily differentiated with Deuteranopia
    textColor = 'purple';
} else if (bckColor === 'yellow') { // Refer to pictures of colors in source 2; purple and yellow are easily differentiated in 3 types of color blindness
    textColor = 'purple';
} else if (bckColor === 'blue') {
    textColor = 'yellow';  // Refer to the pictures in source 2 for PROTANOPIA

    // not sure if we should do inverse combinations? like a purple background and green text, etc.???
}
for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.color = textColor;
}

// Attempt to change container background color
// for (let i = 0; i < divElements.length; i++) {
//     divElements[i].style.color = bckColor;
// }


// Source 1: http://colororacle.org/resources/2007_JennyKelso_ColorDesign_hires.pdf
// Source 2: http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/
// Source 3: http://blog.usabilla.com/how-to-design-for-color-blindness/