document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typing effect for tagline
    const tagline = "Web Developer | Electronics Engineer | AI Enthusiast";
    let index = 0;
    function typeEffect() {
        if (index < tagline.length) {
            document.querySelector("header p").textContent += tagline.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    document.querySelector("header p").textContent = "";
    typeEffect();

    // Contact form validation & success message
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();
        const successMessage = document.querySelector(".success-message");

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
        } else {
            // Simulating form submission
            setTimeout(() => {
                successMessage.textContent = "Message sent successfully!";
                successMessage.style.color = "green";
                form.reset();
            }, 500);
        }
    });

    // Skills section hover effect
    document.querySelectorAll(".skill").forEach(skill => {
        skill.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease";
        });
        skill.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
