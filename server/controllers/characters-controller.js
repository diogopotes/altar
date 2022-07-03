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

    console.log(req.query.grid)


}

exports.getRandomCharacters = getRandomCharacters;
exports.getCode = getCode;