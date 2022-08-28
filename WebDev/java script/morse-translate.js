// decodeMorse = function(morseCode){
    const morse = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        }
//     return morseCode.split("   ").map(
//         a => a.split(" ").map(
//             b => morse[b]
//         ).join("")
//     ).join(" ");
//     }
// console.log(decodeMorse('.... ..   . ...- . .-. -.-- --- -. .'));

function makeNegative(num) {
    num = parseInt(num)
    return num - num * 2
}
console.log(makeNegative(9))