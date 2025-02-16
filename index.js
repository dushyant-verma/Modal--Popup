// Get a modal element
var modal = document.getElementById('myModal');

// Get open modal button
var openModalBtn = document.getElementById('openModalBtn');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
openModalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal() {
    modal.style.display = 'block';

}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}