const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "The best way to predict the future is to create it. - Peter Drucker"
];


const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*8);

    quote.textContent = quotes[index]; 
    
})