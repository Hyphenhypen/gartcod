// Array of image sources
const imageSources = ["./chrome.svg", "./desktop.svg", "./mobile.svg"];
const colours = ["#FCD34D", "#D1D5DB", "#fca5a5"];
const animationLists = ['translateY(-10%)', 'translateY(10%)', 'translateY(10%)']

let currentIndex = 0;
const body = document.body;
console.log(body);
const h1span = document.getElementById('header-h1-span');
const ticketButton = document.getElementById('ticket-button');
const span = document.querySelectorAll('#span');

const imageElement = document.getElementById('gartcod');
const daysTimer = document.getElementById('days');
const hoursTimer = document.getElementById('hours');
const minutesTimer = document.getElementById('minutes');
const secondsTimer = document.getElementById('seconds');
const timing = document.getElementById('timing');

// Function to change the image every 2 secondsconst
function changeImage() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  imageElement.src = imageSources[currentIndex];
  h1span.style.color = colours[currentIndex];
  ticketButton.style.backgroundColor = colours[currentIndex];
  span[0].style.color = colours[currentIndex];
  span[1].style.color = colours[currentIndex];
  span[3].style.color = colours[currentIndex];
  span[2].style.color = colours[currentIndex];
  span[2].style.transform = animationLists[currentIndex];
  body.style.backgroundImage = `radial-gradient(farthest-side at 50% -300%, ${colours[currentIndex]}, black)`
  console.log(body.style.backgroundImage)
}

// Initial call to changeImage function
changeImage();

// Set interval to change the image every 2 seconds
setInterval(changeImage, 2000);


const eventDate = new Date(new Date().getTime() + (20 * 24 * 60 * 60 * 1000)); // Add 20 days to the current date
// Function to calculate the time difference between now and an event that will occur 20 days later
function getTimeDifference() {
  const currentDate = new Date(); // Current date and time

  const difference = eventDate.getTime() - currentDate.getTime();

  return difference > 0 ? difference : 0; // Ensure non-negative value
}

// Function to update the timer display
function updateTimer() {
  const timeDifference = getTimeDifference();
  console.log(timeDifference)
  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  daysTimer.innerHTML = days;
  hoursTimer.innerHTML = hours;
  minutesTimer.innerHTML = minutes;
  secondsTimer.innerHTML = seconds;
}

// Initial call to updateTimer function
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);


document.addEventListener('DOMContentLoaded', function() {


// Get the image element
const imageElement = document.getElementsByClassName('tool');

// Add a class to the image to trigger the movement
imageElement.classList.add('move-image');

// After a short delay, remove the class to reset the position (optional)
setTimeout(function() {
  imageElement.classList.remove('move-image');
}, 1000); // Adjust the delay as needed
});