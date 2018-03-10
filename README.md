# Hwk 5: Architected Plugin

## VisionAware
Our plugin, VisionAware lets users to change the background color of a webpage and is designed to make it easier for visually impaired users to view a webpage. Since color vision impairment (color blindness) affects people in different ways, Vision in aims provide better legibility by changing the color of a webpage and its font color. 

## Load the Extension (Installation)
Since we didn’t publish our plugin, we suggest that you download our source code in our GitHub repo. Once downloaded, you open a new Chrome tab and visit **chrome://extensions/**. Be sure to enable  the _Developer Mode_ checkbox, and then click on _Load Unpacked Extension_ to select the extension file from your directory.

## How to Use
Once the extension is loaded, you can click on the extension and it will change the background color of the current page _black_ (the default color). The background color will remain even if you refresh the page. If users wish to change the default color, they can simply select a different background color, and click on the extension when you visit another site. This is ideal for users who have a specific visual impairment as they can specify their own default background colors without selecting from the dropdown menu constantly. 

From the dropdown menu, you can select other colors (e.g. white, black, green, yellow, red, and blue). Depending on the color you chose, the font color will change as well. 
    For instance, a purple green color scheme will be more legible to red-green impaired users (http://colororacle.org/resources/2007_JennyKelso_ColorDesign_hires.pdf); hence, we have a green background and purple text option.  Similarly, a yellow and purple color scheme can be easily differentiated for user who have Deuteranopia, reduced sensitivity to green light, (http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/); thus, having a yellow background with purple text can help increase legibility. 


Adapted from: https://developer.chrome.com/extensions/getstarted

Copyright (c) 2014 The Chromium Authors. All rights reserved.
Use of this source code is governed by a BSD-style license.