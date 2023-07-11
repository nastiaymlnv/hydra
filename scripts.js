const humburgerBtn = document.querySelector('.humburger-btn');
const humburgerContainer = document.querySelector('.hamburger-container');
const contactsPaginationBtns = document.querySelectorAll('.contacts-pagination');
const contactsPaginationList = document.querySelector('.contacts-list').children;

const servicesPaginationBtns = document.querySelectorAll('.services-pagination');
const servicesPaginationList = document.querySelector('.services-list').children;

let currentContact = 0;
// let currentService = 0;

const handleEvent = () => {
    humburgerContainer.classList.toggle('hamburger-container_visible');
    humburgerBtn.classList.toggle('humburger-btn_open');
}

const handlePrevContact = () => {
    contactsPaginationList[currentContact].style.display = "none";
    if (currentContact === 0) {
        currentContact = 2;
        contactsPaginationList[currentContact].style.display = "";
    } else {
        contactsPaginationList[currentContact - 1].style.display = "";
        currentContact--;
    }
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

const handleDoubleServices = () => {
    for (let i = 0; i < servicesPaginationList.length; i++) {
        servicesPaginationList[i].classList.toggle('services-list__item_hidden');
    }
}

const displayContact = () => {
    for (let i = 1; i < contactsPaginationList.length; i++) {
        contactsPaginationList[i].style.display = "none";
    }

    for (elem of contactsPaginationBtns) {
        elem.classList.toggle('contacts-pagination_visible');
        if (elem.classList.contains('contacts-pagination_prev')) {
            elem.addEventListener("click", handlePrevContact);
        }
        else {
            elem.addEventListener("click", handleNextContact);
        }
    }
}

const displayServices = () => {
    for (let i = servicesPaginationList.length - 1; i > servicesPaginationList.length / 2 - 1; i--) {
        servicesPaginationList[i].classList.toggle('services-list__item_hidden');
    }

    for (elem of servicesPaginationBtns) {
        if (elem.classList.contains('services-pagination_prev')) {
            elem.addEventListener("click", handleDoubleServices);
        }
        else {
            elem.addEventListener("click", handleDoubleServices);
        }
    }
}

humburgerBtn.addEventListener('click', handleEvent);

if (window.screen.width <= 970) {
    displayContact();
    displayServices();
}