const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const letters = expr.split('**********');
    let newStr = '';

    for (const letter of letters) {
        let morseCode = '';
        for (let i = 0; i < letter.length; i += 10) {
            const part = letter.substr(i, 10);
            let morsePart = '';
            for (let j = 0; j < 10; j += 2) {
                const pair = part.substr(j, 2);
                if (pair === '10') {
                    morsePart += '.';
                } else if (pair === '11') {
                    morsePart += '-';
                }
            }
            morseCode += MORSE_TABLE[morsePart];
        }
        newStr += morseCode + ' ';
    }

    return newStr.trim();

}


module.exports = {
    decode
}

