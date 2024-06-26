let detailsEntered = true;

function calculateTotalPrice() {
    if (!detailsEntered) {
        alert("Please enter your details before calculating the total price.");
        return;
    }

    var vehicleType = document.getElementById("vehicle-type").value;
    var pickupDate = document.getElementById("pickup-date").value;
    var returnDate = document.getElementById("return-date").value;

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

function proceedForBooking() {
    document.getElementById("pickup-date").disabled = true;
    document.getElementById("return-date").disabled = true;

    document.getElementById("payment-section").style.display = "block";
    detailsEntered = true; 
}

function proceedForPayment() {
    document.getElementById("booking-form").submit();

    window.location.href = "confirmation.html";

    document.getElementById("proceed-for-payment-btn").disabled = true;
    document.getElementById("cancel-booking-btn").disabled = true;
}

function cancelBooking() {
    window.location.href = "../html/index.html";
}
