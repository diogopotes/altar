const charactersController = require('../controllers/characters-controller');

module.exports = (app) => {

    app.get('/', (req, res) => {

        res.send({hi: 'there'});
    
    })


    app.get('/payments', (req, res) => {

        res.send({page: "payments"});
    
    })

    
    app.get('/api/random-characters', charactersController.getRandomCharacters);

    app.get('/api/edit-grid', charactersController.editGrid);

    app.get('/api/get-code', charactersController.getCode)

}

