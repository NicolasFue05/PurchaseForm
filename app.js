// checkout form
// constans
const ageInput = document.getElementById('age');
const message = document.getElementById('message');
const submitForm = document.getElementById('enter-button');
const visaInput = document.getElementById('visa');
const mastercardInput = document.getElementById('mastercard');
const paypalInput = document.getElementById('paypal');
const termsInput = document.getElementById('terms');
const passwordInput = document.getElementById('password');
const showPasswordInput = document.getElementById('show-password');

function checkoutAge(age){
    submitForm.addEventListener('click', (e) => {
        // evitar que se recargue la pagina
        e.preventDefault();


    })
}

// check the type of credit card
function checkCreditCard(){
    submitForm.addEventListener('click', (e) => {
        e.preventDefault();

        if(visaInput.checked){
            console.log("Visa");
        } else if(mastercardInput.checked){
            console.log("Mastercard")
        } else if(paypalInput.checked){
            console.log("Paypal")
        } else {
            message.innerText = "Your not subcribed!"
            console.log("You are not subcribed!!")
        }
    })
}

// Terms and Conditions
function checkTermsAndConditions(){
    submitForm.addEventListener('click', (e) => {
        if(termsInput.checked){
            console.log("Terms accepted!")
        } else{
            console.log("Terms no accepted!")
            message.innerText = "You need to accept terms and conditions!"
        }
    })
}

// function to show the password
function showPassword() {
    // Agregar evento al checkbox para cambiar la visibilidad de la contraseña
    showPasswordInput.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
}



showPassword()
checkCreditCard()
checkTermsAndConditions()
checkoutAge(ageInput)