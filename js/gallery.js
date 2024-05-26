document.addEventListener('DOMContentLoaded', function() {
    var galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var car = this.getAttribute('data-car');
            window.location.href = '../html/vehicle.html?car=' + car; // Adjust path to vehicle.html
        });
    });
});
