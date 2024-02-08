// Array de objetos contendo perguntas, respostas e a resposta correta
const perguntas = [
    {
        // Pergunta sobre a sintaxe correta para declarar uma variável em JavaScript
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        // Array de respostas possíveis para a pergunta
        respostas: [
            "var nomeVariavel;",
            "variavel nomeVariavel;",
            "let nomeVariavel;"
        ],
        // Índice da resposta correta no array de respostas
        correta: 2
    },
    {
        pergunta: "Qual destes métodos é usado para imprimir algo no console?",
        respostas: [
            "console.log()",
            "print()",
            "document.write()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário aqui",
            "<!-- Comentário aqui -->",
            "/* Comentário aqui */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação de valores",
            "Atribuição de valores",
            "Comparação de tipos e valores"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
        respostas: [
            "Array",
            "Object",
            "String"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes loops é usado para iterar sobre elementos de um array em JavaScript?",
        respostas: [
            "for",
            "while",
            "for...of"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "Converter uma string em um número inteiro",
            "Converter uma string em uma string maiúscula",
            "Converter um número inteiro em uma string"
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes eventos ocorre quando o usuário clica em um elemento HTML?",
        respostas: [
            "onchange",
            "onclick",
            "onmouseover"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
        respostas: [
            "4",
            "22",
            "Erro"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'push()' em arrays JavaScript?",
        respostas: [
            "Remover um elemento do final do array",
            "Adicionar um elemento ao início do array",
            "Adicionar um elemento ao final do array"
        ],
        correta: 2
    }
];

// Seleciona o elemento HTML com o id 'quiz' e armazena na variável 'quiz'
const quiz = document.querySelector('#quiz')
// Seleciona o primeiro elemento 'template' no documento HTML e armazena na variável 'template'
const template = document.querySelector('template')

// Cria um novo conjunto vazio para armazenar as respostas corretas.
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    // loop ou laço de repetição - serve para entrar no array e cada item do array ele fazer algo.
for(const item of perguntas) {
    // Clona o conteúdo do template para criar um novo item de quiz
  const quizItem = template.content.cloneNode(true)
    // Define o texto do elemento <h3> para a pergunta atual
  quizItem.querySelector('h3').textContent = item.pergunta
  
    // Loop através de cada resposta e cria um novo elemento de definição para cada uma
  for(let resposta of item.respostas) {
    // Clona o elemento de termo de definição (dt) do template para criar um novo para cada resposta
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // Define o texto do elemento <span> dentro do termo de definição para a resposta atual
    dt.querySelector('span').textContent = resposta
    // Seleciona o primeiro elemento 'input' dentro do elemento 'dt' e define seu atributo 'name'
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    // Define o valor do elemento 'input' dentro do elemento 'dt' como o índice da resposta atual no array de respostas
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    // Define um evento de mudança para o elemento 'input' dentro do elemento 'dt'
    // Esse evento é acionado quando o valor do elemento 'input' é alterado
    dt.querySelector('input').onchange = (event) => {
    // Verifica se o valor selecionado (resposta) é igual ao índice da resposta correta para a pergunta atual
       const estaCorreta = event.target.value == item.correta 

    // Remove o item do conjunto 'corretas' se não estiver correta.
        corretas.delete(item)
    // Se a resposta estiver correta, adiciona o item ao conjunto 'corretas'.   
        if (estaCorreta) {
        corretas.add(item)
        }

        // Atualiza o total de respostas corretas exibido na tela
        mostrarTotal.textContent  = corretas.size + ' de ' + totalDePerguntas
    }
    // Adiciona o elemento de termo de definição (dt), representando uma resposta, à lista de definição (dl) dentro do quizItem
    quizItem.querySelector('dl').appendChild(dt)
}

    // Remove o primeiro elemento de termo de definição (dt) dentro da lista de definição (dl) no quizItem
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
