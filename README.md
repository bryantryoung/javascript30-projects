# javascript30-projects

Each of the projects here are taken from the curriculum of Wes Bos' [Javascript30](https://javascript30.com/) course. This is my journey through 30 days and 30 projects as I code along with Wes and continue to build on my own skills. 

Below, I have each day listed as I complete them as well as a few notes for myself on things I learned or better understand as a result of the project.

Day 01 (js-drumkit): Interactive drumkit built with HTML, CSS, and vanilla JS.
* practice with accessing object properties, specifically the key code of keypresses
* `.addEventListener('transitionend', function)` is useful in removing active classes after an effect takes place 
* used those properties to toggle classes with js dom manipulation

Day 02 (js-clock): Live updating clock built with HTML, CSS, and vanilla JS. 
* css positioning practice, absolute vs relative
* used the `new Date()` constructor to make the digital and analog clocks update in real time

Day 03 (css-variables-practice): Used CSS variables and some connnected JS to allow a few input sliders to change elements (size of a div) on the page as well as the appearance of the page (backdrop blur, border color of an element)
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

Day 09 (dev-tools-practice): Practice with dev-tools as well as several useful console methods
* you can select an element and break on attribute modification to see the line of code where any attributes are being modified 
* `console.warn()` and `console.error()` can be used to present a warning or error message to the console 
* `console.assert()` can be passed a statement as a paramaeter as well as a second parameter containing a message that will be logged to the console if the assertion is false 
* `console.group()` is a useful method that groups several log statements together based on a variable they share 
* `console.time()` is a useful way to gauge the time some block of code takes to run, you close this block with `console.timeEnd()`

Day 10 (js-checkbox): Added an auto-select feature to a list of checkboxes which allows the user to hold shift while selecting and have each box inbetween selected
* more practice with use of `this` which can sometimes be confusing as to what it actually means; in this case `this` was the checkbox currently selected within the event listener 
* used the conditional of switching a variable between true/false `variable = !variable` based on whether the `.forEach()` loop over checkboxes was at the selected checkbox or the last selected checkbox (whether it was actually inbetween the two selected checkboxes or not)

Day 11 (html5-video-player): An html video player with custom styling and some connected js for additional functionality
* worked again with data- attributes and retrieving them with js `this.dataset.key` to skip the video forward/back
* got some practice with HTML5 video, some properties that exist on video players, such as `.paused` `.play()` `.pause()` `.currentTime` and `.duration` and how to change them with javascript functions and event listeners like 'click', 'timeupdate' (or 'progress'), 'mousemove', 'mousedown', 'mouseup', and 'change'

Day 12 (konami-code): Key sequence detection created to make something happen when certain sequence of keys is pressed 
* used `.splice()` on an array that all the keys are pushed to in order to keep the array maxed out at the maximum length of the key sequence
* then checked that sequence with `.includes(sequence)` and used `cornify_add()` for a fun visual effect

Day 13 (js-slide-in-on-scroll): Added a slide-in-on-scroll effect to images on a web page 
* used the 'scroll' event listener on the window
* calculated the pixel number location of the bottom of the viewport where half of the image will be scrolled over using the `window.scrollY` and `window.innerHeight` properties on the window and `sliderImage.height` and `sliderImage.offsetTop` properties on the image (element) itself 
* when it was true that half the image was in view and the user had not scrolled past the image, toggled an 'active' class on the image to transition it

Day 14 (js-practice): Worked on the practical difference between a reference and a copy in javascript data types
* a variable that contains a string, number, or boolean can be set equal to a new variable and even if the original variable is changed, the new one won't be - the new variable is not a reference to the old one (this is pretty intuitive)
* arrays and objects are different: a new array or object set equal to an old one will act as a reference, changing it will change the original 
* in arrrays, one way around this is to slice this whole array, saving it to a new variable: `const newArray = oldArray.slice()` this creates a copy you can change
* you could also spread into the new array with the old array's elements: `const newArray = [...oldArray]`
* with objects, you will need to use: `const newObj = Object.assign({}, oldObj, {newProperties})`
* note: these object and array copies are only 1 level deep, you can only access the "surface-level" values 

Day 15 (local-storage): checklist app that stores data locally and updates display with an array of objects that is populated in the DOM every time a change is made 
* used Local Storage key-value pairs to save data on your local machine so that the page doesn't reset every refresh
* `localStorage.setItem('items', JSON.stringify(items))` is an example of using the setItem() method in localStorage to create the objects in our array in Local Storage, have to use JSON.stringify because the data will be interpreted as a string - javascript will just use .toString() on things that are not already a string, which won't produce the results you want most of the time
* when initially loading the page, the array of items is set to `JSON.parse(localStorage.getItem('items')) || []` in order to retrieve the items list from local storage if it exists, or set it to an empty array if there is no data in local storage 
* used event delegation on input elements to ensure the new elements have event listeners attached to them, even as we updated them in the DOM

Day 16 (mouse-move-shadow): create a cool text shadow effect that follows your mouse around the page
* got some more practice with using the pixel offsetX and offsetY on an event, like 'mousemove'
* if you are tracking x and y placement of cursor, you need to isolate any container divs you might move your cursor into (x, y will restart within that container), can be done with a little math: add current x and y to the number of px from the top of the window and from the leftmost side of the window
* using destructuring for assignments to an object's properties: `let { offsetX: x, offsetY: y } = e` is equivalent to `let x = e.offsetX, let y = e.offsetY`

