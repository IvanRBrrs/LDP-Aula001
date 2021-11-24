
// Definir variavel caixa //
let caixa = document.getElementById('caixa');
// Adicionar eventos com mouse na variavel caixa //
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// Criar funçao da variavel clicar // innerHtml o = sobreescreve e += adiciona o texto ao lado //
function clicar (){
    caixa.innerHTML = 'voce clicou';
    caixa.style.background = 'red';
    caixa.style.color = 'white';
}

// Criar funçao da variavel entrar (Ativa quando o mouse passar dentro da Div) //
function entrar (){
    caixa.innerHTML = 'Voce Entrou';
    caixa.style.background = 'yellow';
    caixa.style.color = 'black';
}

// Criar funçao da variavel sair (Ativa quando tirar o mouse de dentro da Div) //
function sair (){
    caixa.innerHTML = 'Passe o mouse';
    caixa.style.background = 'green';
    caixa.style.color = 'white';
    caixa.style.fontWeight = '900';
}

// Pegar a data do computador //
let agora = new Date();
// Pegar dia da semana em valores numericos //
let diaSemana = agora.getDay();
// Pegar o Id da Div //
let data = document.getElementById('data');

switch(diaSemana){
    case 0:
        console.log('Domingo');
        data.innerHTML = 'Domingo';
        data.style.background = ' gray';
    break;
    case 1:
        console.log('Segunda');
        data.innerHTML = 'Segunda';
        data.style.background = ' yelow';
    break;
    case 2:
        console.log('Terça');
        data.innerHTML = 'Terça';
        data.style.background = ' red';
    break;
    case 3:
        console.log('Quarta');
        data.innerHTML = 'Quarta';
        data.style.background = ' blue';
    break;
    case 4:
        console.log('Quinta');
        data.innerHTML = 'Quinta';
        data.style.background = ' pink';
    break;
    case 5:
        console.log('Sexta');
        data.innerHTML = 'Sexta';
        data.style.background = ' gold';
    break;
    case 6:
        console.log('Sabado');
        data.innerHTML = 'Sabado';
        data.style.background = ' darkblue';
    break;
    default:
        console.log('Dia invalido');
    break;
}

















