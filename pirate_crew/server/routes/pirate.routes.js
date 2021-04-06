const PirateController = require('../controllers/pirate.controller');
module.exports = function (app) {
    app.post('/api/pirate', PirateController.create);
    app.get('/api/pirate', PirateController.getAll);
    app.get('/api/pirate/:id', PirateController.getOne);
    app.put('/api/pirate/:id', PirateController.update);
    app.delete('/api/pirate/:id', PirateController.delete);
}
