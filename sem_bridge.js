// Sem o Padrão Bridge
// Cada combinação de forma e cor tem sua própria classe.

// Classe base Forma
class Forma {
    // O método desenhar deve ser implementado pelas subclasses.
    desenhar() {
      throw new Error('Este método deve ser sobrescrito!');
    }
  }
  
  // Classes de Combinação Forma-Cor
  // Para cada combinação de forma e cor, temos uma classe única.
  
  // Círculo Vermelho
  class CirculoVermelho extends Forma {
    desenhar() {
      return 'Desenhando um Círculo Vermelho.';
    }
  }
  
  // Círculo Azul
  class CirculoAzul extends Forma {
    desenhar() {
      return 'Desenhando um Círculo Azul.';
    }
  }
  
  // Círculo Verde
  class CirculoVerde extends Forma {
    desenhar() {
      return 'Desenhando um Círculo Verde.';
    }
  }
  
  // Quadrado Vermelho
  class QuadradoVermelho extends Forma {
    desenhar() {
      return 'Desenhando um Quadrado Vermelho.';
    }
  }
  
  // Quadrado Azul
  class QuadradoAzul extends Forma {
    desenhar() {
      return 'Desenhando um Quadrado Azul.';
    }
  }
  
  // Quadrado Verde
  class QuadradoVerde extends Forma {
    desenhar() {
      return 'Desenhando um Quadrado Verde.';
    }
  }
  
  // Triângulo Vermelho
  class TrianguloVermelho extends Forma {
    desenhar() {
      return 'Desenhando um Triângulo Vermelho.';
    }
  }
  
  // Triângulo Azul
  class TrianguloAzul extends Forma {
    desenhar() {
      return 'Desenhando um Triângulo Azul.';
    }
  }
  
  // Triângulo Verde
  class TrianguloVerde extends Forma {
    desenhar() {
      return 'Desenhando um Triângulo Verde.';
    }
  }
  
  // Utilizando as classes
  const formas = [
    new CirculoVermelho(),
    new QuadradoAzul(),
    new TrianguloVerde(),
    new QuadradoVermelho(),
    new TrianguloAzul(),
    new CirculoVerde(),
  ];
  
  // Exibindo os resultados
  formas.forEach(forma => {
    console.log(forma.desenhar());
  });
  
  // Saídas:
  // Desenhando um Círculo Vermelho.
  // Desenhando um Quadrado Azul.
  // Desenhando um Triângulo Verde.
  // Desenhando um Quadrado Vermelho.
  // Desenhando um Triângulo Azul.
  // Desenhando um Círculo Verde.
  