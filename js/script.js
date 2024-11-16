// Navigation menu keeping the bar under the link when is clicked - Activate menu links //
const links = document.querySelectorAll('.header-menu a');

function activateLink(link){
    const url = window.location.href;
    const href = link.href;

    if(url.includes(href)) {
        link.classList.add("activate");
    }
}

links.forEach(activateLink)

// Activate pricing quotes //

const parameters = new URLSearchParams(location.search);

function activateProduct(parameter){
    const element = document.getElementById(parameter);
    if (element) {
        element.checked = true;
    }
}

parameters.forEach(activateProduct);
