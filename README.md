# Hwk 5: Architected Plugin
By: Fion Chan and Kari Nasu

## VisionAware
Our plugin, VisionAware lets users to change the background color of a webpage and is designed to make it easier for visually impaired users to view a webpage. Since color vision impairment (color blindness) affects people in different ways, Vision in aims provide better legibility by changing the color of a webpage and its font color. 

## Load the Extension (Installation)
Since we didn’t publish our plugin, we suggest that you download our source code in our GitHub repo. Once downloaded, you open a new Chrome tab and visit **chrome://extensions/**. Be sure to enable  the _Developer Mode_ checkbox, and then click on _Load Unpacked Extension_ to select the extension file from your directory.

## How to Use
Once the extension is loaded, you can click on the extension and it will automatically change the background color of the current page to _black_ (the default color). The first dropdown in the popup asks for the type of color blindness (Protanomaly, which is a reduced sensitivity to red light, Deuteranomaly which is a reduced sensitivity to green light, Tritanomaly which is a reduced sensitivity to blue light, and Monochromacy which is a reduce sensitivity to all colors). Upon selecting a type of colorblindness, a second dropdown will appear. The user can then select the desired background color. One option we have for Protanomaly is a background of green and a font color of purple. We decided to use this color scheme since these two colors are easily differentiated (http://colororacle.org/resources/2007_JennyKelso_ColorDesign_hires.pdf).

Upon refreshing the webpage, the plugin will be disabled; however, the previously saved background color will show once the plugin is reenabled. This is ideal for users who have a specific visual impairment as they can specify their own default background colors without selecting from the dropdown menu constantly. If users wish to change the background color, they can simply click on the plugin icon and select a different background color.