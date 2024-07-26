const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
    enunciado: "Qual desses não é um exemplo de IA?",
    alternativas: [
        {
            texto:"Assistente Virtual",
            afirmacao:"isso aí! sua resposta esta correta. A IA é uma assistente virtual utilizada para auxiliar os humanos! "
        },
        {
            texto:"Rede Social",
            afirmacao:"Sua resposta está errada! a rede social não é uma inteligencia artificial pois não responde perguntas e não resolve problemas!"
        },
       
    ]
   },
  
   {
    enunciado: "Qual é o papel da IA na automação de processos?",
    alternativas: [
        {
            texto:"Substituir completamente os humanos",
            afirmacao:"Sua resposta está errada! A IA também depende dos humanos para receber atualizações, e ela somente auxilia os humanos!"
        },
        {
            texto:"Auxiliar os humanos em tarefas repetitivas",
            afirmacao:"Sua resposta está correta! A IA auxilia os humanos nas atividades diárias e repetitivas, como tirar duvidas por exemplo!"
        },
       
    ]
   },
   {
    enunciado: "O que significa a sigla IA?",
    alternativas: [
        {
            texto:"Instituto Ambiental",
            afirmacao:"errado! Apesar de serem parecidas, a sigla do instituto ambiental é OIA."
        },
        {
            texto:"Inteligência Artificial",
            afirmacao:"Corrreto! A sigla IA é a abreviação de Inteligencia artificial!"
        },
       
    ]
   },
   {
    enunciado: "A ética na IA trata de:",
    alternativas: [
        {
            texto:"Garantir que a IA seja usada de forma responsável e ética.",
            afirmacao:"Exato! A IA sempre se preocupa cpm sua ética!"
        },
        {
            texto:"Desenvolver IA sem considerar suas implicações éticas.",
            afirmacao:"Não! A IA se importa bastante com sua ética!"
        },
        
    ]
   },
   {
    enunciado: "IA fraca se refere a:",
    alternativas: [
        {
            texto: "IA projetada para uma tarefa específica.",
            afirmacao:"certo! A IA fraca é algo projetado para realizar tarefas repetitivas!"
        },
        {
            texto:"IA para multiplas tarefas.",
            afirmacao:"Errado! Esse é um exemplo de IA forte! "
        },
        
    ]
   }, 
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionda(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    
}
}
function respostaSelecionda(opcaoSelecionada){
    const  afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=  afirmacoes + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "em 2049... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
