
# Trybers and Dragons
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

Trybers and Dragons é uma estrutura de jogo de interpretação de papel, mais conhecido como jogo de RPG (Role Playing Game), onde foi aplicado os conceitos aprendidos sobre SOLID e POO. 

# Desenvolvimento
O projeto foi desenvolvido com Eslint e utilizando Typescript.
# Aprendizados
Nesse projeto, O objetivo era colocar em prática o conhecimento adquirido sobre POO e SOLID.



# Contexto
No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma raça definida.

As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados monstros que não possuem uma raça específica, mas podem lutar.

Alguns seres também possuem uma energia e, ao treinarem o uso da energia, passam a possuir um arquétipo. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.


### Classe Race

No universo de Trybers and Dragons - T&D, quase todos os seres racionais têm uma raça e, embora todas as raças de personagens sejam humanoides, cada uma tem as suas particularidades.

A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos habitantes desse universo.

Para entender melhor um pouco da incrível diversidade e as características únicas de algumas das raças de T&D, a missão de criar a classe abstrata Race foi cumprida.
### Classes que herdam de Race

Já foi dito anteriormente que há uma diversidade de raças neste universo. Por isso foi criado classes para quatro raças que existem no mundo de T&D.

- A raça Dwarf que tem como vida máxima  80 pontos;

- A raça Elf que tem como vida máxima  99 pontos;

- A raça Halfling que tem como vida máxima  60 pontos;

- A raça Orc que tem como vida máxima  80 pontos;

### Interface Energy

Energia é um atributo vital para a maioria dos seres. No contexto de Trybers and Dragons, a energia gasta ao se andar, nadar, escalar ou lutar é chamada de "stamina" . Contudo, esse universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta é chamada de "mana".
A missão da vez foi fazer a Interface Energy para tornar possível o uso destes dois tipos de energia: "stamina" e "mana".
### Classe Archetype

Dentro do nosso universo, os seres têm talentos especiais e cada um desses talentos tem o seu nome dentro de T&D. Aqui temos alguns atributos super legais e necessários, que representam o nome, a potência do seu ataque especial e o custo energético para utilizá-lo. Para isso ser possível, foi criada a classe abstrata Archetype.

### Classes que herdam de Archetype

Como você pode imaginar, há diversos arquétipos diferentes no mundo de Trybers and Dragons, cada um com as suas peculiaridades e alinhamentos.
Temos quatros arquétipos, Cada arquétipo possui a habilidade de causar danos em seus inimigos de forma diferente.

  - `Mage` 🧙‍♀️;
  - `Necromancer` ☠️; 
  - `Warrior` ⚔️;
  - `Ranger` 🍃.

    - Os arquétipos `Mage`🧙‍♀️ e `Necromancer`☠️ causam dano por meio de magia, através do uso de `mana`;
    - Os arquétipos `Warrior` ⚔️ e `Ranger` 🍃 causam dano por meio de sua força, usando `stamina`.
### Interface Fighter

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos, convicções e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Para fixar bem esse conceito foi criado a interface Fighter:

- A interface possui os atributos:
  - `lifePoints`,
  - `strength`,
  - `defense`,
  - `energy`,
- A interface possui os métodos:
  - `attack()`
  - `special()`
  - `levelUp()`
  - `receiveDamage()`

### Classe Character

Agora já temos tanto as nossas raças quanto os nossos arquétipos e interfaces definidos. Mas antes de sair por aí entrando em tavernas e calabouços, temos que **criar uma personagem**!
Para isso foi criado a class Character.

Cada personagem pode ser composta tanto por uma raça quanto por um arquétipo. Essa classe reuni um conjunto de características que terão o poder de fazer desse ser o mais único possível. Além disso, os personagens  possuem tudo o que se espera de alguém que luta.
### Interface SimpleFighter

No nosso universo de T&D, nem todo mundo que luta possui capacidades avançadas, como ter uma defesa ou realizar ataques especiais.

Por isso foi criada uma Interface SimpleFighter utilizando o conceito de Segregação de interfaces.

- A interface possui os atributos:
  - `lifePoints`,
  - `strength`,
- A interface possui os métodos:
  - `attack()`;
  - `receiveDamage()`;

### Classe Monster

Se existem seres que implementam a `interface Fighter`, deve existir seres que implementam a `interface SimpleFighter` também, não é ? Estes são os `Monsters`, criaturas bestiais que apenas atacam outros seres.

### Classe PVP

A ideia do mundo de T&D ser completamente pacífico provavelmente já deve ter desaparecido da sua mente depois das  últimas *quests*. 
Nesse mundo, existem lutas, muitas delas inclusive épicas, denominadas `Battles` (batalhas). Sua representação geral/abstrata já foi fornecida anteriormente, entretanto, existem tipos específicos de batalhas. Uma dessas batalhas chamamos de `PVP`, batalhas entre personagens (ou *player versus player*), que só podem acontecer entre personagens lutadores (`Fighters`). 🧙‍♀️ ⚔️ 🧙‍♂️.

### Classe PVE

Nem todas as batalhas são entre personagens lutadoras (`Character`), afinal, há perigos à solta que espreitam ao escurecer, em densas florestas ou em calabouços profundos.

Monstros representam alguns destes perigos, assim, temos as batalhas do tipo `PVE`(*player versus environment*), em que personagens (sempre do tipo `Fighter`) podem lutar contra um ou mais monstros assustadores (`SimpleFighter`). Parece interessante, não é? E para tornar isso possível foi criada a class PVE! 🧙‍♀️ ⚔️ 👾👹👻

### Classe Dragon

Seria muito estranho se esse mundo se chamasse Trybers and Dragons e não existissem `Dragons`, não é mesmo?
Estes seres magníficos são representados como monstros aqui, ou seja um Dragon é extensão de uma class Monster, mas com a característica especial de possuírem elevados valores de pontos de vida.

### Arquivo `index.ts`

Todo o mundo de T&D já foi modelado, maravilha!

Agora repare que, por mais que a gente saiba o que são `Monster`, `Character`, `Dragon`, `PVE`, etc, nenhum desses foi visto em ação. Então para completar essa aventura e dar vida aos personagens, foram instanciadas algumas classes no arquivo `index.ts`, dando vida a esse mundo.


## Para visualizar o projeto localmente

1. Clone o repositório
  * `git clone git@github.com:imgeff/trybers-and-dragons.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybers-and-dragons`



    
## Tecnologias utilizadas

**Back-end:** Node.js, Typescript

## Feedback

Se você tiver algum feedback, por favor mande uma mensagem em  https://www.linkedin.com/in/imgeff/

