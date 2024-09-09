function cartesianProductSingleSetLimited(set, N, limit = 50) {
    // Verificar si el conjunto está vacío o N <= 0
    if (set.length === 0 || N <= 0) {
        return [[]];
    }

    // Función auxiliar para combinar resultados con límite de filas
    function combine(current, remaining, limit) {
        if (remaining === 0) {
            if (result.length < limit) {
                result.push(current);
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

function getLimitedCombinations(set, N, limit) {
    const totalCombinations = cartesianProductSingleSetLimited(set, N, limit); // Calculamos más para obtener las partes requeridas

    const totalCount = set.length;
    const firstSet = cartesianProductSingleSetLimited(set, N, limit);

    const middleStart = Math.floor(totalCount / 2);
    let newSet = [];
    set.reverse();
    for (let i = middleStart; i< totalCount; i++) {
        newSet.push(set[i]);
    }

    for (let i = 0; i< middleStart; i++) {
        newSet.push(set[i]);
    }
    console.log('newSet', newSet)
    const middleSet = cartesianProductSingleSetLimited(newSet, N, limit);
    
    const lastSet = cartesianProductSingleSetLimited(set, N, limit).reverse();
        
    return [firstSet, middleSet, lastSet];
}

const set = [1, 2, 3, 4, 5, 6]; 
const N = 50;
const limit = 50;
 
let result = getLimitedCombinations(set, N, limit);

console.log('Primeras 50 combinaciones:', result[0]);
console.log('Combinaciones del medio:', result[1]);
console.log('Últimas 50 combinaciones:', result[2]);
