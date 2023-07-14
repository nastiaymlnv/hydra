const humburgerBtn = document.querySelector('.humburger-btn');
const humburgerContainer = document.querySelector('.hamburger-container');
const contactsPaginationBtns = document.querySelectorAll('.contacts-pagination');
const contactsPaginationList = document.querySelector('.contacts-list').children;
const servicesPaginationBtns = document.querySelectorAll('.pagination-services-btn');
const servicesPaginationList = document.querySelector('.services-list').children;
const technologiesPaginationBtns = document.querySelectorAll('.pagination-technologies-btn');
const technologiesPaginationList = document.querySelector('.technologies-list').children;
const processesPaginationBtns = document.querySelectorAll('.pagination-processes-btn ');
const processesPaginationList = document.querySelector('.process-list').children;

let currentContact = 0;
let currentService = 0;
let currentTechnology = 0;
let currentProcess = 0;

const handleEvent = () => {
    humburgerContainer.classList.toggle('hamburger-container_visible');
    humburgerBtn.classList.toggle('humburger-btn_open');
}

const handleNextContact = () => {
    contactsPaginationList[currentContact].style.display = "none";
    if (currentContact === 2) {
        currentContact = 0;
        contactsPaginationList[currentContact].style.display = "";
    } else {
        contactsPaginationList[currentContact + 1].style.display = "";
        currentContact++;
    }
}

// const handleDoubleServices = () => {
//     for (let i = 0; i < servicesPaginationList.length; i++) {
//         servicesPaginationList[i].classList.toggle('services-list__item_hidden');
//     }
// }

const handleNextSingleService = () => {
    servicesPaginationList[currentService].style.display = "none";

    if (currentService === 3) {
        currentService = 0;
        servicesPaginationList[currentService].style.display = "";
    } else {
        servicesPaginationList[currentService + 1].style.display = "";
        currentService++;
    }
}

const handleNextTechnology = () => {
    technologiesPaginationList[currentTechnology].style.display = "none";

    if (currentTechnology === 3) {
        currentTechnology = 0;
        technologiesPaginationList[currentTechnology].style.display = "";
    } else {
        technologiesPaginationList[currentTechnology + 1].style.display = "";
        currentTechnology++;
    }
}

const handleNextProcess = () => {
    processesPaginationList[currentProcess].style.display = "none";

    if (currentProcess === 4) {
        currentProcess = 1;
        processesPaginationList[currentProcess].style.display = "";
    } else {
        processesPaginationList[currentProcess + 1].style.display = "";
        currentProcess++;
    }
}

const displayContact = () => {
    for (let i = 1; i < contactsPaginationList.length; i++) {
        contactsPaginationList[i].style.display = "none";
    }

    for (elem of contactsPaginationBtns) {
        elem.classList.toggle('contacts-pagination_visible');
        elem.addEventListener("click", handleNextContact);
    }
}

const displayServices = () => {
    // for two cards
    // for (let i = servicesPaginationList.length - 1; i > servicesPaginationList.length / 2 - 1; i--) {
    //     servicesPaginationList[i].classList.toggle('services-list__item_hidden');
    // }

    // for (elem of servicesPaginationBtns) {
    //     if (elem.classList.contains('pagination-btn_prev')) {
    //         elem.addEventListener("click", handleDoubleServices);
    //     }
    //     else {
    //         elem.addEventListener("click", handleDoubleServices);
    //     }
    // }

    // for one card
    for (let i = 1; i < servicesPaginationList.length; i++) {
        servicesPaginationList[i].style.display = "none";
    }

    for (elem of servicesPaginationBtns) {
        elem.classList.toggle('pagination-btn_visible');
        elem.addEventListener("click", handleNextSingleService);
    }
}

const displayTechnologies = () => {
    for (let i = 1; i < technologiesPaginationList.length; i++) {
        technologiesPaginationList[i].style.display = "none";
    }

    for (elem of technologiesPaginationBtns) {
        elem.classList.toggle('pagination-btn_visible');
        elem.addEventListener("click", handleNextTechnology);
    }
}

const displayProcess = () => {
    for (let i = 2; i < processesPaginationList.length; i++) {
        processesPaginationList[i].style.display = "none";
    }

    for (elem of processesPaginationBtns) {
        elem.classList.toggle('pagination-btn_visible');
        elem.addEventListener("click", handleNextProcess);
    }
}

document.getElementById("form").addEventListener("click", function(e) {
    e.preventDefault();
});

humburgerBtn.addEventListener('click', handleEvent);

if (window.screen.width <= 970) {
    displayContact();
    displayServices();
    displayTechnologies();
    displayProcess();
}