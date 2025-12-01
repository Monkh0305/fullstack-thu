function censorWord(sentence, WordToCensor) {
    const regex = new RegExp(WordToCensor, 'gi');
    const censortext = sentence.replace(regex, '****');
    return censortext;
}
const originalPost = "JavaScript is fun but sometimes JavaScript can be challenging.";
const cleanePost = censorWord(originalPost, "JavaScript");
console.log(cleanePost);