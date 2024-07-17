// checkout form
// constans
const ageInput = document.getElementById('age');
const message = document.getElementById('message');
const submitForm = document.getElementById('enter-button');
const visaInput = document.getElementById('visa');
const mastercardInput = document.getElementById('mastercard');
const paypalInput = document.getElementById('paypal');

function checkoutAge(age){
    submitForm.addEventListener('click', (e) => {
        // evitar que se recargue la pagina
        e.preventDefault();

        if(age.value <= 18){
            message.innerText = "You are a minor, you cannot buy!!";
        } else {
            message.innerText = "You are older!";
        }
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

checkCreditCard()
checkoutAge(ageInput)