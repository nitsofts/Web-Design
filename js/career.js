// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get job listings
    const jobListings = document.querySelectorAll('.job-listing');

    // Add event listener to location filter dropdown
    document.getElementById('location-filter').addEventListener('change', function () {
        const selectedLocation = this.value;

        // Show or hide job listings based on selected location
        jobListings.forEach(listing => {
            const location = listing.dataset.location;
            if (selectedLocation === 'all' || location === selectedLocation) {
                listing.style.display = 'block';
            } else {
                listing.style.display = 'none';
            }
        });
    });
});
