module.exports = (app) => {

    app.get('/', (req, res) => {

        res.send({hi: 'there'});
    
    })


    app.get('/payments', (req, res) => {

        res.send({page: "payments"});
    
    })


}

