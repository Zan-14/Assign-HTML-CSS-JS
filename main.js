/* Features that use JavaScript:

1. Hamburger button on the navbar
2. Change navbar color when scrolling
3. Erase a certain text after a certain amount of time
4. Create a mini quiz
5. Show date and time (real time)
*/


// Change navbar color when scrolling and how to get tailwind class
window.addEventListener('scroll', function() {
    const headElm = document.getElementById('nav-bar');

    if (window.scrollY>0) {
        headElm.classList.add('bg-slate-400','z-[1000]','bg-opacity-50');

    } else {
        headElm.classList.remove('bg-slate-400','z-[1000]','bg-opacity-50');
    };
});