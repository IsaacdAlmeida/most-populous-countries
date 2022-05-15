
# MOST POPULOUS COUNTRIES

## Introdução

Você é o mais novo programador júnior da ONU e foi encarregado de filtrar alguns dados
para uma apresentação sobre alguns dos países mais populosos.

O objetivo desse exercício é práticar um pouco mais sobre High-Order Functions
usando Javascript.

## Sumário

- [Introdução](#introdução)
- [Stack Utilizada](#stack-utilizada)
- [Aprendizados](#aprendizados)
- [Exercícios](#exercícios)
  - [Assign Cities](#assign-cities)


## Stack utilizada

**Front-end:** JavaScript



## Aprendizados

Você irá utilizar Higher Order Functions para criação e manipulação de arrays, escolhendo a mais adequada para obter o resultado esperado. 

Os nomes das funções e arquivos não deverão ser alterados.

Documentação necessária para realizar os exercícios:

- [.find( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [.forEach( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [.some( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [.every( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [.filter( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [.map( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [.reduce( )](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array Destructuring](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestrutura%C3%A7%C3%A3o_de_array)
- [Object Destructuring](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestrutura%C3%A7%C3%A3o_de_objeto)
- [Spread e Rest Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)


## Instruções e requisitos para fazer os exercícios

Para rodar os testes você precisará ter o [node](https://nodejs.org/en/download/) e [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instalados.

Após instalar o node e npm, você precisará usar o comando `npm install` para instalar as dependências do repositório.

Você poderá utilizar o comando `npm test` para executar todos os testes presentes ou `npm test /file` para executar os testes presentes no arquivo indicado com o respectivo caminho.

## Exercícios

### Assign Cities

Você irá trabalhar na função `AssingCities`!

O Diretor disse que agora todas as cidades terão nova classicações de acordo com a quantidade de habitantes:
* *Megalopolis* - Cidades que tenham população igual ou superior a 15 milhões de habitantes;
* *Megacity* - Cidades que tenham população igual ou superior a 10 milhões e inferior a 15 milhões de habitantes;
* *Metropolis* - Cidades que tenham população inferior a 10 milhões de habitantes;

Você deverá desenvolver uma função que, ao receber um dos países como parâmetro, retorne um objeto contendo o número de cidades de acordo com a classificação acima.
Exemplo de retorno: 
```javascript
{ megalopolis: 3, megacity: 6, metropolis: 4 }
```