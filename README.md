# javascript30-projects

Each of the projects here are taken from the curriculum of Wes Bos' [Javascript30](https://javascript30.com/) course. This is my journey through 30 days and 30 projects as I continue to build on my own skills. 

Below, I have each day listed as I complete them as well as a few notes for myself on things I learned or better understand as a result of the project.

Day 01 (js-drumkit): Interactive drumkit built with HTML, CSS, and vanilla JS.
* practice with accessing object properties, specifically the key code of keypresses
* `.addEventListener('transitionend', function)` is useful in removing active classes after an effect takes place 
* used those properties to toggle classes with js dom manipulation

Day 02 (js-clock): Live updating clock built with HTML, CSS, and vanilla JS. 
* css positioning practice, absolute vs relative
* used the `new Date()` constructor to make the digital and analog clocks update in real time

Day 03 (css-variables-practice): Used CSS variables and some connnected JS to allow a few input sliders to change elements (size of a div) on the page as well as the appearance of the page (backdrop blur, border color or an element)
* practiced css custom property syntax and using js to access and change these properties
* created HTML range inputs with data attributes to manipulate the size of elements

Day 04 (array-cardio-1): Several exercises for practice with commonly used array methods.
* worked with `.reduce()` `.map()` `.sort()` and `.filter()` to get desired data out of an array and/or placed in a new array
* specifying the `.reduce()` initial value as the second parameter is often essential

Day 05 (flexbox-image-gallery): Image gallery made primarily with flexbox and vanilla JS that grows/shrinks in responsive to user clicks. 
* more flexbox practice and toggle classes based on user clicks 

Day 06 (type-ahead): Search bar that fetches city and state data (long list of cities and corresponding states) and makes that list searchable with a type-ahead feature that shows all the remaining matches to the user's input. 
* `fetch()` and `.then()` used to pull data and create an array
* filtered that data based on user input and then mapped the filtered data to innerHTML content that displayed search results 
* used regular expressions to match the input to items in the original array: `new RegExp()` constructor with 'gi' - global/insensitive flags
* `.addEventListener("keyup", function)`  conveniently updates displayed results every time the user presses and lifts a key

Day 07 (array-cardio-2): More exercises with methods on arrays
* `.some()` will return if at least one element passes a condition, while `.every()` returns whether all elements pass a condition
* `.find()` will find a desired element and  `.findIndex()` is used to find its index in the array
* use `.splice()` to remove elements: takes in the parameters (startingIndex, elementsToRemove) with the option of adding elements as well with a third parameter 

Day 08 (html-canvas-practice): Practice with creating a canvas and using javascript to allow the user to draw within the entire window while the hue and line width constantly change 
* created canvas context with const `context = canvas.getContext('2d')` - could also create a 3d context 
* used the properties of an event object in javascript with an event listener on 'mousedown' to determine the start and end x,y coordinates for the drawing
* important methods: `context.beginPath()` to begin drawing, `context.moveTo(x,y)` to start the line and `context.lineTo(x, y)` to indicate where the line will be drawn to
