const humburgerBtn = document.querySelector('.humburger-btn');
const humburgerContainer = document.querySelector('.hamburger-container');

const handleEvent = () => {
    humburgerContainer.classList.toggle('hamburger-container_visible');
}

humburgerBtn.addEventListener('click', handleEvent);