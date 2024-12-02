"# Bridge(Ponte) Pattern

O Bridge Pattern é um padrão de design estrutural que separa uma abstração (o conceito geral) da sua implementação (o funcionamento real), permitindo que ambas possam evoluir de forma independente. Ele é útil quando você tem dois ou mais aspectos que variam em um sistema e quer evitar criar muitas classes ou dependências desnecessárias.


Como o método funciona?

1- Divisão em duas hierarquias:

A Abstração define a interface principal ou a lógica de alto nível (por exemplo, um "Controle Remoto").
A Implementação define os detalhes específicos que podem variar (por exemplo, os "tipos de TV" que o controle opera).

2- Conexão via ponte:

A abstração mantém uma referência à implementação e delega tarefas específicas para ela, garantindo flexibilidade.

3- Criação modular:

Isso permite criar novas implementações ou abstrações sem impactar o código existente.

Por que usar o Bridge Pattern?

1- Separar responsabilidades:

Ele divide a lógica geral (abstração) dos detalhes (implementação), promovendo um código mais limpo e organizado.

2- Facilidade de manutenção:

Alterações em uma parte (por exemplo, adicionar um novo tipo de implementação) não exigem mudanças na outra parte.

3- Reduz a explosão de subclasses:

Em vez de criar subclasses para todas as combinações possíveis, você pode combinar abstrações e implementações de forma dinâmica.

3- Flexibilidade para expandir:

Você pode adicionar novas abstrações ou implementações sem quebrar o código existente.


Prós:
Separação de responsabilidades:
Divide a abstração da implementação, tornando o código mais modular e fácil de entender.

Facilidade de expansão:
Permite adicionar novas abstrações ou implementações sem modificar o código existente. Isso promove o Open/Closed Principle (princípio aberto/fechado).

Reduz a explosão de subclasses:
Evita a necessidade de criar uma classe para cada combinação possível de abstrações e implementações.

Maior flexibilidade:
A abstração e a implementação podem evoluir de forma independente, sem que uma dependa diretamente da outra.

Reutilização de código:
As implementações podem ser reutilizadas em diferentes abstrações, economizando tempo e esforço.




Contras:

Complexidade adicional:
Introduz mais classes e interfaces, o que pode tornar o design do sistema mais complicado do que o necessário para problemas simples.

Pode ser exagerado para casos simples:
Se você não tem muitas variações de abstração ou implementação, o Bridge Pattern pode parecer um excesso de trabalho.

Dependência indireta:
Embora a abstração não dependa diretamente da implementação, ainda há uma ligação entre elas que precisa ser gerenciada corretamente.

Maior curva de aprendizado:
Para desenvolvedores menos experientes, a separação entre abstração e implementação pode ser confusa inicialmente.


Utilizado em:
Sistemas de Plugin(Ex.: Navegadores)
Renderização Gráfica (OpenGL e DirectX)

Conclusão:
O bridge é um dos patterns mais complexo e não é muito popular.
Porem tem bastante prós que faz com que vale a pena tentar implementar.
Os contras só se aplicam em casos de codigos simples e maior dificuldade de aprendizado,

--------------------------------------------------------------------------------------------------------------------------------
Eu vi num video explicando o pattern bridge dando o exempro do Produdo Cartesiano para entender a explosão de classes

Produto Cartesiano

s1 = { A , B }
s1 = { 1 , 2 }

(B,1)
(B,2)
(A,1)
(A,2)

s1 = { A , B , C }
s1 = { 1 , 2 }

(B,1)
(B,2)
(A,1)
(A,2)
(C,1)
(C,2)

Se fosse fazer o codigo da com_bridge_tamaho_brilho.js sem o pattern bridge ia ter 54 classes comparado com as 9 do codigo



sources:

https://refactoring.guru/pt-br/design-patterns/bridge
https://www.youtube.com/watch?v=F1YQ7YRjttI