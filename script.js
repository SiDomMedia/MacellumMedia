
document.addEventListener("DOMContentLoaded", function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionButton = item.querySelector(".faq-question");
        const answerDiv = item.querySelector(".faq-answer");

        questionButton.addEventListener("click", () => {
            // Toggle active class for styling if needed
            questionButton.classList.toggle("active");

            // Toggle answer visibility
            if (answerDiv.style.maxHeight && answerDiv.style.maxHeight !== "0px") {
                answerDiv.style.maxHeight = "0px";
                answerDiv.style.paddingTop = "0";
                answerDiv.style.paddingBottom = "0";
            } else {
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                answerDiv.style.paddingTop = "15px"; // Match p padding
                answerDiv.style.paddingBottom = "15px"; // Match p padding
            }
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("#main-header nav ul li a[href^=\"#\"]");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Smooth scrolling for CTA buttons linking to sections
    const ctaLinks = document.querySelectorAll("a.cta-button[href^=\"#\"]");
     ctaLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Submission (Placeholder)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            // In a real scenario, you would handle form submission here (e.g., AJAX request)
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        });
    }
});

