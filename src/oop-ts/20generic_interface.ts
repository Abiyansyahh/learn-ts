interface Generic<T> {
    propA: T
}

function genericsFunction<T>(value: T): Generic<T> {
    let data: Generic<T> = {
        propA: value
    };

    return data;
}

console.log(genericsFunction<string>('fhgsh'));
console.log(genericsFunction<number>(12321));
console.log(genericsFunction<boolean>(true));