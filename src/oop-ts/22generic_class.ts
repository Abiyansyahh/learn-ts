interface Generics<T> {
    propA: T,
    methodA(): T
};

class GenericsClass<T> implements Generics<T> {
    propA: T;

    constructor(prop: T) {
        this.propA = prop;
    }

    methodA(): T {
        return this.propA;
    }
}

const genericClassA = new GenericsClass<number>(123);
console.log(genericClassA.methodA());