
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("showYear").innerHTML = "Site by MCD web development " + year;