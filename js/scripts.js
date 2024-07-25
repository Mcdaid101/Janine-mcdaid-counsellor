const d = new Date();
let year = d.getFullYear();
document.getElementById("showYear").innerHTML = "Site by MCD web development " + year;


const quotes = [
    {
      quote: "The greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind.",
      author: " - William James."
    },
    {
      quote: "You are not a drop in the ocean. You are the entire ocean in a drop",
      author: " - Rumi."
    },
    {
      quote: "The curious paradox is that when I accept myself just as I am, then I can change",
      author: " - Carl Rogers."
    },
    {
      quote: "Healing takes time, and asking for help is a courageous step",
      author: " - Mariska Hargitay."
    },
    {
      quote: "Out of your vulnerabilities will come your strength",
      author: " - Sigmund Freud."
    }
  ];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const randomQuote = getRandomQuote();
document.getElementById("quote").innerHTML = randomQuote.quote + randomQuote.author;


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-section');
        observer.unobserve(entry.target); // Stop observing after adding the class
      }
    });
  });

  const section = document.querySelector('#animated-section');
  observer.observe(section);
});