const db = require("../database/models");

const generosController = {
    "list": (req, res) => {
        db.Generos.findAll({
            include: [
                {association: "canciones"}
            ]
        })
        .then(generos => {
            /* res.send(generos) */
            res.render("generos", {generos})
        })
        .catch(error => {
            res.send(error)
        })
    },
    "detail": (req, res) => {
        db.Generos.findByPk(req.params.id, {
            include: [
                {association: "canciones"}
            ]
        })
        .then(genero => {
            res.render("generosDetail", {genero})
        })
        .catch(error => {
            res.send(error)
        })
    }

}

module.exports = generosController;