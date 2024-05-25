// Flag to track if details are entered
let detailsEntered = true;

// Function to calculate total price
function calculateTotalPrice() {
    // Check if details are entered
    if (!detailsEntered) {
        // Show an alert or message prompting the user to enter details first
        alert("Please enter your details before calculating the total price.");
        return;
    }

    var vehicleType = document.getElementById("vehicle-type").value;
    var pickupDate = document.getElementById("pickup-date").value;
    var returnDate = document.getElementById("return-date").value;

    // Basic pricing logic (you can adjust as needed)
    var startDate = new Date(pickupDate);
    var endDate = new Date(returnDate);
    var numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    var pricePerDay;
    switch (vehicleType) {
        case 'sedan':
            pricePerDay = 50;
            break;
        case 'suv':
            pricePerDay = 70;
            break;
        case 'luxury':
            pricePerDay = 100;
            break;
        default:
            pricePerDay = 0;
    }

    var totalPrice = pricePerDay * numberOfDays;
    document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
}

// Function to proceed for booking
function proceedForBooking() {
    // Disable date input fields
    document.getElementById("pickup-date").disabled = true;
    document.getElementById("return-date").disabled = true;

    // Show payment section
    document.getElementById("payment-section").style.display = "block";
    detailsEntered = true; // Set detailsEntered flag to true
}

// Function to proceed for payment
function proceedForPayment() {
    // Your existing code for proceeding for payment
    // For example, you can submit the form to a backend endpoint for processing
    document.getElementById("booking-form").submit();

    // Redirect to the confirmation page
    window.location.href = "confirmation.html";

    // Disable the buttons after proceeding for payment
    document.getElementById("proceed-for-payment-btn").disabled = true;
    document.getElementById("cancel-booking-btn").disabled = true;
}

// Function to cancel booking
function cancelBooking() {
    // Redirect to index page
    window.location.href = "index.html";
}
