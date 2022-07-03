const getRandomCharacters = async (req, res) => {


    try {

        res.json({controller: "random characters"})


    } catch(err) {


        res.json({error: "error"}) 

    }


}

exports.getRandomCharacters = getRandomCharacters;