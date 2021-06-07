// select elemts from the DOM that we are going to uise

// using query selctor, you can select anythong from the DOM (.class, #id, paragraph, ul, etc)
const container = document.querySelector('.container');

// using querySelectorAll selects all elements with this class. it puts them into a node list (similat to an array)
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // exclude the occupied seats

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// We want the value inside the movieSelect element and turn it into a number (use the + sign)
let ticketPrice = +movieSelect.value;

// functions should be above the event listeners

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Event Listeners
//Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
