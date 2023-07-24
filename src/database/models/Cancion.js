module.exports = (sequelize, dataTypes) => {
    let alias = "Canciones";

    let colums = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        },
        genero_id: {
            type: dataTypes.INTEGER
        },
        album_id: {
            type: dataTypes.INTEGER
        },
        artista_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "canciones",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }

    const Cancion = sequelize.define(alias, colums, config);

    Cancion.associate = function(modelos){
        Cancion.belongsTo(modelos.Generos, {
            as: "generoCanciones",
            foreignKey: "genero_id"
        });
        Cancion.belongsTo(modelos.Albumes, {
            as: "albumCancion",
            foreignKey: "album_id"
        });
        Cancion.belongsTo(modelos.Artistas, {
            as: "artistaCancion",
            foreignKey: "artista_id"
        })
    }
    return Cancion;
 }