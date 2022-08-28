// function smash (words) {
//     let sentence = "";
//     if (words.length === 0){
//         return sentence;
//     }else{
//     sentence = sentence + words[0];
//     for (let i = 1; i < words.length; i++)
//         sentence = sentence + " " + words[i] ;
//         return sentence; 
//     }
//   };
// console.log(smash([]))

function removeChar(str){
    return str.replace(str[0], "").replace(/.$/, '');;
}
console.log(removeChar('Masteringjs.ioF'));