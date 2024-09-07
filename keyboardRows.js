var findWords = function(words) {
    let top = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let mid = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    let bot = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let newArr = [];
    for(let word of words){
        word = word.split('');
        if(top.includes(word[0].toLowerCase())){
        if(word.every((letter) => top.includes(letter.toLowerCase()))){
            newArr.push(word.join(''));
        }
        }
        if(bot.includes(word[0].toLowerCase())){
        if(word.every((letter) => bot.includes(letter.toLowerCase()))){
            newArr.push(word.join(''));
        }
        }
        if(mid.includes(word[0].toLowerCase())){
        if(word.every((letter) => mid.includes(letter.toLowerCase()))){
            newArr.push(word.join(''));
        }
        }
    }
    return newArr;
};
//study
