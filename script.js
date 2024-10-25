// Function to display the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Show and hide the appointment form
function openAppointmentForm() {
    document.getElementById("appointmentForm").style.display = "block";
}

function closeAppointmentForm() {
    document.getElementById("appointmentForm").style.display = "none";
}
