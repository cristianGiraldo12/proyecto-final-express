module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";

    let colums = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "albumes",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }

    const Album = sequelize.define(alias, colums, config);

    Album.associate = function(modelos){
        Album.hasMany(modelos.Canciones, {
            as: "canciones",
            foreignKey: "album_id"
        })
    }

    return Album;
 }