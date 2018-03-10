// Adapted from: https://developer.chrome.com/extensions/getstarted

// Gets current url with given callback
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

// Changes background page color given the background color
function changeBackgroundColor(color) {
  var bkgColor = 'document.body.style.backgroundColor="' + color + '";';

  chrome.tabs.executeScript({
    code: bkgColor
  }, function() {
    chrome.tabs.executeScript({
      file: 'textcolor.js'
    })
  });
}

// Gets saved backgound color from given url and callback
function getSavedBackgroundColor(url, callback) {
  chrome.storage.sync.get(url, (items) => {
    callback(chrome.runtime.lastError ? null : items[url]);
  });
}

// Saves to the given url and sets the given background color
function saveBackgroundColor(url, color) {
  var items = {};
  items[url] = color;
  chrome.storage.sync.set(items);
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var dropdown = document.getElementById('dropdown');
    var dropdownBackground = document.getElementById('dropdown-background');

    getSavedBackgroundColor(url, (savedColor) => {
      console.log(savedColor);
      if (savedColor) {
        changeBackgroundColor(savedColor);
        dropdown.value = savedColor;
      } else {
        changeBackgroundColor('black');
        dropdown.value = 'black';
      }
    });

    dropdownBackground.addEventListener('change', () => {
      console.log("User selected background as: " + dropdownBackground);
      changeBackgroundColor(dropdownBackground.value);
      saveBackgroundColor(url, dropdownBackground.value);
    });

    // Listen on dropdown to see what color the user can't see
    // When selected, then show the dropdown with background colors to choose from for that specific color
    dropdown.addEventListener('change', () => {
      // Hard coding the value to be nothing, since user hasn't selected anything yet
      dropdownBackground.value = '';
      let allBackgroundColors = dropdownBackground.children;
      for (let i = 0; i < allBackgroundColors.length; i++) {
        allBackgroundColors[i].style.display = 'none';
      }
      dropdownBackground.style.display = 'block';
      if (dropdown.value === 'red') {
        let dropdownBackgroundElements = document.querySelectorAll("#dropdown-background #red");
        // Unhide elements that have red as ID
        for (let i = 0; i < dropdownBackgroundElements.length; i++) {
          dropdownBackgroundElements[i].style.display = 'block';
        }
      }

      if (dropdown.value === 'blue') {
        let dropdownBackgroundElements = document.querySelectorAll("#dropdown-background #blue");
        // Unhide elements that have blue as ID
        for (let i = 0; i < dropdownBackgroundElements.length; i++) {
          dropdownBackgroundElements[i].style.display = 'block';
        }
      }
      
      if (dropdown.value === 'green') {
        let dropdownBackgroundElements = document.querySelectorAll("#dropdown-background #green");
        // Unhide elements that have green as ID
        for (let i = 0; i < dropdownBackgroundElements.length; i++) {
          dropdownBackgroundElements[i].style.display = 'block';
        }
      }

      if (dropdown.value === 'all') {
        let dropdownBackgroundElements = document.querySelectorAll("#dropdown-background #all");
        // Unhide elements that have all as ID
        for (let i = 0; i < dropdownBackgroundElements.length; i++) {
          dropdownBackgroundElements[i].style.display = 'block';
        }
      }
    });
  });
});