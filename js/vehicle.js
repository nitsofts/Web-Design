document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var car = params.get('car');

    var carDetails = {
        'car1': {
            'name': 'Car 1 - Sedan',
            'description': 'This is a description of Car 1, a comfortable sedan perfect for city driving.',
            'price': '$50 per day',
            'image': '../images/car1.jpg'
        },
        'car2': {
            'name': 'Car 2 - SUV',
            'description': 'This is a description of Car 2, a spacious SUV ideal for family trips.',
            'price': '$70 per day',
            'image': '../images/car2.jpg'
        },
        'car3': {
            'name': 'Car 3 - Luxury',
            'description': 'This is a description of Car 3, a luxurious car for special occasions.',
            'price': '$100 per day',
            'image': '../images/car3.jpg'
        }
        // Add more car details here
    };

    var carDetail = carDetails[car];

    if (carDetail) {
        document.getElementById('car-details-content').innerHTML = `
            <h2>${carDetail.name}</h2>
            <img src="${carDetail.image}" alt="${carDetail.name}">
            <p>${carDetail.description}</p>
            <p><strong>Price:</strong> ${carDetail.price}</p>
        `;
    } else {
        document.getElementById('car-details-content').innerHTML = '<p>Car details not found.</p>';
    }

    // Add event listeners for buttons
    document.getElementById('book-now-button').addEventListener('click', function() {
        window.location.href = '../html/reservation.html?car=' + car; // Adjust path to booking.html
    });

    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = '../html/gallery.html'; // Adjust path to gallery.html
    });
});
