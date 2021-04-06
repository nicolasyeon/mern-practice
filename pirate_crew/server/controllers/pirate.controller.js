const Pirate = require('../models/pirate.model');

module.exports = {
    getAll: (req, res) => {
        Pirate.find({})
            .then((allPirates) => {
                console.log(allPirates)
                res.json(allPirates);
            })
            .catch((err) => {
                console.log("error found in getAll")
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {
        console.log(req.body);

        Pirate.create(req.body)
            .then((newPirate) => {
                console.log(newPirate);
                res.json(newPirate);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {
        console.log(req.params.id);

        Pirate.findById(req.params.id)
            .then((onePirate) => {
                console.log(onePirate);
                res.json(onePirate);
            })
            .catch((err) => {
                console.log("error found in getOne");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);

        Pirate.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedPirate) => {
                console.log(updatedPirate);
                res.json(updatedPirate);
            })
            .catch((err) => {
                console.log("error found in update");
                console.log(err);
                res.json(err);
            });
    },

    delete: (req, res) => {
        console.log(req.params.id);

        Pirate.findByIdAndDelete(req.params.id)
            .then((deletedPirate) => {
                console.log(deletedPirate);
                res.json(deletedPirate);
            })
            .catch((err) => {
                console.log("error found in delete");
                console.log(err);
                res.json(err);
            });
    },
}