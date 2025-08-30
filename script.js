// Slider functionality
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
});

// Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
}, 5000);

// Random Quote Generator
const quotes = [
  "A rocket is never launched to stay on Earth, and neither are your dreams",
  "Galaxies are made of countless stars, just like success is built from small steps.",
  "Darkness isn’t the end, it’s the canvas where your light stands out.",
  "Your orbit is unique don’t compare your path to another planet’s.",
  "Every fall is just gravity preparing your next leap.",
  "Supernovas are born from pressure your strength rises from challenges too.",
  "Every space mission carries risk, but it discovers new worlds.",
  "Even a burning meteor leaves a brilliant trail in the sky.",
  "Even black holes remind us gravity is real, just like your determination.",
  "You are the cosmonaut of your own life explore your universe boldly.",
  "you have your own gravity that makes u valuable.",
  "you deserve to orbit on the path You choose.",
  " Your appearance is rare and special.",
  "You're enough even as stardust, you belong to the cosmos.",
  "Like the sun, you carry energy to warm yourself and others.",
  "Every day, u grow like a star adding mass to its core.",
  "You're strong, radiant, and irreplaceable in this universe.",
  "The moon reminds us even in darkness, you can shine.",
  "It waxes and wanes, yet always returns full so will you.",
  "The moon has scars, yet it glows beautifully every night.",
  "Even surrounded by night, the moon creates light for others.",
  "like the moon sometimes hidden, but always whole.",
  "I am steady, pulling tides with silent power.",
  "Like the moon, you may be distant, but your presence is felt.",
  "You're like the ocean vast, deep, and powerful.",
  "Even when my surface is restless, I hold peace within.",
  "I am not defined by one wave, but by the endless sea I am.",
  "You're strong enough to carry storms and still remain whole.",
  "I contain treasures beneath, unseen but valuable.",
  "The ocean teaches us even small waves can shape the shore.",
  "Storms come and go, but the sea always finds its calm.",
  "The horizon reminds you: your journey has no limits.",
  "Every tide is proof that movement brings change.",
  "Depth brings mystery — so does your untapped potential.",
  "You're a star; your light never truly fades."
];

const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

// Generate quote on page load
generateRandomQuote();

// Generate quote on button click
newQuoteBtn.addEventListener('click', generateRandomQuote);