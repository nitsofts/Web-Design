document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const confirmationDialog = document.getElementById("confirmation-dialog");
    const doneButton = document.getElementById("done-button");

    function showConfirmationDialog() {
        confirmationDialog.style.display = "block";
    }

    function resetForm() {
        contactForm.reset();
        confirmationDialog.style.display = "none";
    }

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Disable all form elements
        const formElements = contactForm.elements;
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = true;
        }
        
        showConfirmationDialog();
    });

    doneButton.addEventListener("click", function() {
        resetForm();
    });
});
