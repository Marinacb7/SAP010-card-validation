# Cartão de Crédito Válido

## Índice

* [1. Introdução](#1-Introdução)
* [2. Descrição do Produto](#2-descrição-do-produto)
* [3. Principais Características](#3-principais-características)
* [4. Principais Usuários](#4-principais-usuários)
* [5. Objetivos dos Usuários](#5-objetivos-dos-usuários)
* [6. Como o Produto Resolve os Problemas dos Usuários](#6-como-o-produto-resolve-os-problemas-dos-usuários)
* [7. Instalação e Execução](#7-instalação-e-execução)
* [8. Decisões de Design](#8-decisões-de-design)
* [9. Contribuição](#9-contribuição)
* [10. Licença](#9-licença)

***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

## 2. Descrição do Produto

O Validador de Cartão de Crédito é uma aplicação web que permite aos usuários validar números de cartões de crédito. Com base em algoritmos de validação de cartão de crédito, o aplicativo verifica se um número de cartão é válido ou inválido, auxiliando os usuários a garantir a precisão dos dados inseridos em transações online e aprimorar a segurança de suas transações financeiras.

## 3. Principais Características

* Validação de Cartão de Crédito: Os usuários podem inserir o número do cartão de crédito em um campo dedicado e, ao clicar no botão "Validar", o aplicativo verifica a validade do número fornecido.
* Feedback de Validação: Após a validação, o aplicativo exibe uma mensagem indicando se o número do cartão é válido ou inválido.
* Mascaramento do Número do Cartão: O aplicativo exibe uma versão mascarada do número do cartão para preservar a privacidade e a segurança dos dados do usuário.

## 4. Principais Usuários

Os principais usuários do Validador de Cartão de Crédito são:

* Consumidores: Pessoas que desejam verificar a validade de números de cartão de crédito antes de realizar transações online, garantindo a precisão dos dados inseridos e a segurança das transações financeiras.

## 5. Objetivos dos Usuários

Os principais objetivos dos usuários em relação ao produto são:

* Verificar a validade de números de cartão de crédito antes de inseri-los em transações online.
* Evitar erros de digitação e inserção de números de cartão de crédito inválidos.
* Proteger a segurança e a privacidade dos dados financeiros.

## 6. Como o Produto Resolve os Problemas dos Usuários

O Validador de Cartão de Crédito resolve os seguintes problemas dos usuários:

1. Verificação Rápida e Confiável: O aplicativo permite aos usuários verificar instantaneamente se um número de cartão de crédito é válido, garantindo que informações corretas sejam fornecidas em transações online.
2. Prevenção de Erros: Ao verificar a validade do número do cartão de crédito, o aplicativo ajuda os usuários a evitar erros de digitação ou inserção de números inválidos, reduzindo assim o risco de transações rejeitadas ou informações incorretas.
3. Segurança dos Dados: O aplicativo não armazena nem registra os números de cartão de crédito inseridos pelos usuários, garantindo a confidencialidade e a segurança dos dados financeiros.

## 7. Instalação e Execução

Para executar o Validador de Cartão de Crédito, siga as etapas abaixo:

1. Faça o download do repositório ou clone-o para o seu computador.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o comando npm install para instalar as dependências.
5. Execute o comando npm start para iniciar o servidor.
6. Abra o navegador e acesse http://localhost:3000 para acessar o aplicativo.

## 8. Decisões de Design

Durante o desenvolvimento do Validador de Cartão de Crédito, foram tomadas as seguintes decisões de design:

* Interface Minimalista: A interface do aplicativo foi projetada de forma simples e limpa, com foco na facilidade de uso e na clareza das informações apresentadas.
* Cores: Foi selecionada uma combinação de cores roxo/lilás/branco/preto para criar um design harmonioso e agradável aos usuários.
* Responsividade: O aplicativo é responsivo e se adapta a diferentes dispositivos e tamanhos de tela, oferecendo uma experiência consistente em smartphones, tablets e computadores.

## 9. Contribuição

Se você deseja contribuir para o desenvolvimento do Validador de Cartão de Crédito, fique à vontade para enviar pull requests ou relatar problemas no repositório oficial do projeto.

## 10. Licença

O Validador de Cartão de Crédito é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
