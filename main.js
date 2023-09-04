/* Features that use JavaScript:

1. Hamburger button on the navbar
2. Change navbar color when scrolling
3. Erase a certain text after a certain amount of time
4. Create a mini quiz
5. Show date and time (real time)
*/


let realTime = document.getElementById('real-time');
setInterval(() => {
    let time = new Date();
    realTime.innerHTML = time.toLocaleTimeString();
}, 1000);

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

