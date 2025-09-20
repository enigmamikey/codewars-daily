function titleCase(title, minor) {
    if (title == '') return ''
    if (minor == undefined) minor = ''
    let titleWords = breakIntoWords(title)
    let minorWords = breakIntoWords(minor)
    titleWords[0] = capitalize(titleWords[0])
    for (let i = 1; i < titleWords.length; i++) {
        if (!isMinor(titleWords[i])) titleWords[i] = capitalize(titleWords[i])
    }
    let str = titleWords[0]
    for (let i = 1; i < titleWords.length; i++) str += ' ' + titleWords[i]
    return str

    function isMinor(word) {
        for (let i = 0; i < minorWords.length; i++) {
            if (word == minorWords[i]) return true
        }
        return false
    }

    function capitalize(str) {
        let word = str[0].toUpperCase()
        for (let i = 1; i < str.length; i++) {
            word += str[i]
        }
        return word
    }

    function breakIntoWords(string) {
        let words = []
        let word = ''
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ' ') {
                words[words.length] = word.toLowerCase()
                word = ''
            }
            else word += string[i]
        }
        words[words.length] = word.toLowerCase()
        return words
    }
}