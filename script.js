// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Skill rating bars
document.querySelectorAll('.rating').forEach(rating => {
    const percentage = rating.getAttribute('data-rating');
    rating.innerHTML = `<div class="rating-bar" style="width: ${percentage}%;">${percentage}%</div>`;
});

// Project filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project').forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
