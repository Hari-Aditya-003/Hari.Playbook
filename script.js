// Toggle hamburger menu (your existing function)
function toggleMenu() {
  const hamburgerNav = document.getElementById('hamburger-nav');
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  hamburgerNav.classList.toggle('active');
}

// EmailJS Contact Form Handler
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init(meCRZw6uV_2yt5r2U); // Replace with your EmailJS public key

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(service_or58y3h, template_c73h17m, this)
      .then(function () {
        alert("✅ Message sent successfully!");
        form.reset();
      }, function (error) {
        alert("❌ Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  });
});
