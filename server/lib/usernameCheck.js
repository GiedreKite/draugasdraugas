
export function usernameCheck(str) {

    function textContainsOnlyAllowedSymbols(str, abc) {
        return str.split('').map(s => abc.includes(s)).every(x => x === true);
    }
    
    function firstNonAllowedSymbol(str, abc) {
        return str.split('').filter(s => !abc.includes(s))[0] ?? '';
    }
    const usernameMinSize = 3;
    const usernameMaxSize = 20;
    const usernameAllowedABC = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Trūksta vartotojo vardo';
    } else if (str.length < usernameMinSize) {
        errorMessage = `Vartotojo vardas per trumpas, turi būti minimum ${usernameMinSize} simboliai`;
    } else if (str.length > usernameMaxSize) {
        errorMessage = `Vartotojo vardas per ilgas, negali viršyti ${usernameMaxSize} simbolių`;
    } else if (!textContainsOnlyAllowedSymbols(str, usernameAllowedABC)) {
        errorMessage = `Vartotojo varde rastas neleistinas simbolis "${firstNonAllowedSymbol(str, usernameAllowedABC)}"`;
    } 

    return errorMessage;
}