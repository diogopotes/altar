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

const getCode = async (req, res) => {

    const grid = req.query.grid;

    const date = new Date();
    let seconds = await date.getSeconds().toString();

    let firstNumber = parseInt(seconds[0]);

    let lastNumber = parseInt(seconds[1]);

    let firstLetter = grid[firstNumber][lastNumber];

    let lastLetter = grid[lastNumber][firstNumber];


    console.log("seconds: ", seconds);

    console.log("first : ", firstNumber);

    console.log("last: ", lastNumber);

    console.log("first letter: ", firstLetter);

    console.log("last letter: ", lastLetter);


}

exports.getRandomCharacters = getRandomCharacters;
exports.getCode = getCode;