function cartesianProductSingleSetLimited(set, N, limit) {
    // Verificar si el conjunto está vacío o N <= 0
    if (set.length === 0 || N <= 0) {
        return [[]];
    }

    // Función auxiliar para combinar resultados con límite de filas
    function combine(current, remaining, limit) {
        if (remaining === 0) {
            if (result.length < limit) {
                result.push(current.slice().reverse());
            }
            return;
        }

        for (let item of set) {
            if (result.length >= limit) {
                return;
            }
            combine(current.concat(item), remaining - 1, limit);
        }
    }

    const result = [];
    combine([], N, limit);
    return result;
}



let result = cartesianProductSingleSetLimited([1,2,3,4,5,6],5,500);
console.log('result', result);