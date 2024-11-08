{

    function countWordOccurrences(sentence:string, word:string):number{

        const lowercaseSentence = sentence.toLocaleLowerCase()

        const lowercaseWord = word.toLocaleLowerCase()

        const makeSentenceToword = lowercaseSentence.split(' ') 

       return makeSentenceToword.filter( word=> word ===lowercaseWord).length

    }

  



}