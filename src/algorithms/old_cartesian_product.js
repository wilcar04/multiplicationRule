function cartesianProductSingleSetLimited(set, N, limit) {
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
// ESTA ES LA FUNCIÓN QUE SE VA A USAR DESDE EL FRONT
function getLimitedCombinations(N, currentShowedNumber) {
    let firstSet, lastSet = null;
    if (set.length**N > limit*2){
        firstSet = cartesianProductSingleSetLimited(set, N, limit);
        lastSet = cartesianProductSingleSetLimited(set.reverse(), N, limit).reverse();
    } else{
        firstSet = cartesianProductSingleSetLimited(set, N, limit*2);
    }
    return [firstSet, lastSet];
}

const set = [1, 2]; 
const N = 10;
const limit = 300;
 
let result = getLimitedCombinations(set, N, limit);

console.log(result[0].length,'Primeras 50 combinaciones:', result[0]);
console.log(result[1]?.length,'Últimas 50 combinaciones:', result[1]);
