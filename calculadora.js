
    let operador = '';
    let numero1;
    let numero2;
    let resultado;


    function calculadora(){

    // entrada operador selecionado//
    operador = document.querySelector('#slcoperador').value;

    if (operador == '+') {
        somar();
    }

    if (operador == '-') {
        subtracao();
    }

    if (operador == '*') {
        multiplicacao()
    }

    if (operador == '/') {
        divisao()
    }
    }





    function somar(){
    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    resultado = numero1 + numero2;
    document.querySelector('#resultado').innerHTML = resultado;
    }


    function subtracao(){
    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    resultado = numero1 - numero2;
    document.querySelector('#resultado').innerHTML = resultado;
    }


    function multiplicacao(){
    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    resultado = numero1 * numero2;
    document.querySelector('#resultado').innerHTML = resultado;
    }


    function divisao(){
    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    resultado = numero1 / numero2;
    document.querySelector('#resultado').innerHTML = resultado;
    }


// tratamento das imagens dos operadores

let select = document.querySelector('#slcoperador');

select.addEventListener('change',function (){
    
    let imgOperacao = document.querySelector('#imgOperacao');
    let op = select.options[select.selectedIndex].value;

    if(op == '+'){
        imgOperacao.setAttribute('src', 'img/add.png');
    }

    if(op == '-'){
        imgOperacao.setAttribute('src', 'img/sub.png');
    }

    if(op == '*'){
        imgOperacao.setAttribute('src', 'img/multi.png');
    }

    if(op == '/'){
        imgOperacao.setAttribute('src', 'img/div.png');
    }
});


    // função limpar formulário

    function limpar(){

    let imgOperacao = document.querySelector('#imgOperacao');
    document.querySelector('#numero1').value = '';
    document.querySelector('#numero2').value = '';
    document.querySelector('#resultado').innerHTML = '****';
    imgOperacao.setAttribute('src', '')
    document.querySelector('#slcoperador').value = '';
}