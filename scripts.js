textInput = document.querySelector("#text-input")
wordCountArea = document.querySelector("span.word")
charCountArea = document.querySelector("span.char")
charCountWithoutSpacesArea = document.querySelector("span.char-without-spaces")

textInput.addEventListener("input", () => {
    enteredText = textInput.value

    if (textInput.value != "") {
        wordCount = numberOfWords(enteredText)
        charCount = numberOfChars(enteredText)
        charCountWithoutSpaces = numberOfCharsWithoutSpaces(enteredText)
    } else {
        wordCount = ""
        charCount = ""
        charCountWithoutSpaces = ""
    }

    wordCountArea.innerText = wordCount
    charCountArea.innerText = charCount
    charCountWithoutSpacesArea.innerText = charCountWithoutSpaces

})


numberOfWords = function(rawText) {
    wordsListRaw = rawText.trim().split(" ")
    wordsList = []
    wordsListRaw.forEach(element => {
        if (element != "") {
            wordsList.push(element)
        }
    });
    return wordsList.length
}

numberOfChars = function(rawText) {
    return rawText.trim().split("").length
}

numberOfCharsWithoutSpaces = function(rawText) {
    return rawText.trim().split(" ").join("").length
}

document.querySelector("span.year").innerText = new Date().getFullYear()
