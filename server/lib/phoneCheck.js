
export function phoneCheck(str) {

    function textContainsOnlyAllowedSymbols(str, abc) {
        return str.split('').map(s => abc.includes(s)).every(x => x === true);
    }
    
    function firstNonAllowedSymbol(str, abc) {
        return str.split('').filter(s => !abc.includes(s))[0] ?? '';
    }
    const phoneMinSize = 7;
    const phoneMaxSize = 12;
    const phoneAllowedABC = '+0123456789';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Trūksta telefono numerio';
    } else if (str.length < phoneMinSize) {
        errorMessage = `Telefono numeris per trumpas, turi būti minimum ${phoneMinSize} simboliai`;
    } else if (str.length > phoneMaxSize) {
        errorMessage = `Telefono numeris per ilgas, negali viršyti ${phoneMaxSize} simbolių`;
    } else if (!textContainsOnlyAllowedSymbols(str, phoneAllowedABC)) {
        errorMessage = `Telefono numeryje rastas neleistinas simbolis "${firstNonAllowedSymbol(str, phoneAllowedABC)}"`;
    } 

    return errorMessage;
}