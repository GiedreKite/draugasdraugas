
export function passCheck(str) {

    function textContainsOnlyAllowedSymbols(str, abc) {
        return str.split('').map(s => abc.includes(s)).every(x => x === true);
    }
    
    function firstNonAllowedSymbol(str, abc) {
        return str.split('').filter(s => !abc.includes(s))[0] ?? '';
    }
    const passMinSize = 12;
    const passMaxSize = 100;
    const passAllowedABC = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ0123456789';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Trūksta slaptažodžio';
    } else if (str.length < passMinSize) {
        errorMessage = `Slaptažodis per trumpas, turi būti minimum ${passMinSize} simboliai`;
    } else if (str.length > passMaxSize) {
        errorMessage = `Slaptažodis per ilgas, negali viršyti ${passMaxSize} simbolių`;
    } else if (!textContainsOnlyAllowedSymbols(str, passAllowedABC)) {
        errorMessage = `pašte rastas neleistinas simbolis "${firstNonAllowedSymbol(str, passAllowedABC)}"`;
    } 

    return errorMessage;
}