let currentScreen = 0;
const screens = document.querySelectorAll('.screen');
let profile = {};
let totalDistance = 0;

function nextScreen() {
    screens[currentScreen].classList.remove('active');
    currentScreen++;
    screens[currentScreen].classList.add('active');
}

function saveProfile() {
    profile.name = document.getElementById('student-name').value;
    profile.age = document.getElementById('student-age').value;
    profile.class = document.getElementById('student-class').value;
    nextScreen();
}

function saveTravel() {
    const distance = parseFloat(document.getElementById('distance').value);
    if (!isNaN(distance)) {
        totalDistance += distance;
    }
    nextScreen();
}

function showSummary() {
    document.getElementById('summary').innerText = 
        `Name: ${profile.name}\nAge: ${profile.age}\nClass: ${profile.class}\nTotal Distance Travelled: ${totalDistance} km`;
}

document.addEventListener('DOMContentLoaded', () => {
    screens[currentScreen].classList.add('active');
    document.getElementById('map-screen').addEventListener('click', showSummary);
});
