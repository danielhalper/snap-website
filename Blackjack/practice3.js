// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
    // Break up individual word into individual letters.
    let letters=word.split("");
    let obj={};
    // Count the instances of each letter
    letters.forEach(letter => {
        if(obj[letter]===undefined) {
            obj[letter]=1;
        } else {
            obj[letter]+=1;
        }
    })
    let maxCount=0;
    let maxLetter="";
    // Iterate all the counts and find the highest
    for(objKey in obj) {
        if(obj[objKey] > maxCount) {
            maxCount=obj[objKey]; 
            maxLetter=objKey;
        }
    }
    return maxCount;
    // Return this word's max repeat count
  }
  
  function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';
  
    // Break up input text into words (space-delimited).
    let arrOfWords=text.split(" ");
    let maxWord="";
    arrOfWords.forEach(word => {
        var repeatCountForWord = findMaxRepeatCountInWord(word);
        if(repeatCountForWord>maxRepeatCountOverall) {
            maxRepeatCountOverall=repeatCountForWord;
            wordWithMaxRepeatCount=word;
        }

    })
      // If that max repeat count is higher than the overall max repeat count, then
        // update maxRepeatCountOverall
        // update wordWithMaxRepeatCount
  
    return wordWithMaxRepeatCount;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
 findFirstWordWithMostRepeatedChars("I love boootie so dffsafkjsaf")
  