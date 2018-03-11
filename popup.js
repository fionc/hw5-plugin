// Adapted from: https://developer.chrome.com/extensions/getstarted


function getCurrentTabUrl(callback) {
  let queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    let tab = tabs[0];
    let url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

function changeBackgroundColor(color) {
  let bkgColor = 'document.body.style.backgroundColor="' + color + '";';

  chrome.tabs.executeScript({
    code: bkgColor
  }, function() {
    chrome.tabs.executeScript({
      file: 'textcolor.js'
    })
  });
}

function getSavedBackgroundColor(url, callback) {
  chrome.storage.sync.get(url, (items) => {
    callback(chrome.runtime.lastError ? null : items[url]);
  });
}

function saveBackgroundColor(url, color) {
  let items = {};
  items[url] = color;
  chrome.storage.sync.set(items);
}

document.addEventListener('DOMContentLoaded', () => {
  let colorblindDropdown = document.getElementById('colorblind-dropdown');
  let colorDropdown = document.getElementById('color-dropdown');
  let colorPrompt = document.getElementById('color-prompt');

  // Prevents colorblind dropdown from showing first option as if it's selected
  colorblindDropdown.value = '';
  
  getCurrentTabUrl((url) => {
    getSavedBackgroundColor(url, (savedColor) => {
      if (savedColor) {
        changeBackgroundColor(savedColor);
        colorDropdown.value = savedColor;
      } else {
        changeBackgroundColor('black');
        colorDropdown.value = 'black';
      }
    });

    colorDropdown.addEventListener('change', () => {
      changeBackgroundColor(colorDropdown.value);
      saveBackgroundColor(url, colorDropdown.value);
    });

    // Listens for change in first dropdown and reacts to it
    colorblindDropdown.addEventListener('change', () => {
      // Prevents background color dropdown from showing first option as if it's selected
      colorDropdown.value = '';

      let allBackgroundColors = colorDropdown.children;
      for (let i = 0; i < allBackgroundColors.length; i++) {
        allBackgroundColors[i].style.display = 'none';
      }

      colorPrompt.style.display = 'block';
      colorDropdown.style.display = 'block';

      // Show each background color for selected colorblindness
      let colorOptions = document.querySelectorAll("#color-dropdown #" + colorblindDropdown.value);
      for (let i = 0; i < colorOptions.length; i++) {
        colorOptions[i].style.display = 'block';
      }
    });
  });
});