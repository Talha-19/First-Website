let toggleClickNG = document.getElementById('ng-click')
let hideNG = document.getElementById('number-guesser')

// Hide the Number Guesser summary and pic
hideNG.style.display = 'none';

// Add a click event listener to the toggle button
toggleClickNG.addEventListener('click', function() {
    // Toggle the visibility of the number-guesser div
    if (hideNG.style.display === 'none') {
        hideNG.style.display = 'block';
    } else {
        hideNG.style.display = 'none';
    }
});


let toggleClickRPS = document.getElementById('rps-click')
let hideRPS = document.getElementById('rps')

// Hide the RPS summary and pic 
hideRPS.style.display = 'none'

// add click event 
toggleClickRPS.addEventListener('click', function() {
    if(hideRPS.style.display === 'none') {
        hideRPS.style.display = 'block'
    } else {
        hideRPS.style.display = 'none';
    }
});


let toggleClickFotomatic = document.getElementById('fotomatic-click')
let hideFotomatic = document.getElementById('fotomatic')

//hide fotomatic summary and pic
hideFotomatic.style.display = 'none'

//add click event 
toggleClickFotomatic.addEventListener('click', function() {
    if(hideFotomatic.style.display === 'none') {
        hideFotomatic.style.display = 'block'
    } else {
        hideFotomatic.style.display = 'none'
    }
})