function scrollToDoneButton() {
    var doneButton = document.getElementById('done-button');
    doneButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

var bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    window.location.href = "../html/Confirmation.html";
});

var doneButton = document.getElementById('done-button');

doneButton.addEventListener('click', function() {
    scrollToDoneButton();

    window.location.href = "../html/index.html";
});
