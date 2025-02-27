document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hide all content sections except home initially
    const contentSections = document.querySelectorAll('.content > div');
    contentSections.forEach(section => {
        if (!section.classList.contains('home-content')) {
            section.style.display = 'none';
        }
    });

    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all sections
            contentSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the clicked section
            const sectionToShow = document.querySelector(`.${this.getAttribute('href').substring(1)}-content`);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
            }
        });
    });
});

function showContactForm() {
    document.getElementById('contact-form').style.display = 'block';
    document.querySelector('.contact-button').style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
    
    // Optional: Reset form
    event.target.reset();
}

async function submitStory(event) {
    event.preventDefault();
    console.log('Form submitted');
    
    const form = document.getElementById('storyForm');
    
    // Show submission confirmation
    alert('Thank you for submitting your story!');
    form.reset();
} 