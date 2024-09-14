export function cartesianProductDices(N, limit, startIndex = 0) {
    if (N <= 0) {
        return [[]];
    }
    let set = [1,2,3,4,5,6]; 
    // Función auxiliar para combinar resultados con límite de filas
    function combine(current, remaining, limit, currentIndex) {
        if (remaining === 0) {
            if (result.length < limit && currentIndex >= startIndex) {
                result.push(current.slice().reverse());
            }
            currentIndex++;
            return currentIndex;
        }

        for (let item of set) {
            if (result.length >= limit) {
                return currentIndex;
            }
            currentIndex = combine(current.concat(item), remaining - 1, limit, currentIndex);
        }
        return currentIndex;
    }

    const result = [];
    let currentIndex = 0;
    combine([], N, limit, currentIndex);
    return result;
}



let result = cartesianProductDices(5,100, 500);
console.log('result', result);