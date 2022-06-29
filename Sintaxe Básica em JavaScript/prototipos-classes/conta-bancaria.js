class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartoaCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartoaCredito = cartoaCredito;
    }

    get cartoaCredito(){
        return this._cartoaCredito;
    }

    set cartoaCredito(valor){
        this._cartoaCredito = valor;
    }
}

class ContaPoupança extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }

    sacar(valor){
        if(valor > 500){
            return 'operação negada';
        }
        this._saldo = this._saldo - valor;
    }
}