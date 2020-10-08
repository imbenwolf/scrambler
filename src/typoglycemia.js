export default {
    scramble: input => (
        input
        .split("\n")
        .join(" ")
        .split(" ")
        .map(word => {
          if (word.length > 3 && word[word.length - 1] !== word[word.length - 2] && /^\D*$/.test(word)) {
            let wordChars = word.split("");

            let currentIndex = 1;
            let lastIndex = wordChars.length - 1
            let alphabetReg = /[a-zA-Z]/
            while (wordChars[currentIndex] && !alphabetReg.test(wordChars[currentIndex])) currentIndex++
            while (wordChars[lastIndex] && !alphabetReg.test(wordChars[lastIndex])) lastIndex--

            while (currentIndex < lastIndex) {
              let packageSize = 0;
              let doubleConsonant = false;
              // has enough letters for char package len 2
              if (lastIndex - currentIndex - 2 !== 1) {
                packageSize = 2;
              } else {
                packageSize = 3;
              }

              // double consonant in char package
              if (
                wordChars[currentIndex] === wordChars[currentIndex + 1] ||
                wordChars[currentIndex + 1] === wordChars[currentIndex + 2]
              ) {
                doubleConsonant = true;
                packageSize = 3;
              }

              if (packageSize === 2 || doubleConsonant) {
                let switchIndex = currentIndex + 1;
                if (doubleConsonant) {
                  switchIndex = currentIndex + 2;
                }
                let temp = wordChars[currentIndex];
                wordChars[currentIndex] = wordChars[switchIndex];
                wordChars[switchIndex] = temp;
              } else {
                // random beetween 1 & 5
                let rand = Math.floor(Math.random() * 5) + 1;
                let temp = "";
                switch (rand) {
                  case 1:
                    temp = wordChars[currentIndex];
                    wordChars[currentIndex] = wordChars[currentIndex + 1];
                    wordChars[currentIndex + 1] = wordChars[currentIndex + 2];
                    wordChars[currentIndex + 2] = temp;
                    break;
                  case 2:
                    temp = wordChars[currentIndex];
                    wordChars[currentIndex] = wordChars[currentIndex + 1];
                    wordChars[currentIndex + 1] = temp;
                    break;
                  case 3:
                    temp = wordChars[currentIndex];
                    wordChars[currentIndex] = wordChars[currentIndex + 2];
                    wordChars[currentIndex + 2] = wordChars[currentIndex + 1];
                    wordChars[currentIndex + 1] = temp;
                    break;
                  case 4:
                    temp = wordChars[currentIndex];
                    wordChars[currentIndex] = wordChars[currentIndex + 2];
                    wordChars[currentIndex + 2] = temp;
                    break;
                  case 5:
                    temp = wordChars[currentIndex + 1];
                    wordChars[currentIndex + 1] = wordChars[currentIndex + 2];
                    wordChars[currentIndex + 2] = temp;
                    break;
                }
              }

              currentIndex += packageSize;
            }
            word = wordChars.join("");
          }
          return word
        })
        .join(" ")
    )
}