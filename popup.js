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
    var backgroundPrompt = document.getElementById('select-color-prompt');

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

    // Listens for change in first dropdown and reacts to it
    dropdown.addEventListener('change', () => {
      // Prevents background color dropdown from showing first option in field
      dropdownBackground.value = '';

      let allBackgroundColors = dropdownBackground.children;
      for (let i = 0; i < allBackgroundColors.length; i++) {
        allBackgroundColors[i].style.display = 'none';
      }

      backgroundPrompt.style.display = 'block';
      dropdownBackground.style.display = 'block';

      // Show each background color for selected colorblindness
      let dropdownBackgroundElements = document.querySelectorAll("#dropdown-background #" + dropdown.value);
      for (let i = 0; i < dropdownBackgroundElements.length; i++) {
        dropdownBackgroundElements[i].style.display = 'block';
      }
    });
  });
});