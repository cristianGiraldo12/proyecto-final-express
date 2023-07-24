const db = require("../database/models");

const cancionesController = {
    "list": (req, res) => {
        db.Canciones.findAll({
                include: [
                    {association: "generoCanciones"}
                ]})
        .then(canciones => {
            /* res.send(canciones) */
            res.render("canciones", {canciones})
        })
        .catch(error => {
            res.send(error)
        })
    },
    "detail": (req, res) => {
        db.Canciones.findByPk(req.params.id, {
            include: [
                {association: "generoCanciones"},
                {association: "albumCancion"},
                {association: "artistaCancion"}
            ]})
        .then(cancion => {
            res.render("cancionesDetail", {cancion})
        })
        .catch(error => {
            res.send(error)
        })
    },
    "create": (req, res) => {
        res.render("createCancion")
    },
    "processCreate": (req, res) => {
        db.Canciones.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            genero_id: req.body.genero_id,
            album_id: req.body.album_id,
            artista_id: req.body.artista_id
        })
        .then(cancion => {
            res.redirect("/canciones")
        })
        .catch(error => {
            res.send(error)
        })
    },
    "edit": (req, res) => {
        db.Canciones.findByPk(req.params.id, {
            include: [
                {association: "generoCanciones"},
                {association: "albumCancion"},
                {association: "artistaCancion"}
            ]
        })
        .then(cancion => {
            res.render("editCancion", {Cancion: cancion})
        })
        .catch(error => {
            res.send(error)
        })
    },
    "processEdit": (req, res) => {
        db.Canciones.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            genero_id: req.body.genero_id,
            album_id: req.body.album_id,
            artista_id: req.body.artista_id
        })
        .then(canciones => {
            res.redirect("/canciones")
        })
        .catch(error => {
            res.send(error)
        })
    },
    "delete": (req, res) => {
        db.Canciones.findByPk(req.params.id)
        .then(cancion => {
            res.render("deleteCancion", {Cancion: cancion})
        })
        .catch(error => {
            res.send(error)
        })
    },
    "processDelete": (req, res) => {
        db.Canciones.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(cancion => {
            res.redirect("/canciones")
        })
        .catch(error => {
            res.send(error)
        })
    }
}

module.exports = cancionesController;