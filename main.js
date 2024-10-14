//declarar parametro dentro do parenteses o mais descritivo
//sempre que buscar id usar # para chamar ele
function tocaSom(seletorAudio) {
  // document.querySelector('#som_tecla_pom').play()
  const elemento = document.querySelector(seletorAudio); // fazemos apra guardar retorno de busca
//Js já entende que se existe um elemento não há necessidade de colocar null
  if (elemento && elemento.localName === "audio") {//se elemento e elemento tiver local name de audio
    //condição para elemento diferente de nullo e pegando o local name sendo audio executar
    //se elemento nao for nulo e for audio pode dar play
    elemento.play();
  }else{
    console.log('Elemento não encontrado ou seletor não encontrado');
  }
}
//sempre usar referencias contantes para lista de elementos
// desta forma conseguimos guardar uma lista dentro de uma referencia
//mesmo criando lista precisa atribuir individualmente a cada elemento da lista
const listaDeTeclas = document.querySelectorAll(".tecla"); //selecionar todos elementos com classe tecla

// let contador = 0; como mudamos de while para for conseguimos colocar direto nas chaves o contador

//em repetição de codigos usamos while "enquanto" criando condições até parar para nao travar laço loop
//while espera condição verdadeira ou falsa
//quando usar contador não salvem e não recarregar antes de determinar para não bugar em loop infinito
//abaixo iremos percorrer uma lista
//subistituimos a posição do elemento na lista pelo contador pois ele esta armazenando valores de acordo com codigo
//em x de colocar a quantidade de elementos da lista podemos pegar ela .length
//função com parametros

//função anonima e interesante para não ficar guardada em memoria como função normal que só sai ao fechar pagina
// vamos usar função anonima para ela não executar direto no navegador e sim quando chamar
//while depende de fator externo no caso contador que precisa ser verificada sempre
//caso precisar ter outros exemplos que usem contador ficaria repetitivo
//estrutura for = para laço em loop que faz mesma coisa
//o for pode ser declarado ainda dentro dos parenteses do for
// while(contador < listaDeTeclas.length){

//onde em sua declaração criamos a variável contadora da repetição, a condição de interrupção das repetições e a condição de incrementação da variável contadora.
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string
  // console.log(idAudio);

  tecla.onclick = function () {
    //retiramos a função tocasom para criar uma anonima para n executar direto
    tocaSom(idAudio);
  };
  // contador = contador + 1;

  tecla.onkeydown = function (evento) {
    //criamos uma função evento para validar tecla enter ou space
    if (evento.code === "Enter" || evento.code === "Space") {
      console.log(evento);
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

//funções anonimas só podem usar em contexto de que quando sao valor de 1 atributo ou referencia constante ou variavel
