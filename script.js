(function () {
    emailjs.init("E1fIeGH9G84_gdq_y");
})();

const form = document.getElementById("contactForm");
const msg = document.getElementById("success-message");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        to_name: "Admin",
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value,
    };

    emailjs.send('service_iqxq2lf', 'template_0ghfzxn', formData).then(
        function (response) {
            msg.classList.remove('hidden');
            form.reset();
            setTimeout(() => {
                msg.classList.add('hidden');
            }, 5000);
        }
    ).catch(function (error) {
        alert('Failed to send message. Please try again');
    });
});