Day 17 (js-practice-2): sort an array of bands while ignoring articles (a, an. the)
* use a regular expression to replace all the articles at the beginning of a sentence with nothing: `sentence.replace(/^(a |the |an )/i, "").trim()` and trim any extra whitespace
* loop over the array with the `.sort()` function, comparing each element after passing it through our function that replaces the articles, this returns a sorted list of the array elements where elements that start with 'a', 'an', or 'the' will be sorted based on the first word that is not an article 

Day 18 (array-reduce-practice): reduced a nodelist of video times to find the total time of all the videos 
* worked with `Array.from()` on a nodelist to allow us to use `.map()` and `.reduce()` on the elements 
* worked with the modulo operator `%` to determine seconds remaining when divided into hours and minutes

Day 19 (webcam-fun): used an HTML5 video element to display a webcam and then added filters on top of that webcam in real time
* got some practice with the `.getUserMedia({ })` method on the navigator object in order to access the user's media stream
* set the srcObject of the video element to that local media stream and used `video.play()` to display the video 
* created an HTML canvas element and used a huge array of the pixel data from the video stream to create filters on top of the user webcam output 

Day 20 (speech-recognition): used speech recognition to display user audio input in text form on the page
* used `window.SpeechRecognition` and the `SpeechRecognition()` constructor to allow the browser to listen from user audio input
* created a transcript array, mapped that array to the results from the audio input and joined that array to a one string that we then set to the textContent of a <p> element on the page
  
Day 21 (geolocation): simple geolocation app with a compass that changes direction based on the user's heading direction 
* utilized `navigator.geolocation(watchPosition)` with a callback function to set  `data.cords.speed` to the displayed speed on the page and rotate the compass based on direction 
  
Day 22 (js-practice3): created follow along link effect where a highlight transitions to every link that is hovered over, changing size and width to match that of the text 
* used the `getBoundingClientRect()` method to get the "coordinates" of a link on the page when it is hovered over, saved those coordinates into properties on an object as width, height, and the distance from the top and left of the screen
* then moved the highlight - just a span element we created in the DOM - which moves to those coordinates with the matching height and width 
* had to add the distance from top and left to the `window.scrollY` and `window.scrollX` values to account for the user scrolling down
  
Day 23 (text-to-speech): text to speech synthesis with some added functionality 
* worked with creating a `new SpeechSynthesisUtterance()` object and methods on that object such as `.speak(msg)` to speak a chosen message and `.cancel()` to cancel the speech immediately 
* used the `.find()` array method to match the selected voice for the utterance to the user-selected voice in the dropdown 
  
Day 24 (sticky-nav): a nav bar that is position absolutely on the page and then sticks to the top when you scroll past it
* made the transition smooth by adjusting the padding relative to the size of the nav bar when you scroll past it (set the padding-top property to the `nav.offsetHeight` value whenever the element becomes fixed to the top of the page)
  
Day 25 (events): practiced with event capture and bubbling and use cases for third parameter options object in event listeners 
* bubbling: an event will trigger first on the element you interact with and then will trigger on all of the contexts that is nested within (inner box, then outer box, then outermost box, then window, etc.)
* event capture: events are captured, though, from outermost context first, so you could force the event to trigger in that order (opposite from how it normally would trigger) using `{ capture: true }` in an options object as the third parameter to an `addEventListener( )` function 
* you can also use `{ once: true }` to have the event listener removed after it triggers once 
 
  
Day 26 (follow-along-nav): created a nav with a follow-along effect when elements are hovered over 
* created three different dropdown elements with content that was hidden with `display: none` and `opacity: 0` properties and displayed them with an added class whenever the element was hovered over - `addEventListener('mouseenter', function)`
* a background div for those dropdowns followed the dropdown around and adjusted to the height and width of each element using the page coordinates `getBoundingClientRect()` of the element 
* in order to account for the nav itself not necessarily being the top element on the page, we added a calculation in our coordinates object to account for the number of px from top and left that the nav itself is 

Day 27 (drag-to-scroll): drag to scroll along a series of elements
* utilized the `mousemove` `mouseleave` `mouseup` and `mousedown` event listeners to toggle a boolean value representing whether the mouse is down and inside the div, adds an "active" class if true 
* scrolled within the div by calculating the position of the initial mousedown event `e.pageX` and then "walked" in the direction of the scroll by subtracting the distance in px moved with the mousedown from `scrollLeft` value on the div
* continuously reassigns that `scrollLeft` property to the distance scrolled

Day 28 (video-speed-controller): a slider that controlls the playback speed of the video
* used a `mousemove` event to to change the position of the bar and the playback speed with it 
* the position of the mouse was stored with `e.pageY - this.offsetTop` to make sure any margins, padding, or anything else wouldn't interfere with us grabbing the exact distance in px from the top of the element we were inside
* created a percent variable by dividing the previous calculation by the total height of the element
* set that percent * 100 to the displayed text in the box when the user moves a mouse over it
* set the playback rate of the video to the percent multiplied by the maximum playback we wanted minus the minimum playbackRate plus the min `percent * (max - min) + min` which sets the playbackRate to the correct number within the bounds of min and max
  
Day 29 (countdown-timer): simple countdown timer with input buttons and textbox
* used the `setInterval()` function to set a timer that updates after each second and displays the distance between the future time (desired seconds on the counter + current time) and the current time
* made sure to use `clearInterval()` with the countdown variable passed as a parameter (the variable that references the interval function) when the timer starts so that it doesn't try to run multiple timers at once
