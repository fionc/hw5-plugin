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

    dropdown.addEventListener('change', () => {
      changeBackgroundColor(dropdown.value);
      saveBackgroundColor(url, dropdown.value);
    });
  });
});