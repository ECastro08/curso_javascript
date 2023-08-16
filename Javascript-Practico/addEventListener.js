const h1 = document.querySelector('h1');
const form = document.getElementById('form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn-calculo')
const pResult = document.getElementById('resultado')

//btn.addEventListener('click', btnOnclick);
/*form.addEventListener('submit', sumarInputValues);


function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
*/

// otra forma 

btn.addEventListener('click', btnOnclick);
function sumarInputValues(event) {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}