const getRandomCharacters = (req, res) => {


    let characterGrid = [];

    for(let i = 0; i < 10; i++) {

        let arr = [];

        for(let j = 0; j < 10; j++) {

            const character = generateRandomCharacter();

            arr.push(character);

        }

        characterGrid.push(arr);

    }


    res.json({randomCharacters: characterGrid});

}

const generateRandomCharacter = () => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

    return randomCharacter;

}

const getCode = (req, res) => {

    const grid = req.query.grid;

    const date = new Date();
    let seconds = date.getSeconds().toString();

    let firstNumber = 0;

    let lastNumber = 0;

    firstNumber = parseInt(seconds[0]);

    lastNumber = parseInt(seconds[1]);

    let firstLetter = "";

    let lastLetter = "";

    firstLetter = grid[firstNumber][lastNumber];

    lastLetter = grid[lastNumber][firstNumber];

    let countFirst = 0;

    let countLast = 0;

    grid.map((arr) => {

        if(arr.includes(firstLetter)) {

            countFirst++;

        }

        if(arr.includes(lastLetter)) {

            countLast++;

        }

    })

    if(countFirst > 9) {

        countFirst = 9;

    }

    if(countLast > 9) {

        countLast = 9;

    }

    let digits = countFirst.toString() + countLast.toString();

    res.json({code: digits});

}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const editGrid = (req, res) => {

    let letter = req.query.letter;

    let arr = [];

    for(let j = 0; j < 100; j++) {

            if(j < 20) {

                arr.push(letter)

            } else {

                const character = generateRandomCharacter();

                arr.push(character);

            }

    }

    shuffleArray(arr);

    let characterGrid = [];

    for(let i = 0; i < arr.length; i+=10) {

        let n10 = arr.slice(i,i+10);

        characterGrid.push(n10);


    }

    res.json({newCharacters: characterGrid});


}

exports.getRandomCharacters = getRandomCharacters;
exports.getCode = getCode;
exports.editGrid = editGrid;