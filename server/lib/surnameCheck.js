
export function surnameCheck(str) {

    function textContainsOnlyAllowedSymbols(str, abc) {
        return str.split('').map(s => abc.includes(s)).every(x => x === true);
    }
    
    function firstNonAllowedSymbol(str, abc) {
        return str.split('').filter(s => !abc.includes(s))[0] ?? '';
    }
    const surnameMinSize = 3;
    const surnameMaxSize = 30;
    const surnameAllowedABC = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžAĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ';
    let errorMessage = '';

    if (typeof str !== 'string') {
        errorMessage = 'Trūksta pavardės';
    } else if (str.length < surnameMinSize) {
        errorMessage = `Pavardė per trumpa, turi būti minimum ${surnameMinSize} raidės`;
    } else if (str.length > surnameMaxSize) {
        errorMessage = `Pavardė per ilga, negali viršyti ${surnameMaxSize} raidžių`;
    } else if (!textContainsOnlyAllowedSymbols(str, surnameAllowedABC)) {
        errorMessage = `Pavardėje rasta neleistina raidė "${firstNonAllowedSymbol(str, surnameAllowedABC)}"`;
    } else if (str[0].toUpperCase() !== str[0]) {
        errorMessage = `Pavardė turi prasidėti didžiąja raide`;
    }

    return errorMessage;
}