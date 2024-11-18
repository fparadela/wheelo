// Navigation menu: Keeps the bar under the link when it is clicked - Activate menu links //
const links = document.querySelectorAll('.header-menu a'); // Select all anchor tags inside the header menu

/**
 * Adds an "activate" class to the link if its href matches the current page URL.
 */
function activateLink(link) {
    const url = window.location.href; // Get the current page URL
    const href = link.href; // Get the href attribute of the link

    if (url.includes(href)) { // Check if the current URL contains the link's href
        link.classList.add("activate"); // Add the "activate" class to highlight the link
    }
}

links.forEach(activateLink); // Apply the activateLink function to each link in the menu

// Activate pricing quotes: Automatically selects a product based on URL query parameters //
const parameters = new URLSearchParams(location.search); // Get URL search parameters

/**
 * Activates a product input (e.g., a checkbox or radio button) if its ID matches a URL parameter.
 */
function activateProduct(parameter) {
    const element = document.getElementById(parameter); // Find the element with the ID matching the parameter
    if (element) {
        element.checked = true; // Check the input element (e.g., for a pricing option)
    }
}

parameters.forEach(activateProduct); // Apply the activateProduct function to each URL parameter

// FAQ boxes: Toggles the visibility of answers when a question button is clicked //
const questions = document.querySelectorAll('.questions button'); // Select all question buttons

/**
 * Toggles the display state of the answer corresponding to the clicked question.
 */
function activateQuestion(event) {
    const question = event.currentTarget; // Get the button that triggered the event
    const controls = question.getAttribute('aria-controls'); // Get the ID of the associated answer
    const answer = document.getElementById(controls); // Find the answer element by ID

    answer.classList.toggle("activated"); // Toggle the "activated" class on the answer
    const activated = answer.classList.contains("activated"); // Check if the answer is now activated
    question.setAttribute("aria-expanded", activated); // Update the button's aria-expanded attribute
    console.log(activated); // Log the activation state (true/false)
}
/**
 * Adds a click event listener to a question button.
 */
function eventsQuestions(question) {
    question.addEventListener('click', activateQuestion); // Attach the click event listener
}

questions.forEach(eventsQuestions); // Apply the eventsQuestions function to each question button

// Bikes gallery

const gallery = document.querySelectorAll(".bike-img img");
const galleryContainer = document.querySelector(".bike-img");

function changeImage(event){
    const img = event.currentTarget;
    const media = window.matchMedia("(min-width : 920px)").matches;

    if (media) {
        galleryContainer.prepend(img);
    }
    }


function galleryEvents(img) {
    img.addEventListener('click', changeImage);
}

gallery.forEach(galleryEvents);
