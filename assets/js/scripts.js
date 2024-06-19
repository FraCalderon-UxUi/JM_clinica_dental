// Initialize and add the map
function initMap() {
    // The location of the clinic
    const clinicLocation = { lat: -25.344, lng: 131.036 };
    // The map, centered at the clinic
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: clinicLocation,
    });
    // The marker, positioned at the clinic
    const marker = new google.maps.Marker({
        position: clinicLocation,
        map: map,
    });
}

// Event listeners for form submissions
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado.');
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Solicitud de cita enviada.');
});
