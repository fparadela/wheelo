const links = document.querySelectorAll('.header-menu a');

function activateLink(link){
    const url = window.location.href;
    const href = link.href;

    if(url.includes(href)) {
        link.classList.add("activate");
        console.log();

    }
}

links.forEach(activateLink)