const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const parrafo = document.querySelector('#result');

//form.addEventListener('submit',sumarInputValue);
boton.addEventListener('click',sumarInputValue);

function sumarInputValue(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    parrafo.innerText = "Resultado: " + sumaInputs;
}

