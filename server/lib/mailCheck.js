
export function mailCheck(str) {

    function textContainsOnlyAllowedSymbols(str, abc) {
        return str.split('').map(s => abc.includes(s)).every(x => x === true);
    }
    
    function firstNonAllowedSymbol(str, abc) {
        return str.split('').filter(s => !abc.includes(s))[0] ?? '';
    }
    const mailMinSize = 3;
    const mailMaxSize = 30;
    const mailAllowedABC = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ.@';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Trūksta elektroninio pašto';
    } else if (str.length < mailMinSize) {
        errorMessage = `Elektroninis paštas per trumpas, turi būti minimum ${mailMinSize} simboliai`;
    } else if (str.length > mailMaxSize) {
        errorMessage = `Elektroninis paštas per ilgas, negali viršyti ${mailMaxSize} simbolių`;
    } else if (!textContainsOnlyAllowedSymbols(str, mailAllowedABC)) {
        errorMessage = `pašte rastas neleistinas simbolis "${firstNonAllowedSymbol(str, mailAllowedABC)}"`;
    } 

    return errorMessage;
}