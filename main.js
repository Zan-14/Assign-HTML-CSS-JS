/* 
Version 2

I am using CLI Tailwind (Not CDN)

Features that I will build using JavaScript:

1. Authentication features (Registers > Login and Passwords)
description: 
a. Register username and password before login : > Set the rules of the data (minimal letters and numbers)
b. Login with the data that matches with the registration: Set the rules with data must be filled and correct
c. Set 



List of previous versions
* Show current time (real time)
- Get elements from DOM
- setInterval function 

* Hamburger button
- Get elements from DOM
- addEventListener method with if else statement in it
- Change the SVG element every click (function in number 4)

* Change navbar color when scrolling 
- Get elements from DOM
- window scrollY function
- Nested if statement

* Erase a certain text after a certain amount of time
- setTimeout function
- Get elements from DOM
- Manipulate tailwind class

* Create a mini quiz
- Get elements from DOM
- for loop with nested function in it
- Locate date from an array (DOM Note List)
- innerHTML property
*/

// 1. Prompt and Alert before starting the game
let rules = prompt("How many times do you refresh this page? ( 0 - 10 )");

if (rules >= 0 && rules < 4 && rules != "") {
    alert("Okay, go ahead!")

} else if (rules >=4 && rules <= 10) {
    alert("You have lost! The limit is 3 times :(")

} else {
    alert("Refresh the page again and input the correct number, your chance is limited")
}


// 2. Show local time
let realTime = document.getElementById('real-time');
setInterval(() => {
    let time = new Date();
    realTime.innerHTML = time.toLocaleTimeString();
}, 1000);


//3. Hamburger button function
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


// 4. Change navbar color when scrolling and how to get tailwind class
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


// 5. Erase text from the Hero Section
setTimeout(function() {
    const heroText = document.getElementById('hero-text');
    const hiddenText = document.getElementById('hero-hidden-text');
    heroText.classList.add('hidden');
    hiddenText.classList.remove('hidden');
}, 7000);


// 6. Make a quiz

// Quiz 1
let questionHidden1 = document.querySelector('#question-box-1');
let questionHidden2 = document.querySelector('#question-box-2');
let questionHidden3 = document.querySelector('#question-box-3');
let questionHidden4 = document.querySelector('#question-box-4');
let questionHidden5 = document.querySelector('#question-box-5');
let buttonQuizHidden = document.querySelector('#button-quiz-2');

let questionOne = document.querySelectorAll('input[name="question1"]');
let questionTwo = document.querySelectorAll('input[name="question2"]');
let questionThree = document.querySelectorAll('input[name="question3"]');
let questionFour = document.querySelectorAll('input[name="question4"]');
let questionFive = document.querySelectorAll('input[name="question5"]');

// Quiz 2
let questionHidden21 = document.querySelector('#question-box-6');
let questionHidden22 = document.querySelector('#question-box-7');
let questionHidden23 = document.querySelector('#question-box-8');
let questionHidden24 = document.querySelector('#question-box-9');
let questionHidden25 = document.querySelector('#question-box-10');
let buttonQuizHidden2 = document.querySelector('#button-quiz-result');

let questionOne2 = document.querySelectorAll('input[name="question6"]');
let questionTwo2 = document.querySelectorAll('input[name="question7"]');
let questionThree2 = document.querySelectorAll('input[name="question8"]');
let questionFour2 = document.querySelectorAll('input[name="question9"]');
let questionFive2 = document.querySelectorAll('input[name="question10"]');

// Result section
let totalScorePage = document.querySelector('#result')

// Function to move on to the next next question and to get the result
let score = 0;

for (let i = 0; i <= 3; i++) {
    
    // Quiz 1
    questionOne[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden1.classList.add('hidden');
        questionHidden2.classList.remove('hidden');
        if (questionOne[3].checked) {
            score++;
        }
    }});
    questionTwo[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden2.classList.add('hidden');
        questionHidden3.classList.remove('hidden');
        if (questionTwo[2].checked) {
            score++;
        }
    }});
    questionThree[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden3.classList.add('hidden');
        questionHidden4.classList.remove('hidden');
        if (questionThree[0].checked) {
            score++;
        }
    }});
    questionFour[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden4.classList.add('hidden');
        questionHidden5.classList.remove('hidden');
        if (questionFour[2].checked) {
            score++;
        }
    }});
    questionFive[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden5.classList.add('hidden');
        buttonQuizHidden.classList.remove('hidden');
        if (questionFive[1].checked) {
            score++;
        }
    }});
    
    // Quiz 2
    questionOne2[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden21.classList.add('hidden');
        questionHidden22.classList.remove('hidden');
        if (questionOne2[0].checked) {
            score++;
        }
    }});
    questionTwo2[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden22.classList.add('hidden');
        questionHidden23.classList.remove('hidden');
        if (questionTwo2[3].checked) {
            score++;
        }
    }});
    questionThree2[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden23.classList.add('hidden');
        questionHidden24.classList.remove('hidden');
        if (questionThree2[1].checked) {
            score++;
        }
    }});
    questionFour2[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden24.classList.add('hidden');
        questionHidden25.classList.remove('hidden');
        if (questionFour2[2].checked) {
            score++;
        }
    }});
    questionFive2[i].addEventListener('change', function(e) {
        if (e.target.checked) {
        questionHidden25.classList.add('hidden');
        buttonQuizHidden2.classList.remove('hidden');
        if (questionFive2[0].checked) {
            score++;
        }
    }});
};

function result() {
    let totalScore = document.getElementById('total-score')
    totalScorePage.classList.remove('hidden');
    totalScore.innerHTML = `${score} / 10`;
};

