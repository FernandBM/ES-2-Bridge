// Com o Padrão Bridge
// Formas, Cores e Tamanhos são desacoplados.

// Interface Implementadora para Cor
class Cor {
    aplicarCor() {
      throw new Error('Este método deve ser sobrescrito!');
    }
  }
  
  // Implementadores Concretos para Cor
  class CorVermelha extends Cor {
    aplicarCor() {
      return 'Vermelho';
    }
  }
  
  class CorAzul extends Cor {
    aplicarCor() {
      return 'Azul';
    }
  }
  
  class CorVerde extends Cor {
    aplicarCor() {
      return 'Verde';
    }
  }
  
  // Interface Implementadora para Tamanho
  class Tamanho {
    aplicarTamanho() {
      throw new Error('Este método deve ser sobrescrito!');
    }
  }
  
  // Implementadores Concretos para Tamanho
  class TamanhoPequeno extends Tamanho {
    aplicarTamanho() {
      return 'Pequeno';
    }
  }
  
  class TamanhoMedio extends Tamanho {
    aplicarTamanho() {
      return 'Médio';
    }
  }
  
  class TamanhoGrande extends Tamanho {
    aplicarTamanho() {
      return 'Grande';
    }
  }
  
  // Abstração para Forma
  class Forma {
    constructor(cor, tamanho) {
      this.cor = cor;
      this.tamanho = tamanho;
    }
  
    desenhar() {
      throw new Error('Este método deve ser sobrescrito!');
    }
  }
  
  // Abstrações Refinadas para Formas
  class Circulo extends Forma {
    desenhar() {
      return `Desenhando um Círculo ${this.cor.aplicarCor()} ${this.tamanho.aplicarTamanho()}.`;
    }
  }
  
  class Quadrado extends Forma {
    desenhar() {
      return `Desenhando um Quadrado ${this.cor.aplicarCor()} ${this.tamanho.aplicarTamanho()}.`;
    }
  }
  
  class Triangulo extends Forma {
    desenhar() {
      return `Desenhando um Triângulo ${this.cor.aplicarCor()} ${this.tamanho.aplicarTamanho()}.`;
    }
  }
  
  // Utilizando o Padrão Bridge
  
  // Criando instâncias de cores
  const vermelho = new CorVermelha();
  const azul = new CorAzul();
  const verde = new CorVerde();
  
  // Criando instâncias de tamanhos
  const pequeno = new TamanhoPequeno();
  const medio = new TamanhoMedio();
  const grande = new TamanhoGrande();
  
  // Criando instâncias de formas com cores e tamanhos
  const formas = [
    new Circulo(vermelho, pequeno),    // Círculo Vermelho Pequeno
    new Quadrado(azul, medio),         // Quadrado Azul Médio
    new Triangulo(verde, grande),      // Triângulo Verde Grande
    new Quadrado(vermelho, grande),    // Quadrado Vermelho Grande
    new Triangulo(azul, pequeno),      // Triângulo Azul Pequeno
    new Circulo(verde, medio),         // Círculo Verde Médio
  ];
  
  formas.forEach(forma => {
    console.log(forma.desenhar());
  });
  
  // Saídas:
  // Desenhando um Círculo Vermelho Pequeno.
  // Desenhando um Quadrado Azul Médio.
  // Desenhando um Triângulo Verde Grande.
  // Desenhando um Quadrado Vermelho Grande.
  // Desenhando um Triângulo Azul Pequeno.
  // Desenhando um Círculo Verde Médio.
  