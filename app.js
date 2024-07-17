// checkout form
// constans
const ageInput = document.getElementById('age');
const ageMessage = document.getElementById('age-message');
const submitForm = document.getElementById('enter-button');


function checkoutAge(age){
    submitForm.addEventListener('click', (e) => {
        // evitar que se recargue la pagina
        e.preventDefault();


        if(age.value <= 18){
            ageMessage.innerText = "You are a minor, you cannot buy!!";
        } else {
            ageMessage.innerHTML = "You are older!";
        }
    })
}

checkoutAge(ageInput)