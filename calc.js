let buttons  = document.querySelectorAll('span');
let input = document.querySelector('input')
let string = '';
Array.from(buttons);
buttons.forEach( function(buttons) {
    buttons.addEventListener('click', function(e) {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string; 
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            input.value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string
        }
    })
})
