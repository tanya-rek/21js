let btn = document.getElementById("button");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkAll();
})

let errors = [];
let checkEachInput = (input) => {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('The input ' + input.placeholder + ' is empty.');
    }
    if (validity.tooShort) {
        errors.push('Please provide a password of at least 5 characters.');
    }
    if (validity.patternMismatch) {
        errors.push('Please enter a proper email.');
    }    
}

let checkPassword = () => {
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;
    if (password !== repeatPassword) {
        errors.push('Passwords do not match.');
    } 
}

let checkAll = () => {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkEachInput(input);
    }

    checkPassword();

    document.getElementById("warnmessage").innerHTML = errors.join('<br>')

    if (errors.length === 0){
        //setTimeout is used to slow down the alert function, because it shows before all warning messages are removed from the modal window.
        let firstName = document.getElementById('firstname').value;
        setTimeout(function() { alert(`Welcome, ${firstName}!`); }, 200);
    }
}