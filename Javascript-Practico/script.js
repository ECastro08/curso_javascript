const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn-calculo')
const pResult = document.querySelector('#resultado')

function btnOnclick() {
    const sumaInputs = console.log(input1.value + input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;

}

