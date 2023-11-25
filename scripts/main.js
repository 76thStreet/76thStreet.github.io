// Код для изменения изображения
const myImage = document.querySelector('img');
const myImg_1 = 'https://mdn.github.io/beginner-html-site/images/firefox-icon.png';
const myImg_2 = 'https://external-content.duckduckgo.com/iu?u=https%3A2F%2Fpngimg.com%2Fuploads%2circle%2Fcircle_PNG50.png&f=1&nofb=1&ipt=4c21cc50bdf73f2c5ad484f6c79abc5dbe507150a478e5394f38417e22e017c1&ipo=images';

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === myImg_1) {
        myImage.setAttribute('src', myImg_2);
    } else {
        myImage.setAttribute('src', myImg_1);
    }
};

// Код для отображения персонализированного приветствия
const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'MDN is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'MDN is cool, ' + storedName;
}

myButton.onclick = function () { setUserName() };