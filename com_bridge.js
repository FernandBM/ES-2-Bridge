// Com o Padrão Bridge
// Formas e Cores são desacopladas, permitindo variações independentes.

// Interface Implementadora para Cor
class Cor {
    // O método aplicarCor deve ser implementado pelas cores concretas.
    aplicarCor() {
      throw new Error('Este método deve ser sobrescrito!');
    }
  }
  
  // Implementadores Concretos para Cores
  
  // Cor Vermelha
  class CorVermelha extends Cor {
    aplicarCor() {
      return 'Vermelho';
    }
  }
  
  // Cor Azul
  class CorAzul extends Cor {
    aplicarCor() {
      return 'Azul';
    }
  }
  
  // Cor Verde
  class CorVerde extends Cor {
    aplicarCor() {
      return 'Verde';
    }
  }
  
  // Abstração para Forma
  class Forma {
    constructor(cor) {
      // Forma mantém uma referência para um implementador de Cor.
      this.cor = cor;
    }
  
    // O método desenhar deve ser implementado pelas subclasses.
    desenhar() {
      throw new Error('Este método deve ser sobrescrito!');
    }
  }
  
  // Abstrações Refinadas para Formas
  
  // Forma Círculo
  class Circulo extends Forma {
    desenhar() {
      // Utiliza o implementador Cor para aplicar a cor.
      return `Desenhando um Círculo ${this.cor.aplicarCor()}.`;
    }
  }
  
  // Forma Quadrado
  class Quadrado extends Forma {
    desenhar() {
      return `Desenhando um Quadrado ${this.cor.aplicarCor()}.`;
    }
  }
  
  // Forma Triângulo
  class Triangulo extends Forma {
    desenhar() {
      return `Desenhando um Triângulo ${this.cor.aplicarCor()}.`;
    }
  }
  
  
  // Criando instâncias de cores
  const vermelho = new CorVermelha();
  const azul = new CorAzul();
  const verde = new CorVerde();
  
  // Criando instâncias de formas com cores
  const formas = [
    new Circulo(vermelho),    // Círculo Vermelho
    new Quadrado(azul),       // Quadrado Azul
    new Triangulo(verde),     // Triângulo Verde
    new Quadrado(vermelho),   // Quadrado Vermelho
    new Triangulo(azul),      // Triângulo Azul
    new Circulo(verde),       // Círculo Verde
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
  