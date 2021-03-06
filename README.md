
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
  - [Get First Country](#get-first-country)
  - [Get Most Populated City](#get-most-populated-city)
  - [Is On The List](#is-on-the-list)


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

Você irá desenvolver a função `AssingCities`!

O Diretor disse que agora todas as cidades terão nova classicações de acordo com a quantidade de habitantes:
* *Megalopolis* - Cidades que tenham população igual ou superior a 15 milhões de habitantes;
* *Megacity* - Cidades que tenham população igual ou superior a 10 milhões e inferior a 15 milhões de habitantes;
* *Metropolis* - Cidades que tenham população inferior a 10 milhões de habitantes;

Você deverá desenvolver uma função que, ao receber um dos países como parâmetro, retorne um objeto contendo o número de cidades de acordo com a classificação acima.
Exemplo de retorno: 
```javascript
{ megalopolis: 3, megacity: 6, metropolis: 4 }
```

### Get First Country

Você irá trabalhar no arquivo `getFirstCountry.js`!

Serão criadas duas funções: `getFirstCountry` e `checkPopulation`!

A primeira função `getFirstCountry`, deverá retornar o primeiro país com menos de 250 milhões de habitantes em uma string com o texto `O primeiro país do rank com menos de 250 milhões de habitantes é: <country>!`, onde `<country>` é o primeiro país que tenha menos de 250 milhões de habitantes.

A segunda função, `checkPopulation`, recebe dois parâmetros:

* O primeiro parâmetro é um país (você deverá utilizar o país encontrado na função anterior)
* O segundo parâmetro deve ser um número, e será responsável por verificar se todas as cidades do país passado no parâmetro anterior possuem mais de 1.000.000 (um milhão) de habitantes.

O retorno da segunda função deverá ser um booleano. Exemplo de retorno:

```javascript
true
```

### Get Most Populated City

Você irá desenvolver a função `getMostPopulatedCity`.

Você deverá desenvolver uma função que, ao receber um nome de um dos Países listados no `countries_data.js`, retorne um array com o nome da cidade, estado, população e posição no rank da cidade mais populosa desse país.

O retorno da função deverá ser um array. Exemplo de retorno ao passar `india` como parâmetro da função.

```javascript
[ 'delhi', 'dehli', 11007835, 2 ]
```

### Is On The List

Você irá desenvolver a função `isOnTheList`.

É necessário verificar se existe algum país do continente Europeu e Asiático listado no rank de países dentro do arquivo `countries_data.js`.

O retorno da função deverá ser um booleano. Exemplo de retorno:

```javascript
true
true
```