const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial está substituindo completamente os empregos humanos?",
        alternativas: [
            {
                texto: "A IA está substituindo muitos empregos em diversas indústrias.",
                afirmacao: "afirmacao"
            },
            {
                texto:"A IA nunca substituirá empregos humanos, apenas os complementará",
                afirmacao: "afirmacao"
        
            } mostraPergunta();
      ]
    },
    {
        enunciado: "A inteligência artificial pode ser usada para melhorar o atendimento ao cliente de forma mais eficiente?",
        alternativas: [
            {
                texto:"A IA pode oferecer respostas rápidas e precisas para clientes, melhorando a experiência.",
                afirmacao: "afirmacao"
            },
            {
                texto:" A IA nunca será eficaz no atendimento ao cliente, sempre precisa de humanos.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " A IA pode ajudar a prever doenças e tratamentos médicos personalizados?",
        alternativas: [
            {
                texto:" A IA pode analisar grandes volumes de dados médicos e ajudar no diagnóstico precoce.",
                afirmacao:"afirmacao"
            },
            {
                texto: " A IA pode analisar grandes volumes de dados médicos e ajudar no diagnóstico precoce.",
                afirmacao:"afirmacao"
            }
           
        ]
    },
    {
        enunciado: "A inteligência artificial está contribuindo para o aumento da privacidade online das pessoas?",
        alternativas: [
            {
                texto:"A IA pode ser usada para melhorar a segurança de dados pessoais através de criptografia e detecção de ameaças.",
                afirmacao:"afirmacao"
            },
            {
                texto:"A IA sempre comprometerá a privacidade online, tornando os dados das pessoas mais vulneráveis.",
                afirmacao:"afirmacao"
            }
           
        ]
    },
    {
        enunciado: "A inteligência artificial está ajudando a criar soluções mais eficientes para a mobilidade urbana?",
        alternativas: [
            {
                texto:"A IA é usada em sistemas de transporte inteligente para otimizar o tráfego e melhorar o transporte público.",
                afirmacao:"afirmacao"
            },
            {
                texto: " A IA nunca terá impacto no transporte urbano, já que as soluções tradicionais são suficientes.",
                afirmacao:"afirmacao"
            }
        ]
    }
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta() {
    if (atual>= perguntas.length){
        mostraResultado ();
   return;
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
}
mostraPergunta();