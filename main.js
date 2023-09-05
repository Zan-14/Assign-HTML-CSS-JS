/* Features that use JavaScript:

1. Hamburger button on the navbar
2. Change navbar color when scrolling
3. Erase a certain text after a certain amount of time
4. Create a mini quiz
5. Show current time (real time)
*/

// Prompt and Alert before starting the game
// let rules = prompt("How many times do you refresh this page? ( 0 - 10 )");

// if (rules >= 0 && rules < 4) {
//     alert("Okay, go ahead!")

// } else if (rules >=4 && rules <= 10) {
//     alert("You have lost! The limit is 3 times :(")

// } else {
//     alert("Refresh the page again and input the correct number, your chance is limited")
// }


// Show local time
let realTime = document.getElementById('real-time');
setInterval(() => {
    let time = new Date();
    realTime.innerHTML = time.toLocaleTimeString();
}, 1000);


//Hamburger button function
const bgrButton = document.querySelector('#burger-button');
const svgBurger = document.querySelector('#burger-svg');
const svgClose = document.querySelector('#close-svg');

bgrButton.addEventListener('click',function () {
    const navOptions = document.querySelector('#nav-options');

    if (svgClose.classList.contains('hidden') && navOptions.classList.contains('opacity-0')) {
        svgBurger.classList.add('hidden');
        svgClose.classList.remove('hidden');
        navOptions.classList.remove('opacity-0');

    } else {
        svgClose.classList.add('hidden');
        svgBurger.classList.remove('hidden');
        navOptions.classList.add('opacity-0');
    }
});


// Change navbar color when scrolling and how to get tailwind class
let headElm = document.getElementById('nav-bar');

window.addEventListener('scroll', function() {
    let headElm = document.getElementById('nav-bar');

    if (window.scrollY>0) {
        headElm.classList.add('bg-slate-800');
        if (svgBurger.classList.contains('hidden')) {
            headElm.classList.add('bg-opacity-100');

        } else {
            headElm.classList.replace('bg-opacity-100', 'bg-opacity-50');
        }

    } else {
        headElm.classList.remove('bg-slate-800','bg-opacity-50');
    };
});


// Erase text from the Hero Section
setTimeout(function() {
    const heroText = document.getElementById('hero-text');
    const hiddenText = document.getElementById('hero-hidden-text');
    heroText.classList.add('hidden');
    hiddenText.classList.remove('hidden');
}, 7000);


//
