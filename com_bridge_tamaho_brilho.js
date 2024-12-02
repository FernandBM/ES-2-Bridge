// Interface Implementadora para Cor
class Cor {
    constructor(brilho) {
        this.brilho = brilho; // 'com brilho' ou 'sem brilho'
    }

    aplicarCor() {
        throw new Error('Este método deve ser sobrescrito!');
    }

    aplicarBrilho() {
        return this.brilho === 'com brilho' ? 'com brilho' : 'sem brilho';
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
        return `Desenhando um Círculo ${this.cor.aplicarCor()} ${this.tamanho.aplicarTamanho()} ${this.cor.aplicarBrilho()}.`;
    }
}

class Quadrado extends Forma {
    desenhar() {
        return `Desenhando um Quadrado ${this.cor.aplicarCor()} ${this.tamanho.aplicarTamanho()} ${this.cor.aplicarBrilho()}.`;
    }
}

class Triangulo extends Forma {
    desenhar() {
        return `Desenhando um Triângulo ${this.cor.aplicarCor()} ${this.tamanho.aplicarTamanho()} ${this.cor.aplicarBrilho()}.`;
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

// Criando instâncias de brilho
const comBrilho = 'com brilho';
const semBrilho = 'sem brilho';

// Criando instâncias de cores com brilho
const vermelhoComBrilho = new CorVermelha(comBrilho);
const azulSemBrilho = new CorAzul(semBrilho);
const verdeComBrilho = new CorVerde(comBrilho);

// Criando instâncias de tamanhos
const pequeno = new TamanhoPequeno();
const medio = new TamanhoMedio();
const grande = new TamanhoGrande();

// Criando instâncias de formas com cores, tamanhos e brilho
const formas = [
    new Circulo(vermelhoComBrilho, pequeno),     // Círculo Vermelho Pequeno com Brilho
    new Quadrado(azulSemBrilho, medio),          // Quadrado Azul Médio sem Brilho
    new Triangulo(verdeComBrilho, grande),       // Triângulo Verde Grande com Brilho
    new Quadrado(vermelhoComBrilho, grande),     // Quadrado Vermelho Grande com Brilho
    new Triangulo(azulSemBrilho, pequeno),       // Triângulo Azul Pequeno sem Brilho
    new Circulo(verdeComBrilho, medio),          // Círculo Verde Médio com Brilho
];

formas.forEach(forma => {
    console.log(forma.desenhar());
});

// Saídas:
// Desenhando um Círculo Vermelho Pequeno com brilho.
// Desenhando um Quadrado Azul Médio sem brilho.
// Desenhando um Triângulo Verde Grande com brilho.
// Desenhando um Quadrado Vermelho Grande com brilho.
// Desenhando um Triângulo Azul Pequeno sem brilho.
// Desenhando um Círculo Verde Médio com brilho.
