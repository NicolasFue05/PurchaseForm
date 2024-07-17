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
    if(age.value <= 18){
            return false
    } else{
        return true
    }
}

// check the type of credit card
function checkCreditCard(){
    if(visaInput.checked){
        console.log("Visa");
        return true
    } else if(mastercardInput.checked){
        console.log("Mastercard")
        return true
    } else if(paypalInput.checked){
        console.log("Paypal")
        return true
    } else {
        e.preventDefault();
        message.innerText = "Your not subcribed!"
        console.log("You are not subcribed!!")
        return false
    }
}

// Terms and Conditions
function checkTermsAndConditions(){
        if(termsInput.checked){
            console.log("Terms accepted!")
            return true
        } else{
            console.log("Terms no accepted!")
            message.innerText = "You need to accept terms and conditions!"
            return false
        }
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

// Show a message if the purchase if correct
function verifyPurchase(){
    submitForm.addEventListener('click', (e) => {
            // checkout age
        if(checkoutAge(ageInput) && checkCreditCard() && checkTermsAndConditions()){
            message.innerText = "Purchase Complete!";
        } else {
            e.preventDefault()
            message.innerText = "Error to Purchase!"
        }
    })
}


verifyPurchase()
showPassword()