# my_recepie
## Project Title: Interactive Recipe Web Page with Falling Food Animation
## Project Description:
This project is a simple, visually appealing recipe webpage where users can explore different food items. When users interact with the page by clicking on the heading, delightful food images fall from the top of the screen, enhancing the user experience with a fun and interactive animation. The webpage is designed using HTML, CSS, and JavaScript, with a responsive layout to ensure that it looks good on devices of all screen sizes.

# Key Features:
Responsive Layout:

The page is designed to be fully responsive, ensuring a great experience across various screen sizes, from mobile devices to large desktop screens. It uses percentage-based widths and flexible font sizes to achieve this.
Interactive Food Animation:

When the user clicks the header ("😋(:RECIPES:)😋"), food images (like chicken tikka, paneer, and gulab jamun) fall from the top of the screen. This is done using JavaScript to generate random food images and apply a smooth falling animation using CSS.
Hover Effects:

Images on the page have a slight rotation effect when hovered over, adding a subtle touch of interactivity that engages users.
Dynamic Food Item Selection:

The food items that fall during the animation are randomly selected from a predefined list of popular dishes, ensuring that each click on the heading produces a unique experience.
Optimized for Performance:

After the food items fall, they disappear from the page after 2 seconds to avoid clutter and keep the page clean.
Sticky Header:

The header remains visible at the top of the page as the user scrolls down, making the main action point (triggering the falling food animation) always accessible.
Technologies Used:
# HTML:

Structured the layout of the webpage, including headers, images, and buttons for different food items.
# CSS:

Styled the webpage with a focus on responsive design, creating hover effects, and implementing animations for the falling food items.
JavaScript:

Used to dynamically create the falling food images when the header is clicked and apply random positioning and animation effects to make the user interaction more engaging.
How It Works:
Webpage Layout:

The webpage is divided into several sections, including a header, content blocks for each recipe, and a footer. Each content block contains an image of a dish and a button that links to a separate recipe page.
Interactive Falling Food Animation:

When the user clicks on the header, the createFoodItems() function is triggered. This function generates a set number of random food images (15 in this case) that fall from random positions across the top of the screen to the bottom, thanks to the fall animation defined in the CSS.
Hover Effects:

As the user hovers over the recipe images, the images rotate slightly, adding a subtle visual cue to encourage engagement.
Image Cleanup:

Each food image disappears after 2 seconds to prevent cluttering the webpage and maintain a smooth, enjoyable user experience.
├── index.html            # Main HTML file containing the webpage structure
├── styles.css            # CSS file for responsive styling and animations
├── images/               # Folder containing the images used on the webpage
│   ├── Best-Chicken-Tikka-Masala.jpg
│   ├── palak_paneer.jpg
│   └── gulab-jamun.jpg
└── script.js             # JavaScript file for handling interactivity
]
