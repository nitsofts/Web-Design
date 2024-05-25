// Function to scroll to the "Done" button
function scrollToDoneButton() {
    var doneButton = document.getElementById('done-button');
    doneButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Get the booking form
var bookingForm = document.getElementById('booking-form');

// Add event listener for form submission
bookingForm.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Redirect to confirmation page after form submission
    window.location.href = "../html/Confirmation.html";
});

// Get the "Done" button on the confirmation page
var doneButton = document.getElementById('done-button');

// Add event listener for "Done" button click
doneButton.addEventListener('click', function() {
    // Scroll to the "Done" button
    scrollToDoneButton();

    // Redirect to index page after clicking "Done"
    window.location.href = "../html/index.html";
});
